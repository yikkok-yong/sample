/**
 * @file RecommendBooks.js
 * @version 1.0.0
 * @since March 17 2019
 *
 * @flow
 * @format
 */

"use strict";

import React, { PureComponent } from "react";
import { WebView } from "react-native";

type Props = {};
export default class RecommendBooks extends PureComponent<Props> {
  render() {
    return <WebView source={{ uri: "https://www.google.com" }} />;
  }
}
