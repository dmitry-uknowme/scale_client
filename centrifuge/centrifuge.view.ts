namespace $.$$ {
  export class $scale_centrifuge extends $.$scale_centrifuge {
    @$mol_mem
    websocket_url() {
      return $mol_state_local.value("settings")?.WEBSOCKET_URL;
    }

    @$mol_mem
    client() {
      if (this.websocket_url()) {
        return new $scale_centrifuge_lib(
          this.websocket_url()
          // "ws://192.168.88.67:8877/connection/websocket"
        );
      }
    }

    @$mol_mem
    state(next?: any) {
      return next;
    }

    @$mol_mem
    weight_channel(next?: number) {
      return $mol_state_local.value("centrifuge_weight_data", next);
    }

    @$mol_mem
    autoNumber_channel_IN(next?: string) {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_enter",
      });
      return $mol_state_local.value("centrifuge_autoNumber_IN_data", next);
    }

    @$mol_mem
    autoNumber_channel_OUT(next?: string) {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
      });
      return $mol_state_local.value("centrifuge_autoNumber_OUT_data", next);
    }

    @$mol_action
    subscribe() {
      const weightChannel = this.client().newSubscription("channel");
      weightChannel.on("publication", (ctx) => {
        this.weight_channel(ctx.data.value as number);
      });
      weightChannel.subscribe();
      const autoNumberChannel = this.client().newSubscription("autoNumber");
      autoNumberChannel.on("publication", (ctx) => {
        console.log("autoNumber sub", ctx.data);
        if (ctx.data.direction === "IN") {
          this.autoNumber_channel_IN(ctx.data.value);
        } else if (ctx.data.direction === "OUT") {
          this.autoNumber_channel_OUT(ctx.data.value);
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
