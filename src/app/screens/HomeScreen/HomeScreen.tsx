import {
  View,
  Text,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import StatusBar from "@/components/StatusBar";
import { router } from "expo-router";
const HomeScreen = () => {
  const handlePress = () => {
    alert("Press button");
  };

  return (
    <View style={styles.homeScreen}>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/DescriptionCardScreen/DescriptionCardScreen")}
        >
          <Text>Go to DescriptionCard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("Detail")}
          onPress={() => router.navigate("/screens/DetailScreen/DetailScreen")}

        >
          <Text>Go to details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/AddressScreen/AddressScreen")}
        >
          <Text>Go to AddressScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/CartScreen/ShoppingCartScreen")}
        >
          <Text>Go to ShoppingCartScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/ShippingAddressScreen/ShippingAddressScreen")}
        >
          <Text>Go to shippingAddressScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/MyOrderScreen/MyOrderScreen")}
        >
          <Text>Go to MyOrderScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/WishListScreen/WishListScreen")}
        >
          <Text>Go to WishListScreen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/ChoseShipping/ChoseShipping")}
        >
          <Text>Go to ChoseShipping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/screens/Siderbar/DrawerNavigator")}
        >
          <Text>Go to Siderbar</Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar title="title status bar" handlePress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "gray",
    color: "white",
    borderRadius: 5,
  },
});

export default HomeScreen;
