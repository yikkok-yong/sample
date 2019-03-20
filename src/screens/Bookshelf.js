/**
 * @file Bookshelf.js
 * @version 1.0.0
 * @since March 17 2019
 *
 * @flow
 * @format
 */

"use strict";

import React, { Component } from "react";
import { FlatList, AsyncStorage, Image, Dimensions, ActivityIndicator, TouchableOpacity, Modal } from "react-native";
import { connect } from "react-redux";
import { View, Text } from "native-base";
import Pdf from "react-native-pdf";
import RNFetchBlob from "rn-fetch-blob";

const { width } = Dimensions.get("window");

type Props = {
  dispatch: any,
  books: any
};

type State = {
  books: Array<any>,
  isOpenModal: boolean,
  selectedFile: string
};
class Bookshelf extends Component<Props, State> {
  BOOK_WIDTH: number = (width - 30) / 3;

  constructor(props: Props) {
    super(props);

    this.state = {
      books: [],
      isOpenModal: false,
      selectedFile: ""
    };
  }

  componentDidMount() {
    const { books } = this.props;
    const bookList = books.booklist;
    const bookListInArray: Array<any> = [];

    for (const key in bookList) {
      if (bookList.hasOwnProperty(key)) {
        const element = bookList[key];
        bookListInArray.push(element);
      }
    }

    this.setState({
      books: bookListInArray
    });
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { books } = this.props;

    if (prevProps.books !== books) {
      const bookList = books.booklist;
      const bookListInArray: Array<any> = [];

      for (const key in bookList) {
        if (bookList.hasOwnProperty(key)) {
          const element = bookList[key];
          bookListInArray.push(element);
        }
      }

      this.setState({
        books: bookListInArray
      });
    }
  }

  handleSelectBook = (book: any) => (event: any) => {
    const { fs } = RNFetchBlob;

    this.setState(
      {
        isOpenModal: true,
        isLoadingFile: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            selectedFile: `${fs.dirs.DownloadDir}/${book.name}`,
            isLoadingFile: false
          });
        }, 2000);
      }
    );
  };

  handleRenderBooks = ({ item, index }) => {
    const imgSrc = (item.cover && { uri: item.cover }) || require("../../images/sample_dummy.png");

    return (
      <TouchableOpacity onPress={this.handleSelectBook(item)}>
        <View style={{ width: this.BOOK_WIDTH, marginHorizontal: 5 }}>
          <Image source={imgSrc} style={{ height: this.BOOK_WIDTH, width: this.BOOK_WIDTH }} />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { isOpenModal, selectedFile, isLoadingFile } = this.state;

    return (
      <View>
        <FlatList
          data={this.state.books}
          renderItem={this.handleRenderBooks}
          numColumns={3}
          ListEmptyComponent={
            <View style={{ flex: 1, height: Dimensions.get("window").height, justifyContent: "center" }}>
              <Text note style={{ textAlign: "center" }}>
                Haven't add any books into your collection yet
              </Text>
            </View>
          }
        />

        <Modal
          visible={isOpenModal}
          onRequestClose={() => {
            this.setState({
              isOpenModal: false
            });
          }}
        >
          {!isLoadingFile ? (
            <Pdf
              source={{ uri: `file://${selectedFile}`, cache: true }}
              onError={error => {
                console.log(error);
              }}
              password={"123456"}
              style={{ flex: 1, width }}
              enableAnnotationRendering={true}
              enablePaging={true}
              activityIndicator
            />
          ) : (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <ActivityIndicator />
            </View>
          )}
        </Modal>
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

export default connect(mapStateToProps)(Bookshelf);
