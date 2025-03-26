import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    selectedColor: string;
    selectedSize: string;
  };
  updateQuantity: (id: string, change: number) => void;
  removeItem: (id: string) => void;
}

const ProductCard = ({
  item,
  updateQuantity,
  removeItem,
}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}đ</Text>
        <Text style={styles.productName}>Màu sắc: {item.selectedColor}</Text>
        <Text style={styles.productName}>Kích thước: {item.selectedSize}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => removeItem(item.id)}
          style={styles.removeButton}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#333",
  },
  productReviews: {
    fontSize: 12,
    color: "#888",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: "#ff4d4d",
    padding: 5,
    borderRadius: 3,
  },
  removeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  },
});

export default ProductCard;
