import { View, Text, StyleSheet } from 'react-native';
import OrangeComponent from '../../components/orangeComp';

export default function OrangeScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>🍊 Orange</Text>
        <OrangeComponent />
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