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
  footer: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#FFFFFF",
    paddingLeft: 26,
    paddingRight: 26,
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_shopping_cart: {
    width: 30,
    height: 30,
  },
  count: {
    flexDirection: "row",
    height: 50,
    width: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 25,
  },
  calutation: {
    width: 30,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAdd: {
    height: 50,
    width: "50%",
    backgroundColor: "#FB741A",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 35,
  },
  addBag: {
    height: 20,
    width: 20,
  },
  titleAdd: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
export default FooterOrder;