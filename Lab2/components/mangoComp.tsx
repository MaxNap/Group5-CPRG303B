import { View, Text, StyleSheet, Image } from 'react-native';

export default function MangoComp() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Mangoes are tropical fruits known for their sweet flavor and high vitamin A content!
      </Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg' }}
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
