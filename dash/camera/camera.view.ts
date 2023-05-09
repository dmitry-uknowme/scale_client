namespace $.$$ {
  export class $scale_dash_camera extends $.$scale_dash_camera {
    @$mol_mem
    id() {
      return "CAMERA_1";
    }
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
      const formData = new FormData();
      formData.append("suuid", this.id());
      formData.append("data", btoa(pc?.localDescription?.sdp));
      try {
        const data = $mol_fetch.json(
          "http://localhost:8083/stream/receiver/CAMERA_1",
          {
            method: "POST",
            body: formData,
          }
        );
        console.log("rrrrr", data);
        pc.setRemoteDescription(
          new RTCSessionDescription({
            type: "answer",
            sdp: atob(data),
          })
        );
      } catch (err) {
        throw new Error("Response failed", err);
      }
    }

    @$mol_action
    init_codec_info() {
      //   const data = $mol_fetch.json(
      //     `http://localhost:8083/stream/codec/H264_AAC`
      //   );
      this.pc().addTransceiver("video", {
        direction: "sendrecv",
      });
    }

    /* Вот так должно работать  */
    // async function handleNegotiationNeededEvent() {
    //   let offer = await pc.createOffer();
    //   await pc.setLocalDescription(offer);
    //   getRemoteSdp();
    // }

    /* Вот так должно работать  */

    @$mol_action
    handle_negotiation_needed(event) {
      const pc = $mol_wire_sync(event.target) as RTCPeerConnection;
      const offer = pc.createOffer();
      console.log("offer", offer);
      pc.setLocalDescription(offer);
      console.log("sdp", pc.localDescription);
      this.init_remote_sdp.call(this, pc);
    }

    @$mol_mem
    pc() {
      const pc = new RTCPeerConnection(this.config());
      pc.addTransceiver("video", {
        direction: "sendrecv",
      });

      pc.onnegotiationneeded = (event) =>
        $mol_wire_async(this.handle_negotiation_needed).call(this, event);

      pc.onconnectionstatechange = (state) => console.log("state", state);
      pc.ontrack = (event) => {
        console.log("sss", event);
        this.stream().addTrack(event.track);
        this.dom_node().srcObject = this.stream();
        console.log(event.streams.length + " track is delivered");
      };
      pc.oniceconnectionstatechange = (e) => console.log(pc.iceConnectionState);
      return pc;
    }

    // auto() {
    //   this.pc(new RTCPeerConnection(this.config()));
    //   this.pc().addTransceiver("video", {
    //     direction: "sendrecv",
    //   });
    //   this.pc().onnegotiationneeded = this.handle_negotiation_needed();

    //   this.pc().onconnectionstatechange = (state) =>
    //     console.log("state", state);
    //   this.pc().ontrack = (event) => {
    //     console.log("sss", event);
    //     this.stream().addTrack(event.track);
    //     this.dom_node().srcObject = this.stream();
    //     console.log(event.streams.length + " track is delivered");
    //   };
    //   this.pc().oniceconnectionstatechange = (e) =>
    //     console.log(this.pc().iceConnectionState);
    // }
  }
}
