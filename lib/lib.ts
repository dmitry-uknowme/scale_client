namespace $ {
  require("centrifuge/dist/centrifuge.js") as typeof import("centrifuge").Centrifuge;
  export let $scale_lib_centrifuge =
    //@ts-expect-error
    window.Centrifuge as typeof import("centrifuge").Centrifuge;

  //   export let $scale_lib_fuzzball =
  //     require("fuzzball") as typeof import("fuzzball");
}
