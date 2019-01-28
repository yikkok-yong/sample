/* @flow */
import React, { PureComponent } from "react";
import { Text } from "react-native";
import { View, Button, Container, Content } from "native-base";
import { connect } from "react-redux";

import { translate } from "../i18n/translation";
import { UPDATE_LANGUAGE } from "../actions/i18n/actionTypes";

type Props = {
  dispatch: any,
  lang: string,
  t: any
};
type State = {};
class TranslationDemo extends PureComponent<Props, State> {
  _translation = (to: string) => (event: any) => {
    this.props.dispatch({
      type: UPDATE_LANGUAGE,
      lang: to,
      t: translate(to)
    });
  };

  render() {
    const { t } = this.props;

    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontSize: 24 }}>{`${t("hello")}, ${t("bye")}`}</Text>
          </View>

          <View style={{ width: "80%" }}>
            <Button block rounded onPress={this._translation("CN")} style={{ marginBottom: 10 }}>
              <Text style={{ color: "#fff" }}>{"Chinese"}</Text>
            </Button>
            <Button block rounded onPress={this._translation("EN")}>
              <Text style={{ color: "#fff" }}>{"English"}</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { i18n } = state;

  return {
    lang: i18n.lang,
    t: i18n.t
  };
};

export default connect(mapStateToProps)(TranslationDemo);
