namespace $.$$ {
  export class $scale_centrifuge extends $.$scale_centrifuge {
    @$mol_mem
    client() {
      return new $scale_centrifuge_lib(
        "ws://192.168.88.67:8877/connection/websocket"
      );
    }

    @$mol_mem
    state() {
      return this.client().state;
    }

    @$mol_action
    subscribe() {
      const weightChannel = this.client().newSubscription("channel");
      console.log("ccc", weightChannel);
      weightChannel.on("publication", (ctx) => {
        console.log("weight sub", ctx.data);
      });
      weightChannel.subscribe();
      this.client().connect();
    }

    auto() {
      this.client();
      this.state();
      this.subscribe();
    }
  }
}
