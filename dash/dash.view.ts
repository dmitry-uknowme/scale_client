namespace $.$$ {
  export class $scale_dash extends $.$scale_dash {
    @$mol_action
    open_enter_form() {
      $mol_state_arg.dict({ "": "dash", dash: "form_enter" });
    }

    @$mol_action
    open_exit_form(obj: $scale_modelAct) {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
      });
    }

    @$mol_action
    open_exit_form_current(obj: $scale_modelAct) {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
        form_data: JSON.stringify({ act_id: obj.publicId }),
      });
    }

    @$mol_mem
    act_list(reset?: "reset") {
      return this.api()
        .getActs({ status: $scale_modelActStatus.ON_TERRITORY })
        .map((obj) => this.Act_row(obj));
    }

    act_id(obj: $scale_modelAct) {
      return obj.publicId;
    }

    act_autoNumber(obj: $scale_modelAct) {
      return obj.auto.number;
    }

    act_transporter(obj: $scale_modelAct) {
      return obj.transporter.title;
    }

    act_weightGross(obj: $scale_modelAct) {
      return obj.weight.gross.toString();
    }

    act_cargoType(obj: $scale_modelAct) {
      return obj.cargoType.title;
    }

    act_cargoCategory(obj: $scale_modelAct) {
      return obj.wasteCategory.title;
    }

    act_enteredMoment(obj: $scale_modelAct) {
      return obj.entryDateTime;
    }

    count() {
      return this.act_list().length;
    }

    act_table_title() {
      return `На территории (${this.count()})`;
    }
  }
}
