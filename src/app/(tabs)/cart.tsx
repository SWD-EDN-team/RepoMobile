import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import ProductCard from "@/components/FooterOrder";
import OrderSummary from "@/components/Summary";
import { fetchCart } from "../../utils/api"
import { router } from "expo-router";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedSize: string;
  selectedColor: string;
};

export default function Cart() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetchCart();
        console.log("Dữ liệu giỏ hàng:", JSON.stringify(response.cart, null, 2));
        const formattedProducts: Product[] = response.cart.items.map((item: { product_id: { _id: any; product_name: any; price: any; image: any[]; }; quantity: any; selected_size: any; selected_color: any; }) => ({
          id: item.product_id._id,
          name: item.product_id.product_name,
          price: item.product_id.price,
          quantity: item.quantity,
          image: item.product_id.image[0],
          selectedSize: item.selected_size,
          selectedColor: item.selected_color,
        }));

        setProducts(formattedProducts);
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng:", error);
      } finally {
        setLoading(false);
      }
    };

    getCart();
  }, []);

  const updateQuantity = (id: string, change: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));
  };

  const totalPrice = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Shopping Cart</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        )}
      />


      <OrderSummary totalItems={products.length} totalPrice={totalPrice}/>
      <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            router.push({
              pathname: "/screens/CheckoutScreen/CheckoutScreen",
              params: { cartData: JSON.stringify(products) },
            })
          }
        >
        <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f8f8f8" },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  summary: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  checkoutButton: {
    backgroundColor: "#ff6600",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
