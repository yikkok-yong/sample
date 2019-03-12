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
import { View, Dimensions, ActivityIndicator } from "react-native";
import Pdf from "react-native-pdf";
import { Text, Toast, Button } from "native-base";
import RNFetchBlob from "rn-fetch-blob";

const { height, width } = Dimensions.get("window");
type Props = {};
export default class PdfDemo extends PureComponent<Props> {
  constructor() {
    super();

    this.state = {
      showPDF: "",
      filePath: ""
    };
  }

  componentDidMount() {
    const { fs } = RNFetchBlob;
    RNFetchBlob.config({
      // response data will be saved to this path if it has access right.
      path: fs.dirs.DownloadDir + "/sample.pdf"
    })
      .fetch("GET", "https://www.yikkok.com/TestingSample-protected.pdf")
      .then(res => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log("The file saved to ", res.path());

        this.setState({
          filePath: res.path()
        });
        Toast.show({
          text: "Files had been downloaded to your internal storage (Demo)",
          position: "bottom",
          duration: 5000
        });
      });
  }

  render() {
    const { showPDF, filePath } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
        <View style={{ justifyContent: "center" }}>
          <Button
            onPress={() => {
              this.setState(state => {
                return { showPDF: !state.showPDF };
              });
            }}
          >
            <Text>{!showPDF ? "View" : "Close"}</Text>
          </Button>
        </View>

        {showPDF ? (
          <Pdf
            source={{ uri: `file://${filePath}` }}
            onError={error => {
              console.log(error);
            }}
            password={"123456"}
            style={{ flex: 1, width }}
          />
        ) : null}
      </View>
    );
  }
}
