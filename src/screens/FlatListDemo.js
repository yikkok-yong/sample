/**
 * FlatList Demo
 *
 * How to utilized available props in FlatList
 */
/* @flow */
import React, { PureComponent } from "react";
import { FlatList, Dimensions, View } from "react-native";
import { Container, ListItem, Text } from "native-base";
import { vegetables } from "../data/vegetables";
import GroceryItemCard from "../components/GroceryItemCard/GroceryItemCard";

const { width } = Dimensions.get("window");

type Props = {};

type State = {
  height: number
};
export default class FlatListDemo extends PureComponent<Props, State> {
  VEGETABLES: Array<any> = vegetables;
  IMAGE_WIDTH: number = (width - 50) / 2;

  _renderItem = ({ item, index }: any) => {
    return (
      <GroceryItemCard
        name={item.name}
        price={item.price}
        image={item.image}
        currencySymbol={"RM"}
        imageStyle={{ width: this.IMAGE_WIDTH, height: this.IMAGE_WIDTH }}
        cardStyle={{ marginLeft: 5, marginRight: 5 }}
      />
    );
  };

  _keyExtractor = (item: any, index: number) => `list-${item}-${index}`;

  render() {
    return (
      <View>
        <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
          <Text style={{ fontSize: 21, textDecorationLine: "underline" }}>#1 - Snap on scroll</Text>
        </View>
        <View>
          <FlatList
            data={this.VEGETABLES}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            horizontal={true}
            snapToAlignment={"start"}
            snapToInterval={this.IMAGE_WIDTH + 10}
            decelerationRate={"fast"}
            pagingEnabled
          />
        </View>
      </View>
    );
  }
}
