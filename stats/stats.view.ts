namespace $.$$ {
  export class $scale_stats extends $.$scale_stats {
    @$mol_mem
    act_list(reset?: "reset") {
      return this.api()
        .getActs({
          status: $scale_modelActStatus.COMPLETED,
          cargoType:
            this.cargo_type() === this.default_values().cargo_type
              ? null
              : this.cargo_type(),
          wasteCategory:
            this.cargo_category() === this.default_values().cargo_category
              ? null
              : this.cargo_category(),
          autoNumber: this.auto_number().trim().length
            ? this.auto_number()
            : null,
          payerPublicId:
            this.payer() === this.default_values().payer ? null : this.payer(),
          transporterPublicId:
            this.transporter() === this.default_values().transporter
              ? null
              : this.transporter(),
        })
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

    act_exitedMoment(obj: $scale_modelAct) {
      return obj.checkOutDateTime;
    }

    count() {
      return this.act_list().length;
    }

    act_table_title() {
      return `Список актов (${this.count()})`;
    }

    @$mol_mem
    payers_options() {
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

    @$mol_mem
    transporters_options() {
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
  }
}
