namespace $.$$ {
  export class $scale_dash extends $.$scale_dash {
    @$mol_action
    expand_controls() {
      this.Top_row_body().dom_node().classList.toggle("_row_expanded");
    }

    @$mol_mem
    expanded_controls(next?: boolean) {
      return next;
    }

    @$mol_action
    pin_controls() {
      this.Top_row().dom_node().classList.toggle("_pinned");
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

    @$mol_action
    open_exit_form_current(obj: $scale_modelAct) {
      $mol_state_arg.dict({
        "": "dash",
        dash: "form_exit",
        form_data: JSON.stringify({ act_id: obj.publicId }),
      });
      document
        .getElementById(
          `$scale_app.Root(0).Form_exit_body().Auto_number_field().Label()`
        )!
        ?.scrollIntoViewIfNeeded();
    }

    @$mol_mem
    act_list(reset?: "reset") {
      return this.api()
        .getActs({
          status: $scale_modelActStatus.ON_TERRITORY,
          cargoType: null,
          wasteCategory: null,
          autoNumber: null,
          payerPublicId: null,
          transporterPublicId: null,
          page: 1,
        })
        .data.map((obj) => this.Act_row(obj));
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

    act_payer(obj: $scale_modelAct) {
      return obj.payer.title;
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
      return new $mol_time_moment(obj.entryDateTime).toString(
        "DD.MM.YYYY hh:mm:ss"
      );
    }

    count() {
      return this.act_list().length;
    }

    @$mol_mem
    act_table_title() {
      return this.count() === 0
        ? "Нет авто на территории"
        : `Авто на территории (${this.count()})`;
    }

    @$mol_mem_key
    act_exit_text(obj: $scale_modelAct) {
      return `Создать запись на выезд для ${obj.auto.number}`;
    }

    @$mol_mem
    cameras() {
      return this.settings().cameras();
    }

    @$mol_mem
    camera_list() {
      return this.cameras().map((camera: { id: number; name: string }) =>
        this.Camera_row(camera)
      );
    }

    @$mol_mem_key
    camera_id(obj: { id: number; name: string }) {
      return this.cameras().find(
        (camera: { id: number; name: string }) => camera.id === obj.id
      )?.name;
    }
  }
}
