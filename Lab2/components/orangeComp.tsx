import { View, Text, StyleSheet, Image } from 'react-native';

export default function OrangeComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Oranges are a great source of vitamin C and are enjoyed worldwide.
      </Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
