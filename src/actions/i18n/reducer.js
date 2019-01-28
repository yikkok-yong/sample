import { UPDATE_LANGUAGE } from "./actionTypes";
import { translate } from "../../i18n/translation";

const defaultState = {
  lang: "EN",
  t: translate("EN")
};

const i18nReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return {
        ...state,
        ...{
          lang: action.lang,
          t: translate(action.lang)
        }
      };
    default:
      return state;
  }
};

export default i18nReducer;
