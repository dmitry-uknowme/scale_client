namespace $.$$ {
  export class $scale_dash_camera extends $.$scale_dash_camera {
    @$mol_mem
    config() {
      return {
        iceServers: [
          {
            urls: ["stun:stun.l.google.com:19302"],
          },
        ],
      };
    }

    @$mol_mem
    stream() {
      const stream = new MediaStream();
      return stream;
    }

    @$mol_mem
    form_data() {
      const formData = new FormData();
      formData.append("suuid", this.id());
      formData.append("data", btoa(this.pc()?.localDescription?.sdp!));
      return formData;
    }

    @$mol_action
    init_remote_sdp(pc: RTCPeerConnection) {
      this.error({
        text: "Идет подключение к камере...",
        type: "Promise",
      });

      try {
        const formData = this.form_data();
        const response = $mol_fetch.text(
          `http://localhost:8083/stream/receiver/${this.id()}`,
          {
            method: "POST",
            body: formData,
          }
        );

        console.log("Response JSON:", response);
        this.pc().setRemoteDescription(
          new RTCSessionDescription({
            type: "answer",
            sdp: atob(response),
          })
        );
        this.error(null);
        // this.play();
        const playPromise = this.play() || Promise.reject("");
        playPromise
          .then(() => {
            // Video could be autoplayed, do nothing.
          })
          .catch((err) => {
            // Video couldn't be autoplayed because of autoplay policy. Mute it and play.
            this.muted();
            this.play();
          });
      } catch (error) {
        if (error instanceof Promise) {
          throw error;
        }
        this.error({
          text: "Ошибка при подключении к камере",
          type: "LogicError",
        });
        // this.error({
        //   text: "Ошибка при подключении к камере",
        //   type: "LogicError",
        // });
        new $mol_after_timeout(2000, () => this.init_remote_sdp(pc));
      }
    }

    @$mol_action
    init_codec_info(pc: RTCPeerConnection) {
      pc.addTransceiver("video", {
        direction: "sendrecv",
      });
    }

    @$mol_action
    handle_negotiation_needed(event: Event) {
      const pc = $mol_wire_sync(event.target as RTCPeerConnection);
      //@ts-expect-error
      const offer = pc.createOffer();
      console.log("offer", offer);
      //@ts-expect-error
      pc.setLocalDescription(offer);
      console.log("sdp", pc.localDescription);
      $mol_wire_async(this).init_remote_sdp(pc);
    }

    @$mol_mem
    error(next: { text: string; type: string } | null = null) {
      return next;
    }

    @$mol_mem
    error_text() {
      return this.error()?.text ?? null;
    }

    @$mol_mem
    error_type() {
      return this.error()?.type ?? null;
    }

    @$mol_mem
    controls_enabled(): boolean {
      return this.error() === null;
    }

    // @$mol_mem
    // controls(): string | null {
    //   return this.controls_enabled() ? "" : null;
    // }

    @$mol_mem
    dom_name(): string {
      return this.controls_enabled() ? super.dom_name() : "div";
    }

    @$mol_mem
    pc() {
      const pc = new RTCPeerConnection(this.config());

      this.init_codec_info(pc);

      pc.onnegotiationneeded = $mol_wire_async(this).handle_negotiation_needed;
      // this.handle_negotiation_needed.call(this, event);

      pc.onconnectionstatechange = (state) =>
        console.log("state changed", state);
      pc.ontrack = (event) => {
        console.log("track event", event);
        this.stream().addTrack(event.track);
        (this.dom_node() as HTMLVideoElement).srcObject = this.stream();
        console.log(event.streams.length + " track is delivered");
      };
      pc.oniceconnectionstatechange = (e) => console.log(pc.iceConnectionState);
      return pc;
    }

    // attr() {
    //   return {
    //     ...super.attr(),
    //     controls: this.controls_enabled(),
    //     muted: "",
    //     mol_view_error: this.error_type(),
    //     id: this.id(),
    //     pc: this.pc(),
    //     stream: this.stream(),
    //   };
    // }
  }
}
