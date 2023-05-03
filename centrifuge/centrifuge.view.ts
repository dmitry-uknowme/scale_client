namespace $.$$ {
  export class $scale_centrifuge extends $.$scale_centrifuge {
    @$mol_mem
    client() {
      return new $scale_centrifuge_lib(
        "ws://192.168.88.67:8877/connection/websocket"
      );
    }

    @$mol_mem
    state() {
      //   console.log("sttt", this.client().state);
      return this.client().state;
    }

    auto() {
      this.client();
      this.state();
    }
  }
  //   const centrifuge = require("centrifuge") as typeof import("centrifuge");
  //   //   export const $scale_centrifuge = centrifuge;
  //   export const $scale_centrifuge_Client = centrifuge.Centrifuge;
  //   //   export class $scale_centrifuge extends $.$scale_centrifuge {}
  //   //   import("centrifuge").then((centrifuge) => {
  //   //     console.log("client", centrifuge);
  //   //   });
  //   //   export class $scale_centrifuge extends $mol_object2 {
  //   //     constructor() {
  //   //       super();
  //   //       import("centrifuge").then((centrifuge) => {
  //   //         console.log("client", centrifuge);
  //   //         // this.client(centrifuge.Centrifuge);
  //   //       });
  //   //     }
  //   //     client(next?: any) {
  //   //       return next;
  //   //     }
  //   //   }
}
