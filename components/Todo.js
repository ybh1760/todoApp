import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput
} from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isCompleted: false
    };
  }
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  render() {
    const { isCompleted, isEditing, toDoValue = "" } = this.state;
    const { text } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this._toggleComplete}>
            <View
              style={[
                styles.circle,
                isCompleted ? styles.completedCircle : styles.uncompletedCircle
              ]}
            />
          </TouchableOpacity>
          {isEditing ? (
            <TextInput
              style={[
                styles.text,
                styles.input,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
              value={toDoValue}
              multiline={true}
              onChangeText={this._changeTodo}
              onBlur={this._finishEdit}
              returnKeyType={"done"}
            />
          ) : (
            <Text
              style={[
                styles.text,
                isCompleted ? styles.completedText : styles.uncompletedText
              ]}
            >
              {text}
            </Text>
          )}
        </View>
        {isEditing ? (
          <View style={styles.action}>
            <TouchableOpacity onPressOut={this._finishEdit}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.action}>
            <TouchableOpacity onPressOut={this._startEdit}>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>✏️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionContainer}>
                <Text style={styles.actionText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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
  _startEdit = () => {
    const { text } = this.props;
    this.setState({
      toDoValue: text,
      isEditing: true
    });
  };
  _finishEdit = () => {
    this.setState({
      isEditing: false
    });
  };
  _changeTodo = text => {
    this.setState({
      toDoValue: text
    });
  };
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  column: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center"
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 3,
    marginRight: 8,
    marginLeft: 2,
    marginVertical: 20
  },
  completedCircle: {
    borderColor: "#bbb"
  },
  uncompletedCircle: {
    borderColor: "#F23657"
  },
  text: {
    fontSize: 20,
    marginVertical: 20
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#bbb"
  },
  uncompletedText: {
    color: "#353839"
  },
  action: {
    flexDirection: "row"
  },
  actionContainer: {
    margin: 10
  },
  input: {
    width: width / 2,
    marginVertical: 10
  }
});
