namespace $.$$ {
  export class $scale_form_enter extends $.$scale_form_enter {
    @$mol_mem
    payers_options() {
      if (this.auto_related() === true && this.auto_relations()?.payers) {
        return this.auto_relations()?.payers as {};
      } else if (this.auto_related() === false) {
        const data = this.api().getOrganizations({
          status: $scale_modelOrganizationStatus.ACTIVE,
          role: $scale_modelOrganizationRole.PAYER,
        });
        const result = data.reduce(
          (acc, curr) => ((acc[curr.public_id] = curr.title), acc),
          {}
        );
        return result;
      }
      return {};
    }

    @$mol_mem
    payer(next?: any): string {
      if (next) return next;
      if (
        this.auto_related() &&
        this.auto_relations() &&
        Object.keys(this.auto_relations()?.payers!).length
      ) {
        return Object.keys(this.auto_relations()?.payers!)[0];
      }
      return "Выберите оператора";
    }

    @$mol_mem
    transporter(next?: any): string {
      if (next) return next;
      if (
        this.auto_related() &&
        this.auto_relations() &&
        Object.keys(this.auto_relations()?.transporters!).length
      ) {
        return Object.keys(this.auto_relations()?.transporters!)[0];
      }
      return "Выберите перевозчика";
    }

    @$mol_mem
    transporters_options() {
      if (this.auto_related() === true && this.auto_relations()?.transporters) {
        return this.auto_relations()?.transporters as {};
      } else if (this.auto_related() === false) {
        const data = this.api().getOrganizations({
          status: $scale_modelOrganizationStatus.ACTIVE,
          role: $scale_modelOrganizationRole.TRANSPORTER,
        });
        const result = data.reduce(
          (acc, curr) => ((acc[curr.public_id] = curr.title), acc),
          {}
        );
        return result;
      }
      return {};
    }

    @$mol_mem
    cargoTypes_options() {
      const data = this.api().getCargoTypes();
      const result = data.reduce(
        (acc, curr) => ((acc[curr.publicId] = curr.title), acc),
        {}
      );
      return result;
    }

    @$mol_mem
    cargoCategories_options() {
      const data = this.api().getCargoCategories();
      const result = data.reduce(
        (acc, curr) => ((acc[curr.publicId] = curr.title), acc),
        {}
      );
      return result;
    }

    @$mol_mem
    auto_relations() {
      const number = this.auto_number();
      //   const number = $mol_mem_cached(() => this.autoNumber_IN());
      if (number && this.auto_number_bid() === "") {
        try {
          const relations = this.api().getAutoRelations(
            number.replaceAll("|", "")
          );
          this.auto_related(true);
          const data = {
            payers: relations.payers.map((p) => ({
              ...p,
              //   public_id: p.publicId as string,
              //   publicId: p.public_id as string,
            })) as $scale_modelOrganization[],
            transporters: relations.transporters.map((t) => ({
              ...t,
              public_id: t.publicId as string,
              //   publicId: t.public_id as string,
            })) as $scale_modelOrganization[],
          };
          const result = {
            payers: data.payers.reduce(
              (acc, curr) => ((acc[curr.public_id] = curr.title), acc),
              {}
            ),
            transporters: data.transporters.reduce(
              (acc, curr) => ((acc[curr.public_id] = curr.title), acc),
              {}
            ),
          };
          return result;
        } catch (err) {
          this.auto_related(false);
        }
      }
    }

    @$mol_mem
    auto_related(next?: boolean) {
      return next ?? false;
    }

    @$mol_mem
    weight_formatted() {
      return `${this.weight() || 0} кг`;
    }

    @$mol_mem
    auto_number_bid(next?: string): string {
      if (next !== undefined) return next;
      if (!this.auto_number() || !this.auto_number().trim().length) {
        return "*";
      } else if (
        !/^[А-Я]{1}[0-9]{3}[А-Я]{2}[0-9]{2,3}$/.test(
          this.auto_number().trim().replaceAll("|", "")
        )
      ) {
        return "Неверный формат номера";
      }
      return "";
    }

    @$mol_mem
    payer_bid(next?: string): string {
      if (next !== undefined) return next;
      if (!this.payer() || this.payer() === this.default_values().payer) {
        return "*";
      }
      return "";
    }

    @$mol_mem
    transporter_bid(next?: string): string {
      if (next !== undefined) return next;
      if (
        !this.transporter() ||
        this.transporter() === this.default_values().transporter
      ) {
        return "*";
      }
      return "";
    }

    @$mol_mem
    cargo_type_bid(next?: string): string {
      if (next !== undefined) return next;
      if (
        !this.cargo_type() ||
        this.cargo_type() === this.default_values().cargo_type
      ) {
        return "*";
      }
      return "";
    }

    @$mol_mem
    cargo_category_bid(next?: string): string {
      if (next !== undefined) return next;
      if (
        !this.cargo_category() ||
        this.cargo_category() === this.default_values().cargo_category
      ) {
        return "*";
      }
      return "";
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

    @$mol_action
    enter_submit() {
      try {
        const response = this.api().createAct({
          autoNumber: this.auto_number().trim().replaceAll("|", ""),
          payerPublicId: this.payer(),
          transporterPublicId: this.transporter(),
          cargoTypePublicId: this.cargo_type(),
          wasteCategoryPublicId: this.cargo_category(),
          comment: "",
          weight: this.weight()!,
          apiClientSecretKey: "234150c8-925b-4c8e-bf66-ded87d8f6aae",
        });
        // this.dash().act_list("reset");
        console.log("resss", response);
        // $mol_state_arg.dict({ "": "dash" });
        const autoStack = this.detected_auto_stack_list();
        const currentAutoNumber = this.auto_number().replaceAll("|", "").trim();
        console.log("stack", autoStack, currentAutoNumber);
        // const findAuto = autoStack.find()
        // const index = autoStack.indexOf(autoStack.find(auto=>auto.number === currentAutoNumber && auto.direction ==='IN')||null);
        if (
          autoStack.length &&
          autoStack[0].number === currentAutoNumber &&
          autoStack[0].direction === "IN"
        ) {
          const prev = this.detected_auto_stack_list();

          this.detected_auto_stack_list(prev.slice(1, prev.length));

          console.log("after", this.detected_auto_stack_list());
          this.detetcted_auto_stack_next();
        }
        new $mol_after_timeout(200, () => window.location.reload());
      } catch (error) {
        if (error instanceof Promise) {
          throw error;
        }
        console.log("eer", error);
        this.result(`Ошибка при отправке акта. ${error}`);
      }
    }

    count() {
      return this.dash().act_list().length;
    }

    @$mol_mem
    auto_number(next?: string): string {
      return (
        next?.toUpperCase() ??
        this.detected_auto_stack_list()?.find((auto) => auto.direction === "IN")
          ?.number ??
        this.autoNumber_IN() ??
        ""
      );
    }

    weight(): number | null {
      return $mol_state_local.value("centrifuge_weight_data");
    }

    autoNumber_IN(): string | null {
      return $mol_state_local.value("centrifuge_autoNumber_IN_data");
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
      return (
        ($mol_state_local.value(
          "centrifuge_autoNumber_stack",
          next
        ) as $scale_modelDetectedAuto[]) ?? []
      );
    }

    // auto() {
    //   console.log(
    //     "this.detected_auto_stack_list()[0].direction",
    //     this.detected_auto_stack_list()[0].direction
    //   );
    //   if (this.detected_auto_stack_list()[0].direction === "OUT") {
    //     this.open_exit_form();
    //   }
    // }
  }
}
