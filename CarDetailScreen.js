import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CarDetailScreen = ({ route }) => {
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{car.name}</Text>
      <Image source={{ uri: car.image }} style={styles.carImage} />
      <Text style={styles.animeName}>{car.anime}</Text>
      <Text style={styles.carDescription}>Aqui você pode colocar uma descrição mais detalhada sobre o carro e seu papel no anime.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  animeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDescription: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default CarDetailScreen;
