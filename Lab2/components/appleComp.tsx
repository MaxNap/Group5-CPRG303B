import { View, Text, StyleSheet, Image } from 'react-native';

export default function AppleComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
      Apples are sweet, crunchy fruits that come in many varieties and are rich in fiber.
      </Text>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg' }}
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
