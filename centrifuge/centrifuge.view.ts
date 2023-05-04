namespace $.$$ {
  export class $scale_centrifuge extends $.$scale_centrifuge {
    @$mol_mem
    client() {
      return new $scale_centrifuge_lib(
        "ws://192.168.88.67:8877/connection/websocket"
      );
    }

    @$mol_mem
    state(next?: any) {
      return next;
    }

    @$mol_action
    subscribe() {
      const weightChannel = this.client().newSubscription("channel");
      weightChannel.on("publication", (ctx) => {
        console.log("weight sub", ctx.data);
      });
      weightChannel.subscribe();
      const autoNumberChannel = this.client().newSubscription("autoNumber");
      autoNumberChannel.on("publication", (ctx) => {
        console.log("autoNumber sub", ctx.data);
      });
      autoNumberChannel.subscribe();
      this.client().connect();
    }

    auto() {
      this.client();
      //   this.state();
      this.subscribe();
      this.client().on("connected", (ctx) => {
        console.log("ccccc", ctx);
        this.state(JSON.stringify(ctx.data));
      });
    }
  }
}
