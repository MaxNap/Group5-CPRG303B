import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FruitList from '../../components/fruit_list';
import ButtonTemplate from '../../components/button_template';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Lab 5 : Fruit List</Text>
      <FruitList />
      <ButtonTemplate link={"index"} text="Go to App Index" color="green" />
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