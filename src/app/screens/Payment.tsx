import React from "react";
import { View, Text } from "react-native";
import PaymentQRCode from "@/components/QRPaymentCode";
import { Stack, useLocalSearchParams } from "expo-router";

const PaymentScreen = () => {
  const { total } = useLocalSearchParams();
  const totalAmount = Number(total) || 0;
  
  const paymentUrl = `zalopay://payment?${totalAmount}&description=ThanhToanQR`;


    return (
      <>
      <Stack.Screen options={{ title: "Thanh toán" }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 20 }}>
          Quét mã QR để thanh toán
        </Text>
        <PaymentQRCode paymentUrl={paymentUrl} />
      </View>
      </>
    );
  };
  
  export default PaymentScreen;