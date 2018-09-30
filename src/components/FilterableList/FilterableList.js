/* @flow */

import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, View } from "native-base";
import { generateDummyGrocery } from "../../data/grocery_dummy_data";
import SearchBar from "../SearchBar/SearchBar";
import { searchGroceryByName } from "../../actions/search";
import GroceryItem from "../GroceryItem/GroceryItem";

type Props = {};
type State = {
  groceryList: Array<any>,
  filteredList: Array<any>,
  searchText: string,
  isRefreshing: boolean
};
export default class FilterableList extends Component<Props, State> {
  PLACEHOLDER_TEXT: string = "Search";

  constructor() {
    super();

    this.state = {
      groceryList: [],
      filteredList: [],
      searchText: "",
      isRefreshing: false
    };
  }

  async componentDidMount() {
    await this._setGroceryList();
  }

  _setGroceryList = () => {
    this.setState({
      groceryList: generateDummyGrocery()
    });
  };

  _keyExtractor = (item: any, index: number) => (item.key ? item.key : index.toString());

  _onChangeTextHandle = (searchText: string) => {
    this.setState({ isRefreshing: true }, () => {
      let filteredList = searchGroceryByName(this.state.groceryList, searchText);

      this.setState({
        searchText,
        filteredList
      });

      setTimeout(() => {
        this.setState({
          isRefreshing: false
        });
      }, 1000);
    });
  };

  _renderItem = ({ item, index }: any) => {
    return (
      <GroceryItem name={item.name} onPress={this._onPressListItem} isSelected={item.isSelected} />
    );
  };

  _onPressListItem = (item: any) => (event: any, isSelected: boolean) => {
    console.log(isSelected ? "is selected" : "is not selected");
  };

  render() {
    return (
      <Container>
        <View style={{ margin: 15 }}>
          <SearchBar placeholder={this.PLACEHOLDER_TEXT} onChangeText={this._onChangeTextHandle} />
        </View>

        <FlatList
          data={this.state.searchText.length > 0 ? this.state.filteredList : this.state.groceryList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onRefresh={() => {}}
          refreshing={this.state.isRefreshing}
        />
      </Container>
    );
  }
}
