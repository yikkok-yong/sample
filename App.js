/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Container, View } from "native-base";
import FilterableList from "./src/components/FilterableList/FilterableList";
import Clock from "./src/components/Clock/Clock";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <Clock />;
  }
}
