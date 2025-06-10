import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
import Increment from "../../components/increment";
import Decrement from "../../components/decrement";
import { useRouter } from "expo-router";

export default function Lab3() {
  const [counter, setCounter] = useState<number>(0);

  const router = useRouter();

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.counterstyle}>Counter: {counter}</Text>
      <Increment count={counter} setCount={setCounter} />
      <Decrement count={counter} setCount={setCounter} />

      <TouchableOpacity onPress={ () => router.push("../")}>
        <Text style={styles.text}>Return Home</Text>
      </TouchableOpacity>
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
  counterstyle: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 36,
    textAlign: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "blue",
    width: 200,
    marginTop: 20,
  }
});


