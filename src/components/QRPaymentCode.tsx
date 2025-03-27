import React from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";

// Định nghĩa kiểu dữ liệu cho props
interface PaymentQRCodeProps {
  paymentUrl: string;
}

const PaymentQRCode: React.FC<PaymentQRCodeProps> = ({ paymentUrl }) => {
  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <QRCode value={paymentUrl} size={200} />
    </View>
  );
};

export default PaymentQRCode;