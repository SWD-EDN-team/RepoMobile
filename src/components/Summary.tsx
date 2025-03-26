import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


type OrderSummaryProps = {
  totalItems: number;
  totalPrice: number;
};


const formatCurrency = (amount: number) => {
  return amount.toLocaleString("vi-VN") + "đ";
};

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalItems,
  totalPrice,
}) => {

  return (
    <View style={styles.summaryContainer}>
      <View style={styles.row}>
        <Text>Items ({totalItems})</Text>
        <Text>{formatCurrency(totalPrice)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>
          {formatCurrency(totalPrice)}
        </Text>
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
