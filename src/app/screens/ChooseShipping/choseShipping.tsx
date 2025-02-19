import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ShippingOption from './shippingOption';

const shippingOptions = [
  { id: 'economy', name: 'Economy', arrival: '25 August 2023', icon: 'box' },
  { id: 'regular', name: 'Regular', arrival: '24 August 2023', icon: 'box-open' },
  { id: 'cargo', name: 'Cargo', arrival: '22 August 2023', icon: 'truck-moving' },
  { id: 'friend', name: "Friend House", address: '2464 Royal Ln. Mesa, New Jersey 45463', icon: 'truck' },
];

const ChoseShipping = () => {
  const [selected, setSelected] = useState('economy');

  return (
    <View style={styles.container}>
      {/* Back Button + Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#5C4439" />
        </TouchableOpacity>
        <Text style={styles.header}>Choose Shipping</Text>
      </View>

      {/* Shipping Options */}
      <FlatList
        data={shippingOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShippingOption item={item} selected={selected} onSelect={setSelected} />
        )}
        contentContainerStyle={styles.listContainer}
      />

      {/* Apply Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF7F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    color: '#5C4439',
    flex: 1,
    textAlign: 'center', // Căn giữa
  },
  listContainer: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#5C4439',
    paddingVertical: 30, // Tăng chiều cao nút Apply
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '100%', // Button rộng full màn hình
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ChoseShipping;
