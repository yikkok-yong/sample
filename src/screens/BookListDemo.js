/**
 * @file BookListDemo.js
 * @version 1.0.0
 * @since March 17 2019
 *
 * @flow
 * @format
 */

"use strict";

import React, { PureComponent } from "react";
import { Tab, Tabs, TabHeading, Text } from "native-base";
import BookList from "./BookList";
import RecommendBooks from "./RecommendBooks";
import Bookshelf from "./Bookshelf";

type Props = {};
export default class BookListDemo extends PureComponent<Props> {
  render() {
    return (
      <Tabs tabBarUnderlineStyle={{ backgroundColor: "#000" }}>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#000" }}>{"精选"}</Text>
            </TabHeading>
          }
          tabStyle={{ backgroundColor: "#fff" }}
          activeTabStyle={{ backgroundColor: "#fff" }}
        >
          <RecommendBooks />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#000" }}>{"书列"}</Text>
            </TabHeading>
          }
          tabStyle={{ backgroundColor: "#fff" }}
          activeTabStyle={{ backgroundColor: "#fff" }}
        >
          <BookList />
        </Tab>

        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#fff" }}>
              <Text style={{ color: "#000" }}>{"书架"}</Text>
            </TabHeading>
          }
        >
          <Bookshelf />
        </Tab>
      </Tabs>
    );
  }
}
