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
      if (next) return next?.toUpperCase();

      if (this.autoNumber_OUT()) {
        const index = Object.values(this.acts_options()).indexOf(
          this.autoNumber_OUT()
        );
        if (index) {
          return Object.values(this.acts_options())[index] as string;
        }
      }

      return "";
    }

    acts_options() {
      const data = this.api().getActs({
        status: $scale_modelActStatus.ON_TERRITORY,
      });
      const result = data.reduce(
        (acc, curr) => ((acc[curr.publicId] = curr.auto.number), acc),
        {}
      );
      return result;
    }

    exit_submit() {
      this.api().closeAct({
        publicId: this.act(),
        comment: "",
        weight: this.weight()!,
        apiClientSecretKey: "123456",
      });

      //   this.dash().act_list("reset");
      //   this.dash().render("reset");
      $mol_state_arg.dict({ "": "dash" });
      new $mol_after_timeout(200, () => window.location.reload());
    }

    autoNumber_OUT(): string | null {
      return $mol_state_local.value("centrifuge_autoNumber_OUT_data");
    }

    auto() {
      const initialFormData = JSON.parse(
        $mol_state_arg.value("form_data")!
      ) as {
        act_id: string;
      };
      if (initialFormData?.act_id) {
        this.act(initialFormData?.act_id);
      }
    }
  }
}
