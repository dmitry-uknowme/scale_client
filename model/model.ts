namespace $ {
  export interface $scale_modelAct {
    publicId: string;
    number: string;
    entryDateTime: string;
    checkOutDateTime?: string;
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

  export interface $scale_modelOrganization {
    id: number;
    public_id: string;
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
}
