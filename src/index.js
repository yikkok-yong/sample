// @flow

import React, { PureComponent } from "react";
import { Container, Content, Header, Body, Text, Footer, Root } from "native-base";
import BookListDemo from "./screens/BookListDemo";

type Props = {};
export default class App extends PureComponent<Props> {
  render() {
    return (
      <Root>
        <Container style={{ marginTop: 20 }}>
          {/* <Header style={{ backgroundColor: "#eee" }}>
          <Body>
            <Text style={{ fontWeight: "500", textDecorationLine: "underline" }}>The place where magic born</Text>
          </Body>
        </Header> */}

          <BookListDemo />

          {/* <Footer style={{ paddingHorizontal: 10, alignItems: "center", justifyContent: "space-between", backgroundColor: "#eee" }}>
          <Text note>Expo and React Native</Text>
          <Text note>www.yikkok.com</Text>
        </Footer> */}
        </Container>
      </Root>
    );
  }
}
