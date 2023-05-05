namespace $.$$ {
  export class $scale_store extends $.$scale_store {
    @$mol_mem
    act_list_all() {
      return this.api().getActs({
        status: $scale_modelActStatus.ON_TERRITORY,
      });
    }

    @$mol_mem
    act_list_onTerritory(reset?: "reset") {
      return this.api().getActs({
        status: $scale_modelActStatus.ON_TERRITORY,
      });
    }

    @$mol_action
    act_list_onTerritory_update() {
      this.act_list_onTerritory("reset");
    }

    @$mol_mem
    act_list_completed() {
      return this.api().getActs({ status: $scale_modelActStatus.COMPLETED });
    }
  }
}
