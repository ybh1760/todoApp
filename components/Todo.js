import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { AuthSession } from "expo";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  state = {
    isCompleted: false
  };
  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._toggleComplete}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.compeletedCircle : styles.uncompletedCircle
            ]}
          />
        </TouchableOpacity>
        <Text style={[styles.text]}>Hello I'm a To Do</Text>
      </View>
    );
  }
  _toggleComplete = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    marginRight: 10,
    marginVertical: 20
  },
  text: {
    fontSize: 20,
    marginVertical: 20
  },
  compeletedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  }
});
