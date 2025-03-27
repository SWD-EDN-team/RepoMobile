import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ShippingMethod from "./ShippingMethod";
import { router } from "expo-router";

const OrderSummary = ({ products }: { products: any[] }) => {
  const [selectedShipping, setSelectedShipping] = useState({ id: 1, name: "Giao hàng tiết kiệm", price: 15000 });

  const totalProductPrice = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPrice = totalProductPrice + selectedShipping.price;

  return (
    <View style={styles.container}>
      <ShippingMethod onSelect={setSelectedShipping} />
      <View style={styles.summaryBox}>
      <Text style={styles.totalText}>
        Tổng thanh toán ({products.length} sản phẩm): {totalPrice.toLocaleString("vi-VN")}đ
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/screens/Payment",
            params: { total: totalPrice.toString() }, 
          })
        }
      >
        <Text style={styles.text}>Mua hàng</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: "#fff" },
    title: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
    shippingOption: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
      padding: 10,
      borderWidth: 2,
      borderRadius: 5,
    },
    radioCircle: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: "blue",
      alignItems: "center",
      justifyContent: "center",
      marginRight: 10,
    },
    radioSelected: {
      width: 12,
      height: 12,
      backgroundColor: "blue",
      borderRadius: 6,
    },
    shippingText: { fontSize: 16 },
    summaryBox: { marginTop: 20, padding: 15, borderWidth: 1, borderColor: "#ddd", borderRadius: 5 },
    text: {
      backgroundColor: "#007BFF", // Màu xanh dương
      color: "#fff", // Chữ màu trắng
      fontSize: 16, // Cỡ chữ
      fontWeight: "bold", // Chữ đậm
      textAlign: "center", // Căn giữa chữ
      paddingVertical: 10, // Khoảng cách trên dưới
      paddingHorizontal: 20, // Khoảng cách trái phải
      borderRadius: 8, // Bo tròn góc
      overflow: "hidden", // Đảm bảo không bị tràn viền
      elevation: 3, // Tạo bóng trên Android
      shadowColor: "#000", // Màu bóng trên iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      width: 150, // Định rõ chiều rộng
      alignSelf: "center", // Căn giữa theo chiều ngang
      marginTop: 20, // Khoảng cách với phần tử phía trên
    },
    totalText: { fontSize: 18, fontWeight: "bold", color: "red", marginTop: 5 },
  });

export default OrderSummary;