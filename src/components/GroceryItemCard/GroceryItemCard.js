/* @flow */

import React, { PureComponent } from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Body } from "native-base";

type Props = {
  name: string,
  image: any,
  price: number,
  currencySymbol: string,
  imageStyle?: any,
  cardStyle?: any
};

type State = {};
export default class GroceryItemCard extends PureComponent<Props, State> {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { name, image, price, currencySymbol, imageStyle, cardStyle } = this.props;
    return (
      <Card style={cardStyle}>
        <CardItem bordered>
          <Body>
            <Text>{name}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody bordered>
          <Image source={image} style={imageStyle} />
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{`${currencySymbol} ${price}`}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
