import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ActiveData = [
  {
    id: "1",
    name: "Brown Jacket",
    image: require("../../../assets/MyOrder/BrownJacket.jpg"),
    size: "XL",
    price: "$83.97",
  },
  {
    id: "2",
    name: "Brown Suite",
    image: require("../../../assets/MyOrder/BrownSuite.jpg"),
    size: "XL",
    price: "$120",
  },
  {
    id: "3",
    name: "Brown Jacket",
    image: require("../../../assets/MyOrder/BrownJacket.jpg"),
    size: "XL",
    price: "$83.97",
  },
  {
    id: "4",
    name: "Brown Suite",
    image: require("../../../assets/MyOrder/BrownSuite.jpg"),
    size: "XL",
    price: "$83.97",
  },
  {
    id: "5",
    name: "Brown Suite",
    image: require("../../../assets/MyOrder/BrownSuite.jpg"),
    size: "XL",
    price: "$83.97",
  },
  {
    id: "6",
    name: "Brown Suite",
    image: require("../../../assets/MyOrder/BrownSuite.jpg"),
    size: "XL",
    price: "$83.97",
  },
];

const MyOrderScreen = () => {
  const [activeTab, setActiveTab] = useState("Active");

  const translateX = useRef(new Animated.Value(0)).current;

  const handleTabPress = (tab: any, index: any) => {
    setActiveTab(tab);

    Animated.spring(translateX, {
      toValue: index * 111,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {["Active", "Completed", "Cancelled"].map((tab, index) => (
          <TouchableOpacity
            key={tab}
            activeOpacity={1}
            style={styles.headerButton}
            onPress={() => handleTabPress(tab, index)}
          >
            <Text
              style={[
                styles.headerText,
                activeTab === tab && styles.activeText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
        <Animated.View
          style={[styles.activeIndicator, { transform: [{ translateX }] }]}
        />
      </View>
      <View style={styles.orderList}>
        <FlatList
          data={ActiveData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <View style={styles.orderImage}>
                <Image style={styles.orderImage} source={item.image} />
              </View>
              <View style={styles.orderDetails}>
                <Text style={styles.orderName}>{item.name}</Text>
                <Text style={styles.orderSize}>Size: {item.size}</Text>
                <View style={styles.orderContainer}>
                  <Text style={styles.orderPrice}>{item.price}</Text>
                  <View style={styles.orderButton}>
                    {activeTab === "Active" && (
                      <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.buttonText}>Track Order</Text>
                      </TouchableOpacity>
                    )}
                    {activeTab === "Completed" && (
                      <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.buttonText}>Leave Review</Text>
                      </TouchableOpacity>
                    )}
                    {activeTab === "Cancelled" && (
                      <TouchableOpacity activeOpacity={1}>
                        <Text style={styles.buttonText}>Re-Order</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  headerButton: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 100,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#797979",
  },
  activeText: {
    color: "#795548",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 100,
    height: 4,
    backgroundColor: "#795548",
    borderRadius: 2,
  },
  orderList: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  orderItem: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
  },
  orderImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginEnd: 10,
  },
  orderDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
    opacity: 0.8,
  },
  orderSize: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
    opacity: 0.7,
  },
  orderPrice: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "bold",
  },
  orderContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderButton: {
    position: "absolute",
    bottom: -10,
    right: 0,
    backgroundColor: "#795548",
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default MyOrderScreen;
