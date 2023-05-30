namespace $.$$ {
  export class $scale_form_detected_stack extends $.$scale_form_detected_stack {
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

    @$mol_action
    detetcted_auto_stack_next() {
      const stack = this.detected_auto_stack_list();
      if (stack[0].direction === "IN") {
        this.open_enter_form();
      } else if (stack[0].direction === "OUT") {
        this.open_exit_form();
      }
    }

    @$mol_mem
    detected_auto_stack_list(next?: $scale_modelDetectedAuto[]) {
      if (next !== undefined) {
        if (next[0]?.direction === "OUT") {
          this.open_exit_form();
        }
        if (next[0]?.direction === "IN") {
          this.open_enter_form();
        }
      }
      return (
        ($mol_state_local.value(
          "centrifuge_autoNumber_stack",
          next
        ) as $scale_modelDetectedAuto[]) ?? []
      );
    }

    @$mol_mem
    detected_auto_stack(next?: $scale_modelDetectedAuto[]) {
      const list = this.detected_auto_stack_list();
      return list.map((item) => this.Detected_auto_stack_row(item));
    }

    @$mol_mem_key
    detected_auto_order(obj: $scale_modelDetectedAuto) {
      return obj?.stack_order || "";
    }

    @$mol_mem_key
    detected_auto_uri(obj: $scale_modelDetectedAuto) {
      return this.$.$mol_state_arg.make_link({
        ...this.$.$mol_state_arg.dict(),
        auto: obj?.stack_order!,
      });
    }

    @$mol_mem_key
    detected_auto_number(obj: $scale_modelDetectedAuto) {
      return obj.number;
    }

    @$mol_mem_key
    detected_auto_direction(obj: $scale_modelDetectedAuto) {
      return obj.direction;
    }

    detected_auto_direction_pretty(obj: $scale_modelDetectedAuto) {
      return obj.direction === "IN"
        ? "=>"
        : obj.direction === "OUT"
        ? "<="
        : "";
    }

    transfer_adopt(transfer: DataTransfer) {
      const uri = transfer.getData("text/uri-list");
      console.log("url", uri);
      if (!uri) return;

      return this.detected_auto_stack_list().find(
        (task) => this.detected_auto_uri(task) === uri
      );
    }

    receive(task: $scale_modelDetectedAuto) {
      const tasks = this.detected_auto_stack_list().filter((p) => p !== task);
      tasks.push(task);

      this.detected_auto_stack_list(tasks);
    }

    receive_before(
      anchor: $scale_modelDetectedAuto,
      task: $scale_modelDetectedAuto
    ) {
      if (anchor === task) return;

      const tasks = this.detected_auto_stack_list().filter((p) => p !== task);

      const index = tasks.indexOf(anchor);
      tasks.splice(index, 0, task);

      this.detected_auto_stack_list(tasks);
    }

    receive_trash(task: $scale_modelDetectedAuto) {
      this.detected_auto_stack_list(
        this.detected_auto_stack_list().filter((p) => p !== task)
      );
    }

    @$mol_action
    stack_on_click(event: MouseEvent) {
      console.log("clickkk", event.target);
      event.preventDefault();
      const target = event.target as HTMLDivElement;
      const autoNumber = target.getAttribute("number")!;
      const autoDirection = target.getAttribute("direction")! as "IN" | "OUT";

      const stack = this.detected_auto_stack_list().filter(
        (auto) => auto !== { number: autoNumber, direction: autoDirection }
      );
      stack.splice(0, 0, { number: autoNumber, direction: autoDirection });
      this.detected_auto_stack_list(stack);
    }
  }
}
