/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import Entry from "./src";
import { Provider } from "react-redux";
import { configureStore } from "./src/store";

const store = configureStore();

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Entry />
      </Provider>
    );
  }
}
