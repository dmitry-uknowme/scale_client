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
      return $mol_wire_sync(new MediaStream());
    }

    @$mol_action
    init_remote_sdp(pc: RTCPeerConnection) {
      //   this.error({
      //     text: "Ошибка при подключении к камере",
      //     type: "Promise",
      //   });
      const formData = new FormData();
      formData.append("suuid", this.id());
      formData.append("data", btoa(pc?.localDescription?.sdp!));

      //   try {
      //     const data = $mol_fetch.json(
      //       `http://localhost:8083/stream/receiver/${this.id()}`,
      //       {
      //         method: "POST",
      //         body: formData,
      //       }
      //     );
      //     console.log("rrrrr", data);
      //     pc.setRemoteDescription(
      //       new RTCSessionDescription({
      //         type: "answer",
      //         sdp: atob(data),
      //       })
      //     );
      //   } catch (err) {
      //     this.error({
      //       text: "Ошибка при подключении к камере",
      //       type: "LogicError",
      //     });

      //     new $mol_after_timeout(2000, () => this.init_remote_sdp.call(this, pc));
      //     throw new Error("Response failed", err);
      //   }
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

      //@ts-expect-error
      this.init_remote_sdp.call(this, pc);
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

    @$mol_mem
    dom_name(): string {
      return this.controls_enabled() ? super.dom_name() : "div";
    }

    @$mol_mem
    pc() {
      const pc = new RTCPeerConnection(this.config());

      this.init_codec_info(pc);

      pc.onnegotiationneeded = (event) =>
        $mol_wire_async(this.handle_negotiation_needed).call(this, event);

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
  }
}
