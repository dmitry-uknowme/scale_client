namespace $ {
  export interface $scale_apiResponse<TData> {
    status: "success" | "error";
    data: TData & $scale_apiResponsePagination;
    errorMessage?: string;
    errors?: string;
  }
  export interface $scale_apiResponsePagination {
    totalItemCount: number;
    currentPageNumber: number;
    limit: number;
  }

  export class $scale_api extends $mol_object {
    @$mol_mem
    base_url() {
      return ($mol_state_local.value("settings") as $scale_modelSettings)
        ?.API_URL!;
    }

    @$mol_mem
    secret_key() {
      return ($mol_state_local.value("settings") as $scale_modelSettings)
        ?.SECRET_KEY!;
    }

    getActs(
      filter: {
        status: $scale_modelActStatus | null;
        cargoType: $scale_modelCargoType | null;
        wasteCategory: $scale_modelCargoCategory | null;
        payerPublicId: string | null;
        transporterPublicId: string | null;
        autoNumber: string | null;
        page: number;
      } = {
        status: $scale_modelActStatus.ACTIVE,
        cargoType: null,
        wasteCategory: null,
        payerPublicId: null,
        transporterPublicId: null,
        autoNumber: null,
        page: 1,
      }
    ) {
      const response = $mol_fetch.json(
        `${this.base_url()}/getActs${
          Object.keys(filter).length
            ? `?${Object.keys(filter)
                //@ts-expect-error
                .filter((key) => filter[key] !== null)
                //@ts-expect-error
                .map((key) => `${key}=${filter[key]}`)
                .join("&")}`
            : ""
        }`,
        {
          method: "GET",
        }
      ) as $scale_apiResponse<$scale_modelAct[]>;

      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response;
    }

    getAutoRelations(number: string) {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/getAutoRelations`, {
        method: "POST",
        body: JSON.stringify({ number }),
      }) as $scale_apiResponse<{
        payers: $scale_modelOrganization[];
        transporters: $scale_modelOrganization[];
      }>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    createAct(payload: $scale_modelActCreatePayload) {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/createAct`, {
        method: "POST",
        body: JSON.stringify({
          ...payload,
          apiClientSecretKey: this.secret_key(),
        }),
      }) as $scale_apiResponse<{}>;

      if (response.status !== "success") {
        if (response?.errors) {
          throw new Error(
            typeof response.errors === "object"
              ? JSON.stringify(response.errors)
              : response.errors
          );
        }

        throw new Error(`Response failed with status ${response?.status}`);
      }
      return response;
    }

    closeAct(payload: $scale_modelActClosePayload) {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/closeAct`, {
        method: "POST",
        body: JSON.stringify({
          ...payload,
          apiClientSecretKey: this.secret_key(),
        }),
      }) as $scale_apiResponse<$scale_modelAct[]>;
      if (response.status !== "success") {
        if (response?.errors) {
          throw new Error(
            typeof response.errors === "object"
              ? JSON.stringify(response.errors)
              : response.errors
          );
        }

        throw new Error(`Response failed with status ${response?.status}`);
      }
      return response;
    }

    gateOpenEntry() {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/openEntryGate`, {
        method: "GET",
      }) as $scale_apiResponse<any>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateCloseEntry() {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/closeEntryGate`, {
        method: "GET",
      }) as $scale_apiResponse<any>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateOpenExit() {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/openExitGate`, {
        method: "GET",
      }) as $scale_apiResponse<any>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    gateCloseExit() {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/closeExitGate`, {
        method: "GET",
      }) as $scale_apiResponse<any>;
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
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(
        `${this.base_url()}/getUsers?status=${filter.status}${
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
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(`${this.base_url()}/getCargoTypes`, {
        method: "GET",
      }) as $scale_apiResponse<$scale_modelCargoType[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }

    getCargoCategories() {
      const BASE_URL = this.base_url();
      const response = $mol_fetch.json(
        `${this.base_url()}/getWasteCategories`,
        {
          method: "GET",
        }
      ) as $scale_apiResponse<$scale_modelCargoCategory[]>;
      if (response.status !== "success") {
        throw new Error(`Response failed with status ${response.status}`);
      }
      return response.data;
    }
  }
}
