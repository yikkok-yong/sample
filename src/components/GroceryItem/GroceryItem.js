/* @flow */

import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem, Body, Right, CheckBox, Text } from "native-base";

type Props = {
  name: string,
  isSelected: boolean,
  onPress: any
};
type State = {
  isSelected: boolean
};
export default class GroceryItem extends Component<Props, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isSelected: this.props.isSelected
    };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    if (this.state.isSelected !== nextState.isSelected || this.props.name !== nextProps.name) {
      return true;
    }

    return false;
  }

  componentDidMount() {}

  componentWillUnmount() {}

  _onPressHandle = (event: any) => {
    this.setState(
      {
        isSelected: !this.state.isSelected
      },
      () => {
        if (this.props.onPress) {
          this.props.onPress(event, this.state.isSelected);
        }
      }
    );
  };

  render() {
    return (
      <ListItem>
        <TouchableOpacity onPress={this._onPressHandle} style={{ flexDirection: "row" }}>
          <Body>
            <Text>{this.props.name}</Text>
          </Body>
          <CheckBox checked={this.state.isSelected} />
        </TouchableOpacity>
      </ListItem>
    );
  }
}
