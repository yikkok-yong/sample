/* @flow */

import React, { Component } from "react";
import { TimePickerAndroid, TouchableOpacity } from "react-native";
import { View, Text, Button } from "native-base";
import moment from "moment";
import style from "./Clock.style";

type Props = {};

type State = {
  timer: string
};
export default class Clock extends Component<Props, State> {
  countDownIntervalID: any;
  trackMilliseconds: number;

  ONE_MILLISECOND: number = 1;

  BUTTON_TEXT_STOP: string = "Stop";
  BUTTON_TEXT_START: string = "Start";

  constructor(props: any) {
    super(props);

    this.state = {
      timer: moment().format("hh:mm")
    };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.timer !== nextState.timer;
  }

  componentDidMount() {
    this.countDownIntervalID = setInterval(this._countDown, this.ONE_MILLISECOND);
  }

  componentWillUnmount() {
    clearInterval(this.countDownIntervalID);
  }

  _countDown = () => {
    this.setState({
      timer: moment().format("hh:mm:ss.SSS")
    });
  };

  _onPressStopHandle = () => {
    clearInterval(this.countDownIntervalID);
  };

  _onPressStartHandle = () => {
    this.countDownIntervalID = setInterval(this._countDown, this.ONE_MILLISECOND);
  };

  render() {
    return (
      <View style={style.timerContainer}>
        <Text style={style.timerText}>{this.state.timer}</Text>
        <View style={style.buttonContainer}>
          <Button onPress={this._onPressStartHandle}>
            <Text>{this.BUTTON_TEXT_START}</Text>
          </Button>

          <Button onPress={this._onPressStopHandle}>
            <Text>{this.BUTTON_TEXT_STOP}</Text>
          </Button>
        </View>
      </View>
    );
  }
}
