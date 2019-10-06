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
      toDoValue: props.text
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    deleteToDo: PropTypes.func.isRequired,
    completedToDo: PropTypes.func.isRequired,
    uncompletedToDo: PropTypes.func.isRequired
  };

  render() {
    const { isEditing, toDoValue } = this.state;
    const { id, text, deleteToDo, isCompleted } = this.props;
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
            <TouchableOpacity onPressOut={() => deleteToDo(id)}>
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
    const { isCompleted, completedToDo, uncompletedToDo, id } = this.props;
    if (isCompleted) {
      uncompletedToDo(id);
    } else {
      completedToDo(id);
    }
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
    marginVertical: 20
  }
});
