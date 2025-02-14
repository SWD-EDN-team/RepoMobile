import React from "react";
import { View, Text, StyleSheet } from "react-native";

type OrderSummaryProps = {
    totalItems: number;
    totalPrice: number;
  };

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalItems, totalPrice }) => {
  return (
    <View style={styles.summaryContainer}>
      <View style={styles.row}>
        <Text>Items ({totalItems})</Text>
        <Text>đ̲ {totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text>Shipping</Text>
        <Text>đ̲ 3.00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>đ̲ {(totalPrice + 3).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  summaryContainer: { padding: 15, backgroundColor: "#fff", borderRadius: 10, elevation: 8, marginTop: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", paddingVertical: 5 },
  totalText: { fontSize: 18, fontWeight: "bold" },
});

export default OrderSummary;
