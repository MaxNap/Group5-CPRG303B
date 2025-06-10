import { Text, Button, View, StyleSheet } from "react-native";

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function Increment({ count, setCount }: Props) {
  return (
    <View  style={styles.button}>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    textAlign: "center",
  }
});
