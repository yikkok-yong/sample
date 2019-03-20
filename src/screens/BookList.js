/**
 * @file BookList.js
 * @version 1.0.0
 * @since March 17 2019
 *
 * @flow
 * @format
 */

"use strict";

import React, { PureComponent } from "react";
import { WebView, AsyncStorage } from "react-native";
import { Toast, View } from "native-base";
import RNFetchBlob from "rn-fetch-blob";
import { connect } from "react-redux";

import { updateBookList } from "../actions/books/actions";

type Props = {
  dispatch: any,
  books: any
};
class BookList extends PureComponent<Props> {
  handleReceivedMessage = (event: any) => {
    const postMsgObj = JSON.parse(event.nativeEvent.data);
    const { dispatch, books } = this.props;

    const { fs } = RNFetchBlob;
    RNFetchBlob.config({
      // response data will be saved to this path if it has access right.
      path: fs.dirs.DownloadDir + `/${postMsgObj.name}`
    })
      .fetch("GET", `http://${postMsgObj.file}`)
      .then(res => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log("The file saved to ", res.path());

        books.booklist[postMsgObj.key] = postMsgObj;
        dispatch(updateBookList(books.booklist));

        Toast.show({
          text: "Files had been downloaded to your internal storage (Demo)",
          position: "bottom",
          duration: 5000
        });
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: "" }} onMessage={this.handleReceivedMessage} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { books } = state;
  return {
    books
  };
};

export default connect(mapStateToProps)(BookList);
