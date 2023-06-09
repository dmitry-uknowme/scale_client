namespace $ {
  export interface $scale_modelAct {
    publicId: string;
    number: string;
    entryDateTime: string;
    checkOutDateTime: string;
    status: { value: $scale_modelActStatus; title: string };
    weight: { gross: number; container: number; net: number };
    auto: { number: string; publicId: string };
    transporter: { title: string; publicId: string };
    wasteCategory: { title: string; publicId: string };
    cargoType: { title: string; publicId: string };
    payer: { title: string; publicId: string };
  }

  export enum $scale_modelActStatus {
    ACTIVE = "STATUS_ACTIVE",
    ON_TERRITORY = "STATUS_ON_TERRITORY",
    COMPLETED = "STATUS_COMPLETED",
  }

  export interface $scale_modelActCreatePayload {
    payerPublicId: string;
    transporterPublicId: string;
    autoNumber: string;
    cargoTypePublicId: string;
    wasteCategoryPublicId: string;
    weight: number;
    comment: string;
  }

  export interface $scale_modelActClosePayload {
    publicId: string;
    weight: number;
    comment: string;
  }

  export interface $scale_modelOrganization {
    id: number;
    public_id: string;
    publicId: string;
    title: string;
    role: $scale_modelOrganizationRole;
    status: $scale_modelOrganizationStatus;
  }

  export enum $scale_modelOrganizationRole {
    TRANSPORTER = "ROLE_TRANSPORTER",
    PAYER = "ROLE_PAYER",
  }
  export enum $scale_modelOrganizationStatus {
    ACTIVE = "STATUS_ACTIVE",
  }

  export interface $scale_modelCargoType {
    publicId: string;
    title: string;
  }

  export interface $scale_modelCargoCategory extends $scale_modelCargoType {}

  export interface $scale_modelDetectedAuto {
    id?: string;
    stack_order?: number;
    number: string;
    direction: "IN" | "OUT";
    detected_date: string;
  }

  export interface $scale_modelSettings {
    POLYGON_NAME: string;
    API_URL: string;
    WEBSOCKET_URL: string;
    SECRET_KEY: string;
    CAMERA_STREAMS: { id: number; name: string }[];
    STACK_DETECT_TIMEOUT: number;
  }

  export interface $scale_modelLog {
    type: "INFO";
    date: string;
    message: string;
    auto_number?: string;
  }
}
