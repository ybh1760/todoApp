import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>ToDo List</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="input todos" />
        </View>
      </View>
    );
  }
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
    width
  }
});
