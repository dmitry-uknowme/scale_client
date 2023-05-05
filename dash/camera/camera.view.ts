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
      return new MediaStream();
    }
    // @$mol_mem
    // stream() {
    //   return new MediaStream();
    // }

    @$mol_mem
    pc() {
      return new RTCPeerConnection(this.config());
    }

    @$mol_action
    init_remote_sdp() {
      const data = $mol_fetch.json(
        `http://localhost:8083/stream/receiver/H264_AAC`,
        {
          method: "POST",
          body: JSON.stringify({
            suuid: "H264_AAC",
            data: btoa(this?.pc()?.localDescription?.sdp!),
          }),
        }
      );
      this.pc().setRemoteDescription(
        new RTCSessionDescription({
          type: "answer",
          sdp: atob(data),
        })
      );
    }

    @$mol_action
    init_codec_info() {
      const data = $mol_fetch.json(
        `http://localhost:8083/stream/codec/H264_AAC`
      );
      this.pc().addTransceiver("video", {
        direction: "sendrecv",
      });
    }

    @$mol_action
    handle_negotiation_needed() {
      const offer = this.pc().createOffer();
      this.pc().setLocalDescription(offer);
    }

    auto() {
      this.pc().onnegotiationneeded = this.handle_negotiation_needed;
      this.pc().ontrack = function (event) {
        console.log("evvvv", event);
        this.stream().addTrack(event.track);
        console.log("ddd", this.dom_node());
        this.dom_node().srcObject = this.stream();
        console.log(event.streams.length + " track is delivered");
      };

      this.pc().oniceconnectionstatechange = (e) =>
        console.log(this.pc().iceConnectionState);

      this.init_codec_info();
      //   this.init_remote_sdp();
    }
  }
}
