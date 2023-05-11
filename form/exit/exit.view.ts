namespace $.$$ {
  export class $scale_form_exit extends $.$scale_form_exit {
    @$mol_mem
    weight_formatted() {
      return `${this.weight() || 0} кг`;
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
