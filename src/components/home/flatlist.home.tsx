import * as React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

interface PizzaItem {
  id: number;
  title: string;
  size: string;
  rating: string;
  price: number;
  img: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  itemImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 20,
    // marginVertical: 10,
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemSize: {
    fontSize: 14,
    color: "#666",
    marginVertical: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  itemRating: {
    fontSize: 14,
    color: "#ff9500",
    marginTop: 5,
  },
});

const FlatlistHome = () => {
  const data: PizzaItem[] = [
    {
      id: 1,
      title: "Margretta Pizza",
      size: "Medium",
      rating: "4.5",
      price: 300,
      img: "https://t3.ftcdn.net/jpg/01/33/61/72/360_F_133617244_dWdivRXwoLVzowl1kn3iFP9JGcuNd8n6.jpg",
    },
    {
      id: 2,
      title: "Chicken Blast Pizza",
      size: "Medium",
      rating: "5.0",
      price: 500,
      img: "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=612x612&w=0&k=20&c=ahj3y6ktAvzcINubn0a0BfvovLTGDx_J_aMju4szqVQ=",
    },
    {
      id: 3,
      title: "Mushroom Pizza",
      size: "Large",
      rating: "4.0",
      price: 700,
      img: "https://media.istockphoto.com/id/1406515367/photo/pizza-with-chicken-and-mushrooms-with-cheese-top-view-on-dark-stone-table.jpg?s=612x612&w=0&k=20&c=URu6Cie6-ImCbzXoZ7IyJT4Y5ELRgPvkdalFR5H-vKQ=",
    },
    {
      id: 4,
      title: "Chicken Blast Pizza",
      size: "Medium",
      rating: "5.0",
      price: 500,
      img: "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=612x612&w=0&k=20&c=ahj3y6ktAvzcINubn0a0BfvovLTGDx_J_aMju4szqVQ=",
    },
    {
      id: 5,
      title: "Chicken Blast Pizza",
      size: "Medium",
      rating: "5.0",
      price: 500,
      img: "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=612x612&w=0&k=20&c=ahj3y6ktAvzcINubn0a0BfvovLTGDx_J_aMju4szqVQ=",
    },
    {
      id: 6,
      title: "Chicken Blast Pizza",
      size: "Medium",
      rating: "5.0",
      price: 500,
      img: "https://media.istockphoto.com/id/1043604390/photo/butter-chicken-pizza.jpg?s=612x612&w=0&k=20&c=ahj3y6ktAvzcINubn0a0BfvovLTGDx_J_aMju4szqVQ=",
    },
  ];

  const renderItem = ({ item }: { item: PizzaItem }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSize}>Size: {item.size}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
        <Text style={styles.itemRating}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

export default FlatlistHome;
