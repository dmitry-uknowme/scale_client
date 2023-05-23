namespace $.$$ {
  export interface $scale_settingsModel {}
  export class $scale_settings extends $.$scale_settings {
    @$mol_mem
    default_settings() {
      return {
        POLYGON_NAME: "ООО Спецэкотранс",
        API_URL: "http://192.168.88.67:888/api/v1",
        WEBSOCKET_URL: "ws://192.168.88.67:8877/connection/websocket",
      };
    }
    @$mol_mem
    settings(next?: any) {
      if (next !== undefined) {
        return $mol_state_local.value("settings", next);
      }
      if ($mol_state_local.value("settings")) {
        return $mol_state_local.value("settings");
      }
      return $mol_state_local.value("settings", this.default_settings());
    }

    @$mol_mem
    polygon_name(next?: string) {
      if (next === undefined) {
        return this.settings()?.POLYGON_NAME ?? "";
      }
      const prevSettings = $mol_state_local.value("settings");
      //   const prevSettings = $mol_mem_cached(() =>
      //     $mol_state_local.value("settings")
      //   );
      this.settings({ ...prevSettings, POLYGON_NAME: next });
      return next;
    }

    @$mol_mem
    api_url(next?: string) {
      if (next === undefined) {
        return this.settings()?.API_URL ?? "";
      }
      const prevSettings = $mol_state_local.value("settings");
      //   const prevSettings = $mol_mem_cached(() =>
      //     $mol_state_local.value("settings")
      //   );
      this.settings({ ...prevSettings, API_URL: next });
      return next;
    }

    @$mol_mem
    websocket_url(next?: string) {
      if (next === undefined) {
        return this.settings()?.WEBSOCKET_URL ?? "";
      }
      const prevSettings = $mol_state_local.value("settings");
      //   const prevSettings = $mol_mem_cached(() =>
      //     $mol_state_local.value("settings")
      //   );
      this.settings({ ...prevSettings, WEBSOCKET_URL: next });
      return next;
    }
  }
}
