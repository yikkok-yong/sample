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

  ONE_SECOND: number = 1000;
  BUTTON_TEXT_STOP: string = "Stop";
  BUTTON_TEXT_START: string = "Start";
  TIME_FORMAT: string = "hh:mm:ss";

  constructor(props: any) {
    super(props);

    this.state = {
      timer: moment().format(this.TIME_FORMAT)
    };
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.timer !== nextState.timer;
  }

  componentDidMount() {
    this.countDownIntervalID = setInterval(this._countDown, this.ONE_SECOND);
  }

  componentWillUnmount() {
    clearInterval(this.countDownIntervalID);
  }

  _countDown = () => {
    this.setState({
      timer: moment().format(this.TIME_FORMAT)
    });
  };

  _onPressStopHandle = () => {
    clearInterval(this.countDownIntervalID);
  };

  _onPressStartHandle = () => {
    this.countDownIntervalID = setInterval(this._countDown, this.ONE_SECOND);
  };

  render() {
    return (
      <View style={style.timerContainer}>
        <Text style={style.timerText}>{this.state.timer}</Text>
        <View style={style.buttonContainer}>
          <Button onPress={this._onPressStartHandle} rounded success>
            <Text>{this.BUTTON_TEXT_START}</Text>
          </Button>

          <Button onPress={this._onPressStopHandle} rounded danger>
            <Text>{this.BUTTON_TEXT_STOP}</Text>
          </Button>
        </View>
      </View>
    );
  }
}
