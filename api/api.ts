namespace $ {
  export interface $scale_apiResponse<TData> {
    status: "success" | "error";
    data: TData & $scale_apiResponsePagination;
    errorMessage?: string;
  }
  export interface $scale_apiResponsePagination {
    totalItemCount: number;
    currentPageNumber: number;
    limit: number;
  }

  export class $scale_api extends $mol_object2 {
    getActs(
      filter: { status: $scale_modelActStatus } = {
        status: $scale_modelActStatus.ACTIVE,
      }
    ) {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(
        `${BASE_URL}/getActs?status=${filter.status}`,
        {
          method: "GET",
        }
      ) as $scale_apiResponse<$scale_modelAct[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    createAct(payload: $scale_modelActCreatePayload) {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/createAct`, {
        method: "POST",
        body: JSON.stringify(payload),
      }) as $scale_apiResponse<$scale_modelAct[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    closeAct(payload: $scale_modelActClosePayload) {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/closeAct`, {
        method: "POST",
        body: JSON.stringify(payload),
      }) as $scale_apiResponse<$scale_modelAct[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateOpenEntry() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/openEntryGate`, {
        method: "GET",
      }) as $scale_apiResponse;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateCloseEntry() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/closeEntryGate`, {
        method: "GET",
      }) as $scale_apiResponse;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateOpenExit() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/openExitGate`, {
        method: "GET",
      }) as $scale_apiResponse;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateCloseExit() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/closeExitGate`, {
        method: "GET",
      }) as $scale_apiResponse;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    getOrganizations(
      filter: {
        status?: $scale_modelOrganizationStatus;
        role?: $scale_modelOrganizationRole;
      } = {
        status: $scale_modelOrganizationStatus.ACTIVE,
      }
    ) {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(
        `${BASE_URL}/getUsers?status=${filter.status}${
          filter.role ? `&role=${filter.role}` : ""
        }`,
        {
          method: "GET",
        }
      ) as $scale_apiResponse<$scale_modelOrganization[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    getCargoTypes() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/getCargoTypes`, {
        method: "GET",
      }) as $scale_apiResponse<$scale_modelCargoType[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    getCargoCategories() {
      const BASE_URL = $scale_env_BASE_URL;
      const response = $mol_fetch.json(`${BASE_URL}/getWasteCategories`, {
        method: "GET",
      }) as $scale_apiResponse<$scale_modelCargoCategory[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }
  }
}
