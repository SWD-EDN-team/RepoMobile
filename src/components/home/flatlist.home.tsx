import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CollectionHome from "./collection.home";

interface ClothingItem {
  id: number;
  name: string;
  description: string;
  imageRef: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  itemContainer: {
    // flex: 1,
    width: "100%",
    // flexDirection: "column",
    // padding: 10,
    // margin: 10,
    // borderRadius: 10,
    // alignItems: "center",
  },
  itemImage: {
    // width: 120,
    // height: 100,
    // borderRadius: 10,
  },
  itemDetails: {
    // alignItems: "center",
    // marginTop: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    // textAlign: "center",
  },
  itemDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});

const FlatListHome = () => {
  const data: ClothingItem[] = [
    {
      id: 1,
      name: "Áo thun basic",
      description: "Chất liệu cotton, form rộng, giá 150K",
      imageRef:
        "https://tse2.mm.bing.net/th?id=OIP.L8XNPW4wPTRvcUKvWuAYQQHaHa&pid=Api",
    },
    {
      id: 2,
      name: "Quần jean nam",
      description: "Ống suông, chất liệu denim, giá 400K",
      imageRef:
        "https://tse1.mm.bing.net/th?id=OIP.Qh5FSZfdBmJYFHR0CQ6s3wHaHa&pid=Api",
    },
    {
      id: 3,
      name: "Áo sơ mi caro",
      description: "Chất vải linen thoáng mát, giá 250K",
      imageRef:
        "https://tse4.mm.bing.net/th?id=OIP.4zbuzQvywRzHcrONnpFC7gHaHa&pid=Api",
    },
  ];

  const renderItem = ({ item }: { item: ClothingItem }) => (
    <CollectionHome
      name={item.name}
      description={item.description}
      imageRef={item.imageRef}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%" }}
        numColumns={1}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        // columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default FlatListHome;