import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ButtonTemplate from '../components/button_template';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Group 5 Labs</Text>
      <ButtonTemplate link={"/(Lab2)"} text={"Lab 2"} color="green" />
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