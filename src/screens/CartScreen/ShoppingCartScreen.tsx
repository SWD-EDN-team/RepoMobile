import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "../../components/Product";
import OrderSummary from "../../components/Summary";

const initialProducts = [
  { id: 1, name: "Mustard Chunky Cable Knit Sweater", price: 35, reviews: 1278, image: require("../../../assets/icon.png"), quantity: 1 },
  { id: 2, name: "Totally Feel Good Oversized Crew Sweatshirt", price: 25, reviews: 2557, image: require("../../../assets/icon.png"), quantity: 1 }
];

export default function Cart() {
  const [products, setProducts] = useState(initialProducts);

  const updateQuantity = (id: number, change: number) => {
    setProducts(products.map(item => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)));
  };

  const removeItem = (id: number) => {
    setProducts(products.filter(item => item.id !== id));
  };

  const totalPrice = products.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Shopping Cart </Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} updateQuantity={updateQuantity} removeItem={removeItem} />}
      />

      <Text style={styles.summary}>Order Summary </Text>
      <OrderSummary totalItems={products.length} totalPrice={totalPrice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  summary: { fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "left" },
});


