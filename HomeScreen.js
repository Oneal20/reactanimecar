import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const cars = [
  { id: '1', name: 'AE86 (Initial D)', anime: 'Initial D', image: 'https://link-to-image.com/ae86.jpg' },
  { id: '2', name: 'Mazda RX-7 (Initial D)', anime: 'Initial D', image: 'https://link-to-image.com/rx7.jpg' },
  { id: '3', name: 'Batmobile (Batman)', anime: 'Batman', image: 'https://link-to-image.com/batmobile.jpg' },
  // Adicione mais carros aqui
];

const HomeScreen = ({ navigation }) => {
  const renderCar = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CarDetail', { car: item })}>
      <View style={styles.carCard}>
        <Text style={styles.carName}>{item.name}</Text>
        <Text>{item.anime}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carros de Anime</Text>
      <FlatList
        data={cars}
        renderItem={renderCar}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carCard: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
