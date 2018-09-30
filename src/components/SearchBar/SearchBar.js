/* @flow */

import React, { Component } from "react";
import { ActivityIndicator } from "react-native";
import { Input, Item } from "native-base";

type Props = {
  placeholder: string,
  onChangeText: any
};
export default class SearchBar extends Component<Props> {
  componentDidMount() {}

  componentWillUnmount() {}

  _onChangeTextHandle = (text: string) => {
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  };

  render() {
    return (
      <Item rounded style={{ paddingHorizontal: 10 }}>
        <Input
          placeholder={this.props.placeholder}
          onChangeText={this._onChangeTextHandle}
        />
      </Item>
    );
  }
}
