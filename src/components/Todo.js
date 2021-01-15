import React, {useState} from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

export default function Elements(props) {
  
  const [title, setTitle] = useState('');

  return (
    <View style={styles.elements}>
      <TextInput 
        placeholder="Ajouter un element" 
        value={title}
        onChangeText={value=>setTitle(value)}
        style={styles.textbox} />
      <Button 
        title="Ajouter" 
        color= "black"
        onPress={props.addElemement}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    width: "80%",
    justifyContent:'center',
    alignItems:'center'
  },
  textbox: {
    borderWidth: 1,
    borderColor: "Black",
    borderRadius: 8,
    backgroundColor: "blue",
    padding: 10,
    margin: 50,
    width:'70%'
  }
});
