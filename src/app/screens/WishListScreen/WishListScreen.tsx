import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Cart from "../../../components/Cart";

const wishlistData = [
  {
    id: "1",
    name: "Super Comfy Cream Denim Overall Shorts",
    price: "£23.00",
    image: require("../../../assets/img/Mask group.png"),
    size: "XL",
    rating: 5,
    reviews: 1278,
  },
  {
    id: "2",
    name: "Autumn Colour Relaxed Heavyweight T-Shirt",
    price: "£18.00",
    image: require("../../../assets/img/Frame 49.png"),
    size: "XXL",
    rating: 5,
    reviews: 1278,
  },
  {
    id: "3",
    name: "Relaxed-Fit Wool Checked Coat",
    price: "£45.00",
    image: require("../../../assets/img/Frame 54.png"),
    size: "L",
    rating: 4,
    reviews: 1278,
  },
  {
    id: "4",
    name: "Lovely Double Brown Leather Belt",
    price: "£15.00",
    image: require("../../../assets/img/Frame 39.png"),
    size: "L",
    rating: 5,
    reviews: 1278,
  },
  {
    id: "5",
    name: "Super Comfy Cream Denim Overall Shorts",
    price: "£23.00",
    image: require("../../../assets/img/Mask group.png"),
    size: "XL",
    rating: 5,
    reviews: 1278,
  },
  {
    id: "6",
    name: "Autumn Colour Relaxed Heavyweight T-Shirt",
    price: "£18.00",
    image: require("../../../assets/img/Frame 49.png"),
    size: "XXL",
    rating: 5,
    reviews: 1278,
  },
  {
    id: "7",
    name: "Relaxed-Fit Wool Checked Coat",
    price: "£45.00",
    image: require("../../../assets/img/Frame 54.png"),
    size: "L",
    rating: 4,
    reviews: 1278,
  },
  {
    id: "8",
    name: "Lovely Double Brown Leather Belt",
    price: "£15.00",
    image: require("../../../assets/img/Frame 39.png"),
    size: "L",
    rating: 5,
    reviews: 1278,
  },
];

const WishList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WishList({wishlistData.length})</Text>
      <FlatList
        data={wishlistData}
        contentContainerStyle={{ paddingBottom: 80 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Cart image={item.image} name={item.name} price={item.price} size={item.size} rating={item.rating} reviews={item.reviews}  />)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  header: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 19.6,
    color: "#483028",
    marginVertical: 30,
    marginLeft: 20,
  },
  wishList: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    elevation: 8,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginHorizontal: 20,
    paddingBottom: 70,
  },
  name: {
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 19.6,
    color: "#483028",
    flexWrap: "wrap",
    maxWidth: "70%",
    marginBottom: 10,
  },
  item: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    paddingLeft: 10,
  },
  size: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: "#1C1C1E",
    borderRadius: 50,
    marginRight: 20,
  },
  sizeText: {
    color: "#FFFFFF",
  },
  review: {
    color: "#483028",
    fontSize: 10,
    fontFamily: "Roboto",
    fontWeight: "500",
    marginVertical: 10,
    lineHeight: 14,
  },
  price: {
    color: "#1C1C1E",
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 22,
  },
  priceItem: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 100,
    height: "25%",
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 5,
  },
  buttonItem: {
    position: "absolute",
    bottom: 20,
    right: 0,
    flexDirection: "row",
  },
  button: {
    marginRight: 15,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#1C1C1E",
    fontSize: 12,
    lineHeight: 22,
    fontWeight: "600",
  },
});
export default WishList;