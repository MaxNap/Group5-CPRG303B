import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const sampleList = [
    { name:"Joseph", github_repo:"itsjos3ph", group_no:"5" },
    { name:"Jimmy", github_repo:"SummerShorts676", group_no:"5" },
    { name:"Maksim", github_repo:"MaxNap", group_no:"5" },
  ];

  return (
    <View style={styles.container}>

      {sampleList.map((item) => (
        <Text key={item.name} style={{ color: "black", fontSize: 20}}>
          {item.name}
        </Text>
      ))}

      <Pressable>
        <Text style={styles.text} onPress={() => alert("Lab 1 done")}>Click Me!</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffba00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#a9fc03',
    fontSize: 20,
    borderRadius: 10,
    padding: 5,
  },
});
