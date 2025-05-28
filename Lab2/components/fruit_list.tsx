import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonTemplate from '../components/button_template';

export default function FruitList() {
  return (
    <View style={styles.container}>
      <Text>Lab 2 Fruit List</Text>
      <ButtonTemplate link={"/apple"} text={"Apple"} color="green" />
      <ButtonTemplate link={"/orange"} text={"Orange"} color="green" />
      <ButtonTemplate link={"/mango"} text={"Mango"} color="green" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});