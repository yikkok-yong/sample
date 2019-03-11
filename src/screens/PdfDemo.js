/**
 * @file PdfDemo.js
 * @version 1.0.0
 * @since March 11 2019
 *
 * @flow
 * @format
 */

"use strict";

import React, { PureComponent } from "react";
import { View, Dimensions } from "react-native";
import Pdf from "react-native-pdf";
import { Text } from "native-base";

const { height, width } = Dimensions.get("window");
type Props = {};
export default class PdfDemo extends PureComponent<Props> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <Pdf
          source={{ uri: "bundle-assets://misc/axia_brochure-protected.pdf" }}
          onError={err => {
            console.log(err);
          }}
          password={"123456"}
          style={{ flex: 1, width }}
        />
      </View>
    );
  }
}
