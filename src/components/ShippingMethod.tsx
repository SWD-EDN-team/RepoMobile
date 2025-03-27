import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const shippingOptions = [
  { id: 1, name: "Giao hàng tiết kiệm", price: 15000 },
  { id: 2, name: "Giao hàng nhanh", price: 30000 },
  { id: 3, name: "Hỏa tốc", price: 50000 },
];

const ShippingMethod = ({ onSelect }: { onSelect: (method: any) => void }) => {
  const [selectedMethod, setSelectedMethod] = useState(shippingOptions[0]);

  const handleSelect = (method: any) => {
    setSelectedMethod(method);
    onSelect(method);
  };

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Chọn phương thức giao hàng:</Text>
      {shippingOptions.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
            padding: 10,
            borderWidth: selectedMethod.id === method.id ? 2 : 1,
            borderColor: selectedMethod.id === method.id ? "blue" : "gray",
            borderRadius: 5,
          }}
          onPress={() => handleSelect(method)}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "blue",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            {selectedMethod.id === method.id && <View style={{ width: 12, height: 12, backgroundColor: "blue", borderRadius: 6 }} />}
          </View>
          <Text style={{ fontSize: 16 }}>{method.name} - {method.price.toLocaleString("vi-VN")}đ</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ShippingMethod;
