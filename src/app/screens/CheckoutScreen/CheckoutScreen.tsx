import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import { fetchAddress } from "../../../utils/api";
import { Card } from "react-native-paper";
import { router } from "expo-router";

interface Address {
  _id: string;
  name: string;
  country: string;
  city: string;
  street: string;
  user: string;
}
export default function CheckoutScreen() {
  const { cartData } = useLocalSearchParams(); // Lấy dữ liệu từ URL params
  const products = cartData ? JSON.parse(cartData as string) : []; // Chuyển JSON về object
  const [address, setAddress] = useState<Address[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(address.length > 0 ? address[0] : null);
  useEffect(() => {
    const getAddress = async () => {
      try {
        const data = await fetchAddress();
        setAddress(data);
      } catch (error) {
        console.error("Không thể lấy địa chỉ:", error);
      }
    };

    getAddress();
  }, []);

  const handleSelectAddress = (addressItem: React.SetStateAction<Address | null>) => {
    setSelectedAddress(addressItem);
    setShowAll(false); // Ẩn danh sách sau khi chọn
  };
  
  return (
    <>
      <Stack.Screen options={{ title: "Thanh toán" }} />
      <View style={styles.container}>
        {address.length > 0 ? (
          <Card style={styles.card}>
            <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Card.Content>
              <Text style={styles.selectedAddressName}>
                {selectedAddress ? selectedAddress.name : "Chưa chọn địa chỉ"}
              </Text>
              <Text style={styles.selectedAddressDetails}>
                {selectedAddress
                  ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.country}`
                  : ""}
              </Text>
            </Card.Content>
            </TouchableOpacity>
  
            {showAll && (
              <View style={styles.fullList}>
                {address.map((item, index) => (
                  <TouchableOpacity 
                    key={index} 
                    onPress={() => handleSelectAddress(item)} 
                    style={styles.addressItem}
                  >
                    <Text style={selectedAddress?._id === item._id ? styles.selectedAddressName : styles.selectedAddressName}>
                      {item.name}
                    </Text>
                    <Text style={selectedAddress?._id === item._id ? styles.selectedAddress : styles.addressText}>
                      {item.country}, {item.city}, {item.street}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </Card>
        ) : (
          <View style={styles.container}>
            <Text>Không có địa chỉ nào</Text>
          </View>
        )}
  
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() =>
            router.navigate({
              pathname: "/screens/AddressScreen/AddressScreen",
            })
          }
        >
          <Text style={styles.addText}>+ Thêm địa chỉ</Text>
        </TouchableOpacity>
  
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.details}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}đ</Text>
                <Text style={styles.productInfo}>Màu sắc: {item.selectedColor}</Text>
                <Text style={styles.productInfo}>Kích thước: {item.selectedSize}</Text>
              </View>
              <Text style={styles.quantityTag}>x{item.quantity}</Text>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListFooterComponent={<OrderSummary products={products} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "red",
    marginVertical: 4,
  },
  productInfo: {
    fontSize: 14,
    color: "#555",
  },
  quantityTag: {
    position: "absolute",
    bottom: 8,
    right: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  addressContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  addressTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  fullList: {
    marginTop: 12,
  },
  addressText: {
    fontSize: 16,
    marginVertical: 4,
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
  },
  addText: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  addressItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  selectedAddress: {
    fontWeight: "bold",
    color: "blue",
  },
  selectedAddressName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  selectedAddressDetails: {
    fontSize: 14,
    color: "black",
    marginTop: 5,
  },
});