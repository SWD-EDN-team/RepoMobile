import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ShippingOption = ({ item, selected, onSelect }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={() => onSelect(item.id)}>
      <Icon name={item.icon} size={22} color="#5C4439" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.optionText}>{item.name}</Text>
        {item.arrival ? (
          <Text style={styles.subText}>Estimated Arrival {item.arrival}</Text>
        ) : (
          <Text style={styles.subText}>{item.address}</Text>
        )}
      </View>
      <View style={styles.radioCircle}>
        {selected === item.id && <View style={styles.selectedCircle} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 55, // Tăng chiều cao button
    borderRadius: 12,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: '100%', // Button rộng full màn hình
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#5C4439',
  },
  subText: {
    fontSize: 14,
    color: '#8D7B72',
    marginTop: 2,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#5C4439',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5C4439',
  },
});

export default ShippingOption;
