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
import { AppLoading } from "expo";
import uuidv1 from "uuid/v1";
import ToDo from "./components/Todo";

const { width, height } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedToDos: false,
      newToDo: ""
    };
  }
  componentDidMount = () => {
    this._loadToDos();
  };
  render() {
    const { newToDo, loadedToDos } = this.state;
    if (!loadedToDos) return <AppLoading />;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>ToDo List</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="input todos"
            value={newToDo}
            onChangeText={this._changeText}
            placeholderTextColor={"#999"}
            returnKeyLabel={"done"}
            autoCorrect={false}
            onSubmitEditing={this._addToDo}
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
      newToDo: Text
    });
  };
  _loadToDos = () => {
    this.setState({
      loadedToDos: true
    });
  };
  _addToDo = () => {
    const { newToDo } = this.state;
    if (newToDo !== "") {
      this.setState(prevState => {
        const ID = uuidv1();
        const newToDoObject = {
          [ID]: {
            id: ID,
            isCompleted: false,
            text: newToDo,
            createdAt: Date.now()
          }
        };
        const newState = {
          ...prevState,
          newToDo: "",
          toDos: {
            ...prevState.toDos,
            ...newToDoObject
          }
        };
        return { ...newState };
      });
    }
  };
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1
  },
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
