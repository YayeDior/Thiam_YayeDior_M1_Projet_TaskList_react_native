import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  return (
    <ScrollView>
    <View style={styles.listTile}>
      <Icon
        name={props.todo.isChecked ? "check-circle" : "radio-button-unchecked"}
        style={styles.leading}
        size={20}
        color="blue"
        onPress={() => props.checkTodo(props.todo.key)}
      />
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="blue"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#87CEEB",
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "blue"
  },
  leading: {
    width: "80%"
  },
  title: {
    width: "100%",
    fontSize: 18
  },
  trailing: {
    width: "100%"
  }
});
