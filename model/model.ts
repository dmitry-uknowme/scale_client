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
}
