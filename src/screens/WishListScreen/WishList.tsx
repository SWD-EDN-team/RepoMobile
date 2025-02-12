import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../types/NavigationTypes";
import wishlistData from "../../../data/wishlistData";

const WishList: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "SignIn">;
}> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>WishList({wishlistData.length})</Text>
      <FlatList
        data={wishlistData}
        contentContainerStyle={{ paddingBottom: 80 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.wishList}>
            <View style={{ marginBottom: 10 }}>
              <Image
                source={item.image}
                style={[{ width: 120, height: 120 }, { borderRadius: 10 }]}
              />
            </View>
            <View style={styles.item}>
              <View>
                <Text style={styles.name} numberOfLines={2}>
                  {item.name}
                </Text>
                <Text>{"⭐️".repeat(item.rating)}</Text>
                <Text style={styles.review}>({item.reviews} reviews)</Text>
                <View style={styles.priceItem}>
                  <Text style={styles.price} numberOfLines={1}>
                    {item.price}
                  </Text>
                </View>
              </View>
              <View style={styles.size}>
                <Text style={styles.sizeText}>{item.size}</Text>
              </View>
            </View>
            <View style={styles.buttonItem}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
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
