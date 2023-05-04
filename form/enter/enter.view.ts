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
      console.log("numm", this.number());
      //   var formData = new FormData(this.dom_node());

      //   // iterate through entries...
      //   for (var pair of formData.entries()) {
      //     console.log(pair[0] + ": " + pair[1]);
      //   }
      //   //   console.log("ffff", this.dom_node());
    }
  }
}
