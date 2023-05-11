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
          apiClientSecretKey: "123456",
        });
        this.dash().act_list("reset");
        $mol_state_arg.dict({ "": "dash" });
        new $mol_after_timeout(200, () => window.location.reload());
      } catch (err) {
        this.result(`Ошибка при отправке акта. ${err}`);
      }
    }

    count() {
      return this.dash().act_list().length;
    }

    @$mol_mem
    auto_number(next?: string): string {
      console.log("aaaa", next);
      return next?.toUpperCase() ?? this.autoNumber_IN() ?? "";
    }

    auto() {
      this.auto_number(this.autoNumber_IN());
    }
  }
}
