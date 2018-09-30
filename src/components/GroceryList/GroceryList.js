/* @flow */

import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, Header, List } from "native-base";
import GroceryItem from "../GroceryItem/GroceryItem";
import { generateDummyGrocery } from "../../data/grocery_dummy_data";

type Props = {};
type State = {
  groceryList: Array<any>,
  selectedGrocery: Array<any>
};
export default class GroceryList extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      groceryList: [],
      selectedGrocery: []
    };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return true;
  }

  async componentDidMount() {
    await this._setGroceryList();
  }

  componentWillUnmount() {}

  _setGroceryList = () => {
    this.setState({
      groceryList: generateDummyGrocery()
    });
  };

  _onPressListItem = (item: any) => (event: any, isSelected: boolean) => {
    if (isSelected) {
      const { selectedGrocery } = this.state;

      selectedGrocery.push(item.name);

      this.setState({ selectedGrocery });
    }
  };

  _renderItem = ({ item, index }: any) => {
    return (
      <GroceryItem
        name={item.name}
        onPress={this._onPressListItem}
        isSelected={item.isSelected}
      />
    );
  };

  _keyExtractor = (item: any, index: number) => `grocery-${index}`;

  render() {
    return (
      <Container>
        <Header />

        <FlatList
          data={this.state.groceryList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </Container>
    );
  }
}
