// namespace $ {
//   export class $scale_centrifuge_lib extends $mol_object2 {
//     @$mol_mem
//     static pkg() {
//       return $mol_import.script(
//         "https://unpkg.com/centrifuge@3.1.0/dist/centrifuge.js"
//       ).Centrifuge as typeof import("centrifuge").Centrifuge;
//     }
//   }
//   //   const centrifuge = require("centrifuge") as typeof import("centrifuge");
//   //   export const $scale_centrifuge_lib = centrifuge;
//   //   console.log("cccc", centrifuge);
//   //   export const $scale_centrifuge_lib_Client = centrifuge.Centrifuge;
// }

namespace $ {
  require("centrifuge/dist/centrifuge.js") as typeof import("centrifuge").Centrifuge;
  export let $scale_centrifuge_lib =
    //@ts-expect-error
    window.Centrifuge as typeof import("centrifuge").Centrifuge;
}
