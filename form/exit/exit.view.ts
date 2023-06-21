namespace $.$$ {
  export class $scale_form_exit extends $.$scale_form_exit {
    @$mol_mem
    weight_formatted() {
      return `${this.weight() || 0} кг`;
    }

    @$mol_mem
    act_bid(next?: string): string {
      if (next !== undefined) return next;
      if (!this.act() || this.act() === this.default_values().act) {
        return "*";
      }
      return "";
    }

    @$mol_mem
    act(next?: string) {
      if (next === undefined) {
        if ($mol_state_arg.value("form_data")) {
          return;
        }
        if (
          this.detected_auto_stack_list()?.find(
            (auto) => auto.direction === "OUT"
          )?.number
        ) {
          const index = Object.values(this.acts_options()).indexOf(
            this.detected_auto_stack_list()?.find(
              (auto) => auto.direction === "OUT"
            )?.number
          );

          if (index > -1) {
            document
              .getElementById(
                `$scale_app.Root(0).Form_exit_body().Auto_number_field().Label()`
              )!
              ?.scrollIntoViewIfNeeded();
            return Object.keys(this.acts_options())[index] as string;
          }
        }

        if (!this.acts_exist()) {
          return "Нет авто на территории";
        } else {
          return this.default_values().act;
        }
      }
      return next;
    }

    @$mol_mem
    acts_options() {
      const data = this.api().getActs({
        status: $scale_modelActStatus.ON_TERRITORY,
      }).data;

      const result = data.reduce(
        (acc, curr) => ((acc[curr.publicId] = curr.auto.number), acc),
        {}
      );
      return result;
    }

    @$mol_mem
    acts_exist() {
      if (Object.keys(this.acts_options()).length === 0) return false;
      return true;
    }

    @$mol_action
    open_enter_form() {
      $mol_state_arg.dict({ "": "dash", dash: "form_enter" });
    }

    @$mol_action
    open_exit_form() {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
      });
    }

    exit_submit() {
      try {
        console.log("actt", this.act());
        this.api().closeAct({
          publicId: this.act()!,
          comment: "",
          weight: this.weight()!,
        });

        //   this.dash().act_list("reset");
        //   this.dash().render("reset");
        //   $mol_state_arg.dict({ "": "dash" });
        const autoStack = this.detected_auto_stack_list();
        const currentAutoNumber = this.acts_options()
          [this.act()].replaceAll("|", "")
          .trim();
        console.log("stack", autoStack, currentAutoNumber);
        if (
          autoStack.length &&
          autoStack[0].number === currentAutoNumber &&
          autoStack[0].direction === "OUT"
        ) {
          const prevStack = this.detected_auto_stack_list();

          this.detected_auto_stack_list(prevStack.slice(1, prevStack.length));
          const resultStack = this.detected_auto_stack_list();
          console.log("after", resultStack);
          this.detetcted_auto_stack_next();
        }
        $mol_state_arg.value("form_data", null);
        new $mol_after_timeout(200, () => window.location.reload());
      } catch (error) {
        if (error instanceof Promise) {
          throw error;
        }
        this.result(`Ошибка при закрытии акта. ${error}`);
      }
      //   new $mol_after_timeout(200, () => window.location.reload());
    }

    autoNumber_OUT(): string | null {
      return $mol_state_local.value("centrifuge_autoNumber_OUT_data");
    }

    @$mol_action
    detetcted_auto_stack_next() {
      const stack = this.detected_auto_stack_list();
      if (!stack.length) return;

      if (stack[0].direction === "IN") {
        this.open_enter_form();
      } else if (stack[0].direction === "OUT") {
        this.open_exit_form();
      }
    }

    @$mol_mem
    detected_auto_stack_list(next?: $scale_modelDetectedAuto[]) {
      return (
        ($mol_state_local.value(
          "centrifuge_autoNumber_stack",
          next
        ) as $scale_modelDetectedAuto[]) ?? []
      );
    }

    auto() {
      const initialFormData = JSON.parse(
        $mol_state_arg.value("form_data")!
      ) as {
        act_id: string;
      };
      if (initialFormData?.act_id) {
        this.act(initialFormData?.act_id);
      } else {
        // console.log("innn check", this.detected_auto_stack_list());
        // if (this.detected_auto_stack_list()[0].direction === "IN") {
        //   this.open_enter_form();
        // }
      }
    }
  }
}
