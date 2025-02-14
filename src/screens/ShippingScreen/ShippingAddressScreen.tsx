import React, {useState} from "react";
import { View, Text, FlatList, StyleSheet} from "react-native";
import AddressCard from "../../components/AddressCard";
import StatusBar from "../../components/StatusBar";
interface Address {
  id: string;
  name: string;
  street: string;
}

const addresses: Address[] = [
    { id: "1", name: "Home", street: "1901 Thornridge Cir. Shiloh, Hawaii 81063" },
    { id: "2", name: "Office", street: "4517 Washington Ave. Manchester, Kentucky 39495" },
    { id: "3", name: "Parent’s House", street: "8502 Preston Rd. Inglewood, Maine 98380" },
    { id: "4", name: "Friend’s House", street: "2464 Royal Ln. Mesa, New Jersey 45463" },
    { id: "5", name: "Friend’s House", street: "2464 Royal Ln. Mesa, New Jersey 45463" },
    { id: "6", name: "Friend’s House", street: "2464 Royal Ln. Mesa, New Jersey 45463" },
    { id: "7", name: "Friend’s House", street: "2464 Royal Ln. Mesa, New Jersey 45463" },
  ];


const ShippingAddressScreen = () => {
  const handleEdit = (id: string) => {
    console.log("Chỉnh sửa địa chỉ:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Xóa địa chỉ:", id);
  };


  const [selectedId, setSelectedId] = useState<string>("1")

  const handleSelect = (id: string) => {
    console.log("Chọn địa chỉ:", id);
    setSelectedId(id);
  };

  const handleStatusBarPress = () => {
    alert("Bạn vừa bấm vào StatusBar!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shipping Address</Text>
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AddressCard 
            data={item}
            selectedId={selectedId}
            onSelect={handleSelect}
            onEdit={() => handleEdit(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />
      <StatusBar title="Apply" handlePress={handleStatusBarPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    padding:10
  }
});

export default ShippingAddressScreen;
