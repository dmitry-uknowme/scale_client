namespace $.$$ {
  export interface $scale_settingsModel {}
  export class $scale_settings extends $.$scale_settings {
    @$mol_mem
    default_settings(): $scale_modelSettings {
      return {
        POLYGON_NAME: "ООО Тест",
        API_URL: "http://localhost:888/api/v1",
        WEBSOCKET_URL: "ws://localhost:8877/connection/websocket",
        SECRET_KEY: "c38f3b55-a207-47f5-8e87-9d6681f68613",
        CAMERA_STREAMS: [{ id: 1, name: "CAMERA_1" }],
      };
      //   return {
      //     POLYGON_NAME: "ООО Спецэкотранс",
      //     API_URL: "http://192.168.88.67:888/api/v1",
      //     WEBSOCKET_URL: "ws://192.168.88.67:8877/connection/websocket",
      //   };
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

    @$mol_mem
    secret_key(next?: string) {
      if (next === undefined) {
        return this.settings()?.SECRET_KEY ?? "";
      }
      const prevSettings = $mol_state_local.value(
        "settings"
      ) as $scale_modelSettings;

      this.settings({ ...prevSettings, SECRET_KEY: next });
      return next;
    }

    @$mol_mem
    cameras(next?: $scale_modelSettings["CAMERA_STREAMS"]) {
      if (next === undefined) {
        return this.settings()?.CAMERA_STREAMS ?? "";
      }
      const prevSettings = $mol_state_local.value(
        "settings"
      ) as $scale_modelSettings;

      this.settings({ ...prevSettings, CAMERA_STREAMS: next });
      return next;
    }

    @$mol_mem
    camera_list() {
      return this.cameras().map((camera: { id: number; number: string }) =>
        this.Camera_row(camera)
      );
    }

    @$mol_action
    camera_add() {
      const prevCameras = this.cameras();
      return this.cameras([
        ...prevCameras,
        { id: prevCameras.length + 1, name: "" },
      ]);
    }

    @$mol_action
    camera_remove(obj: { id: number; name: string }) {
      return this.cameras(
        this.cameras().filter((camera) => camera.id !== obj.id)
      );
    }

    @$mol_mem_key
    camera_name(obj: { id: number; name: string }, next?: string) {
      if (next === undefined) {
        return this.settings()?.CAMERA_STREAMS?.find(
          (camera) => camera.id === obj.id
        )?.name;
      }
      const prevSettings = $mol_state_local.value(
        "settings"
      ) as $scale_modelSettings;
      const prevCameras = prevSettings?.CAMERA_STREAMS ?? [];
      const index = obj.id - 1;
      this.settings({
        ...prevSettings,
        CAMERA_STREAMS: prevCameras.map((camera) =>
          camera.id === obj.id ? { ...camera, name: next } : camera
        ),
      });
      return next;
    }
  }
}
