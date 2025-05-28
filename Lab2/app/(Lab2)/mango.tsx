import { View, Text, StyleSheet, Image } from 'react-native';
import MangoComp from '../../components/mangoComp';

export default function Mango() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Mango</Text>
        <MangoComp />
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
  