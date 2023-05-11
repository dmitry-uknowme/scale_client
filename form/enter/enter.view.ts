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
      const number = this.autoNumber_IN();
      //   const number = $mol_mem_cached(() => this.autoNumber_IN());
      console.log("nnn", number);
      if (number) {
        try {
          const relations = this.api().getAutoRelations(number);
          this.auto_related(true);
          const data = {
            payers: relations.payers.map((p) => ({
              ...p,
              public_id: p.publicId,
            })) as $scale_modelOrganization[],
            transporters: relations.transporters.map((t) => ({
              ...t,
              public_id: t.publicId as string,
            })) as $scale_modelOrganization[],
          };
          const result = {
            payers: data.payers.reduce(
              (acc, curr) => ((acc[curr.publicId] = curr.title), acc),
              {}
            ),
            transporters: data.transporters.reduce(
              (acc, curr) => ((acc[curr.publicId] = curr.title), acc),
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

    enter_submit() {
      this.api().createAct({
        autoNumber: this.auto_number(),
        payerPublicId: this.payer(),
        transporterPublicId: this.transporter(),
        cargoTypePublicId: this.cargo_type(),
        wasteCategoryPublicId: this.cargo_category(),
        comment: "",
        weight: this.weight()!,
        apiClientSecretKey: "123456",
      });
      this.dash().act_list("reset");
      //   this.dash().render("reset");
      $mol_state_arg.dict({ "": "dash" });
      new $mol_after_timeout(200, () => window.location.reload());
    }

    count() {
      return this.dash().act_list().length;
    }

    @$mol_mem
    auto_number(next?: any): string {
      return next || this.autoNumber_IN();
    }

    auto() {
      this.auto_number(this.autoNumber_IN());
    }
  }
}
