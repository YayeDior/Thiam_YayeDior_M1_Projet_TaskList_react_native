import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, Button,ScrollView} from "react-native";
import NavBar from "./src/components/NavBar";
import Todo from "./src/components/Todo";
import TodoList from "./src/components/TodoList";

export default function App() {
  const [title, setTitle] = useState("");

  const [todo, setTodo] = useState({});

  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    if (title.length > 0) {
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      setTitle("");
    }
  };

  const checkTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.key === id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      })
    );
  };

  const deleteTodo = id => {
  
    setTodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  useEffect(() => {
    console.log(todos.length, "TodoList length");

  }, [todos]);

  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <NavBar />
      <View style={styles.todo}>
        <TextInput
          placeholder="Ajouter un élement dans la liste"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />
        <Button title="Ajouter" color="#87CEEB" onPress={() => addTodo()} />
      </View>
      <ScrollView>
        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#87CEEB",
    color: "#fff",
    width: "70%",
    height: 15
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  todo: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "center",
    alignItems: "center"
  },
  textbox: {
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    width: "80%"
  }
});
