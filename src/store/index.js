import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../actions";

const reducer = combineReducers(reducers);

export const configureStore = () => {
  const store = createStore(reducer, applyMiddleware(thunk));

  return store;
};
