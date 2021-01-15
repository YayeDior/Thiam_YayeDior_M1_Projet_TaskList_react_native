import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NavBar(){
  return (
    <View style={styles.navBar}>
      <Text style={styles.heading}>Vendredi 15 Janvier 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#87CEEB",
    color: "#87CEEB",
    width: "70%",
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "black",
    fontSize: 24,
    fontWeight: "400"
  }
});
