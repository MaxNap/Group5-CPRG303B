import { View, Text, StyleSheet } from 'react-native';
import AppleComponent from '../../components/appleComp';

export default function AppleScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>🍎 Apple</Text>
        <AppleComponent />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 10,
      paddingHorizontal: 20,
    },
  });
  