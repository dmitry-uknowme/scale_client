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
      stream.onaddtrack = $mol_wire_async(this).handle_add_track;
      return stream;
    }

    @$mol_action
    handle_add_track(event: MediaStreamTrackEvent) {
      console.log("event", event);
      $mol_wire_async(() => this.init_track(event));
      //   $mol_wire_async(this).init_track(event.track.id);
    }

    @$mol_action
    init_track(trackId: string) {
      console.log("id", trackId);
      try {
        const data = $mol_fetch.json(`/api/track/${trackId}`);
        console.log("data", data);
      } catch (error) {
        console.log("error");
        if (error instanceof Error) {
          console.log("error", error);
        }
      }
    }

    @$mol_action
    init_remote_sdp(pc: RTCPeerConnection) {
      this.error({
        text: "Ошибка при подключении к камере",
        type: "Promise",
      });

      console.log("start init");
      try {
        const formData = new FormData();
        formData.append("suuid", this.id());
        formData.append("data", btoa(pc?.localDescription?.sdp!));
        // console.log(globalThis.fetch, window.fetch);
        // console.log("fff", formData.get("suuid"), formData.get("data"));
        const response = $mol_fetch.text(
          //   `https://jsonplaceholder.typicode.com/posts`,
          `http://localhost:8083/stream/receiver/${this.id()}`,
          {
            method: "POST",
            body: formData,
            // body: JSON.stringify({
            //   suuid: this.id(),
            //   data: btoa(pc?.localDescription?.sdp!),
            // }),
            // body: new URLSearchParams({
            //   suuid: this.id(),
            //   data: pc?.localDescription?.sdp!,
            // }),
            // headers: { "Content-Type": "multipart/form-data" },
          }
        );
        // const json = $mol_wire_sync(response).text();
        // const json = $mol_fetch.text(
        //   `http://localhost:8083/stream/receiver/${this.id()}`,
        //   { method: "POST", body: formData }
        // );
        console.log("Response JSON:", response);
      } catch (error) {
        if (error instanceof Promise) {
          this.error({
            text: "Ошибка при подключении к камере",
            type: "LogicError",
          });
          throw error;
        }
        // this.error({
        //   text: "Ошибка при подключении к камере",
        //   type: "LogicError",
        // });
        // new $mol_after_timeout(5000, () => this.init_remote_sdp(pc));
        console.log("errr", error);
      }
      //   try {
      //     // console.log(
      //     //   "d",
      //     //   Buffer.from(pc.localDescription?.sdp).toString("base64")
      //     // );
      //     // Buffer.toString('base64')
      //     const formData = new FormData();
      //     formData.append("suuid", this.id());
      //     formData.append("data", btoa(pc?.localDescription?.sdp!));
      //     const data = $mol_fetch.text(
      //       `http://localhost:8083/stream/receiver/${this.id()}`,
      //       {
      //         method: "POST",
      //         body: formData,
      //       }
      //     );
      //     console.log("data", data);
      //     this.error(null);
      //     pc.setRemoteDescription(
      //       new RTCSessionDescription({
      //         type: "answer",
      //         sdp: atob(data),
      //       })
      //     );
      //     console.log("data", data);
      //   } catch (err) {
      //     if (err instanceof Error) {
      //       console.log("err", err);
      //       this.error({
      //         text: "Ошибка при подключении к камере",
      //         type: "LogicError",
      //       });
      //       new $mol_after_timeout(2000, () =>
      //         this.init_remote_sdp.call(this, pc)
      //       );
      //       throw new Error("Response failed", err);
      //     }
      //     if (err instanceof Promise) {
      //       throw new err();
      //       //   console.log("err", err);
      //     }
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
  }
}
