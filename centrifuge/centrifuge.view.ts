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

    @$mol_mem
    weight_channel(next?: number) {
      return next;
    }

    @$mol_mem
    autoNumber_channel(
      next: { IN: string | null; OUT: string | null } = { IN: null, OUT: null }
    ) {
      return next;
    }

    @$mol_mem
    autoNumber_channelIN(
      next: { IN: string | null; OUT: string | null } = { IN: null, OUT: null }
    ) {
      return next;
    }

    @$mol_mem
    autoNumber_channelOUT(
      next: { IN: string | null; OUT: string | null } = { IN: null, OUT: null }
    ) {
      return next;
    }

    @$mol_action
    subscribe() {
      const weightChannel = this.client().newSubscription("channel");
      weightChannel.on("publication", (ctx) => {
        this.weight_channel(ctx.data.value.toString() as string);
      });
      weightChannel.subscribe();
      const autoNumberChannel = this.client().newSubscription("autoNumber");
      autoNumberChannel.on("publication", (ctx) => {
        if (ctx.data.direction === "IN") {
          this.autoNumber_channelIN(ctx.data.value);
        } else if (ctx.data.direction === "OUT") {
          this.autoNumber_channelOUT(ctx.data.value);
        }
      });
      autoNumberChannel.subscribe();
      this.client().connect();
    }

    auto() {
      this.client();
      //   this.state();
      this.subscribe();
      this.client().on("connected", (ctx) => {
        this.state(JSON.stringify(ctx.data));
      });
    }
  }
}
