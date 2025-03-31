import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CarCard = ({ car, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.name}>{car.name}</Text>
      <Text>{car.anime}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default CarCard;