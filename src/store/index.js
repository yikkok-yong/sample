import { createStore, combineReducers } from "redux";

import reducers from "../actions";

const reducer = combineReducers(reducers);

export const configureStore = () => {
  const store = createStore(reducer);

  return store;
};
