import React from "react";
import { Pressable, StyleSheet,Text } from "react-native";


const ColorButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "red" }}
      style={({ pressed }) => [{
        backgroundColor: pressed ? "grey" : "green",
      }, styles.button, {...props.style}]
      }>
      <Text>{props.title}</Text>
    </Pressable>);

};

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
    color: 'black',
    margin: 20
  },
  button:{
    width: 150,
    height: 50,
    alignItems: 'center'
  }

  }
)

export {ColorButton};
