import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import React from "react";
import { View, Image, Text, StyleSheet, Button, Pressable } from "react-native";
import { FlatList } from "react-native-gesture-handler";

interface Props {
  name: string;
  description: string;
  imageRef: string;
}
interface StoreItem {
  key: number;
  image: string;
  name: string;
}

const data = [
  [
    {
      key: 1,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.L8XNPW4wPTRvcUKvWuAYQQHaHa&pid=Api",
      name: "cửa hàng2 1 hello chơi da bong khong aenh",
    },
    {
      key: 2,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.Qh5FSZfdBmJYFHR0CQ6s3wHaHa&pid=Api",
      name: "Item 2",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4rzbEYQq7bZkf6iud3EFJSpRs1HVSwBo9w&s",
      name: "Item 3",
    },
  ],
  [
    {
      key: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4rzbEYQq7bZkf6iud3EFJSpRs1HVSwBo9w&s",
      name: "Item 4",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4rzbEYQq7bZkf6iud3EFJSpRs1HVSwBo9w&s",
      name: "Item 5",
    },
    {
      key: 6,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.L8XNPW4wPTRvcUKvWuAYQQHaHa&pid=Api",
      name: "Item 6",
    },
  ],
];

const CollectionHome = ({ name, description, imageRef }: Props) => {
  return (
    <>
      <View style={{ height: 8, backgroundColor: "#e9e9e9" }}></View>
      <View style={styles.itemContainer}>
        <View
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            gap: 80,
            paddingHorizontal: 6,
          }}
        >
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{name}</Text>
            <Text
              style={styles.itemDescription}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {description}
            </Text>
          </View>
          <Text style={{ color: "#5a5a5a" }}>Xem tất cả</Text>
        </View>

        {data.map((group, index) => (
          <FlatList
            key={index}
            data={group}
            renderItem={({ item }) => (
              <Pressable
                onPress={() =>
                  router.navigate({
                    pathname: "/product/[id]",
                    params: { id: item.key },
                  })
                }
              >
                <View style={styles.storeItem}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                  />
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={styles.storeName}
                  >
                    {item.name}
                  </Text>
                  <View style={styles.sale}>
                    <Text style={{ color: APP_COLOR.ORANGE }}>Flash Sell</Text>
                  </View>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.key.toString()}
            numColumns={3} // Hiển thị 3 item trên mỗi hàng
            showsHorizontalScrollIndicator={false}
            style={styles.list}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 5,
  },
  itemDetails: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 5,
    paddingHorizontal: 6,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: APP_COLOR.ORANGE,
  },
  itemDescription: {
    fontSize: 14,
    color: "#5a5a5a",
    marginTop: 5,
    textAlign: "center",
  },
  list: {
    marginTop: 10,
  },
  storeItem: {
    backgroundColor: "#efefef",
    marginRight: 10,
    padding: 3,
    borderRadius: 5,
    alignItems: "center",
  },
  storeName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    maxWidth: 130,
  },
  sale: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: APP_COLOR.ORANGE,
    padding: 3,
    borderRadius: 3,
    alignSelf: "flex-start",
  },
});

export default CollectionHome;
