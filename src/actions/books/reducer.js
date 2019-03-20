/* @flow */
import { UPDATE_BOOKLIST } from "./actions";

const defaultState = {
  booklist: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_BOOKLIST:
      return { ...state, booklist: action.booklist };
    default:
      return state;
  }
};
