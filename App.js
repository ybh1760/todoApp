import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  ScrollView
} from "react-native";

import ToDo from "./components/Todo";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }
  render() {
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>ToDo List</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="input todos"
            value={newTodo}
            onChangeText={this._changeText}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo text="create new todos" />
          </ScrollView>
        </View>
      </View>
    );
  }
  _changeText = Text => {
    this.setState({
      newTodo: Text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F23657",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    marginTop: 90,
    marginBottom: 60
  },
  card: {
    width: width - 40,
    height,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5
  },
  input: {
    fontSize: 20,
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1
  },
  toDos: {
    alignItems: "center"
  }
});
