namespace $.$$ {
  export class $scale_form_enter extends $.$scale_form_enter {
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

    weight_formatted() {
      return `${this.weight() || 0} кг`;
    }

    enter_submit() {
      this.api().createAct({
        autoNumber: this.auto_number(),
        payerPublicId: this.payer(),
        transporterPublicId: this.transporter(),
        cargoTypePublicId: this.cargo_type(),
        wasteCategoryPublicId: this.cargo_category(),
        comment: "",
        weight: parseFloat(this.weight()),
        apiClientSecretKey: "123456",
      });

      this.dash().act_list("reset");
      //   this.dash().render()

      //   new $mol_after_timeout(1500, () => this.dash().act_list("reset"));
    }

    count() {
      return this.dash().act_list().length;
    }
  }
}
