// import cn from "./cn";
// import en from "./en";

// console.log("en", en);
// console.log("cn", cn);

import { UPDATE_LANGUAGE } from "../actions/i18n/actionTypes";

let en = null;
let cn = null;
export const translate = (translateTo: string = "EN") => (words: string) => {
  switch (translateTo) {
    case "EN":
      if (en === null) {
        en = require("./en").default;
      }

      return en[words];
    case "CN":
      if (cn === null) {
        cn = require("./cn").default;
      }

      return cn[words];
    default:
      break;
  }
};
