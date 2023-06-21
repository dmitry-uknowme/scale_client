namespace $.$$ {
  export class $scale_centrifuge extends $.$scale_centrifuge {
    @$mol_mem
    websocket_url() {
      return $mol_state_local.value("settings")?.WEBSOCKET_URL;
    }

    @$mol_mem
    client() {
      if (this.websocket_url()) {
        return new $scale_lib_centrifuge(this.websocket_url());
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
    autoNumber_stack(next?: $scale_modelDetectedAuto[]) {
      return $mol_state_local.value("centrifuge_autoNumber_stack", next);
    }

    @$mol_action
    autoNumber_stack_add(data: $scale_modelDetectedAuto) {
      //   const prev = $mol_state_local.value("centrifuge_autoNumber_stack") ?? [];
      const prev =
        this.autoNumber_stack()?.filter(
          (auto) =>
            !(auto.number === data.number && auto.direction === data.direction)
        ) ?? [];
      //   const prev = $mol_mem_cached(() => this.autoNumber_stack()) ?? [];
      console.log("prevvv", prev);
      const prevAutoDetect = this.autoNumber_stack()?.find(
        (auto) => auto.number === data.number
      );

      const stackDetectTimeout =
        $mol_state_local.value("settings")?.STACK_DETECT_TIMEOUT;
      this.logs_add(
        `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] Обнаружено авто на ${
          data.direction === "IN"
            ? "въезд"
            : data.direction === "OUT"
            ? "выезд"
            : ""
        } с гос.номером ${data.number}.\t`
      );
      if (prevAutoDetect) {
        if (stackDetectTimeout) {
          const prevAutoDetectDate = new Date(prevAutoDetect.detected_date);
          const now = new Date();
          this.logs_add(
            `Разница с последним детектом номера на ${
              prevAutoDetect.direction === "IN"
                ? "въезд"
                : prevAutoDetect.direction === "OUT"
                ? "выезд"
                : ""
            }: ${((now - prevAutoDetectDate) / 1000).toFixed(2)} сек.\t`
          );
          if ((now - prevAutoDetectDate) / 1000 / 60 >= stackDetectTimeout) {
            this.logs_add("Добавляем в очередь");
            console.log(
              "add detect",
              data,
              (now - prevAutoDetectDate) / 1000 / 60
            );

            this.autoNumber_stack([
              {
                ...data,
                stack_order: prev.length + 1,
                detected_date: new Date().toUTCString(),
              },
              //   ...prev,
            ]);
          } else {
            this.logs_add("Пропускаем очередь");
            console.log(
              "skip detect",
              data,
              (now - prevAutoDetectDate) / 1000 / 60
            );
          }
        }
      } else {
        this.logs_add(`Последний детект не найден. Добавляем в очередь`);
        console.log("add detect", data);
        this.autoNumber_stack([
          {
            ...data,
            stack_order: prev.length + 1,
            detected_date: new Date().toUTCString(),
          },
          //   ...prev,
        ]);
        const firstAuto = this.autoNumber_stack()?.length
          ? this.autoNumber_stack()![0]
          : null;

        if (firstAuto?.direction === "IN") {
          this.open_enter_form();
        } else if (firstAuto?.direction === "OUT") {
          this.open_exit_form();
        }
      }
      this.logs_add("\n");
    }

    @$mol_mem
    autoNumber_channel_IN(next?: string) {
      if (next !== undefined) {
        if (
          $mol_state_arg.value("dash") !== "form_enter" &&
          $mol_state_arg.value("dash") !== "form_exit"
        ) {
          $mol_state_arg.dict({
            "": "dash",
            dash: "form_enter",
          });
        }

        this.autoNumber_stack_add({ direction: "IN", number: next });
      }
      return $mol_state_local.value("centrifuge_autoNumber_IN_data", next);
    }

    @$mol_mem
    autoNumber_channel_OUT(next?: string) {
      if (next !== undefined) {
        if (
          $mol_state_arg.value("dash") !== "form_enter" &&
          $mol_state_arg.value("dash") !== "form_exit"
        ) {
          $mol_state_arg.dict({
            "": "dash",
            dash: "form_exit",
          });
        }

        this.autoNumber_stack_add({ direction: "OUT", number: next });
      }
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

    @$mol_action
    open_enter_form() {
      $mol_state_arg.dict({ "": "dash", dash: "form_enter" });
      document
        .getElementById(
          `$scale_app.Root(0).Form_enter_body().Auto_number_field().Label()`
        )!
        ?.scrollIntoViewIfNeeded();
    }

    @$mol_action
    open_exit_form() {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
      });
      document
        .getElementById(
          `$scale_app.Root(0).Form_exit_body().Auto_number_field().Label()`
        )!
        ?.scrollIntoViewIfNeeded();
    }

    @$mol_mem
    logs(next?: string) {
      return $mol_state_local.value("logs", next);
    }

    @$mol_action
    logs_add(text: string) {
      const prev = this.logs();
      //   return $mol_state_local.value("logs", prev + text);
      return this.logs(prev + text);
    }
  }
}
