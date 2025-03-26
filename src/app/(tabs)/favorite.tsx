import { deleteProductWishlist, getWishList } from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { 
  View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Alert 
} from "react-native";

// Định nghĩa interface cho item của wishlist
interface WishlistItem {
  _id: string;
  product_name: string;
  price: number;
  image: string[] | string;
}

// Cập nhật userId và apiUrl theo môi trường của bạn
const userId = "67e2a71925b67de9d104a50e";
const apiUrl = "http://172.16.11.177:8081";

const FavoritePage = () => {
  const [wishlist, setWishlist] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Hàm gọi API lấy danh sách wishlist cho user
  const fetProduct = async () => {
    try {
      const res = await getWishList();
      console.log("res",res);
      
      if (res && res.wishlists) {
        setWishlist(res.wishlists);
      } else {
        setError("No products found.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetProduct();
  }, []);

  if(!loading) console.log(wishlist);
  
  // Hàm xóa sản phẩm khỏi wishlist
  const removeFromWishlist = async (id: string) => {
    const token = await AsyncStorage.getItem("access_token");
    console.log("token delete: ",token);
    
    if (!token) {
      alert("Vui lòng đăng nhập!");
      return;
    }
    try{
  
      const response = await axios.delete(
        `http://192.168.175.1:8081/api/v1/wishlist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      
        alert("delete successfull")
        fetProduct()
      } catch (error:any) {
        alert("delete faile")
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách yêu thích</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ff6347" />
      ) : wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Chưa có sản phẩm yêu thích.</Text>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image 
                source={{ uri: `https://repo-node-5.onrender.com${item.product_id.image[0]}` }} 
                style={styles.itemImage} 
              />
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.product_id.product_name}</Text>
                <Text style={styles.itemPrice}>{item.product_id.price} đ</Text>
              </View>
              <TouchableOpacity 
                onPress={() => removeFromWishlist(item._id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeText}>Xóa</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  emptyText: { fontSize: 16, color: "gray", textAlign: "center", marginTop: 20 },
  itemContainer: { 
    flexDirection: "row", 
    alignItems: "center", 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: "#ddd" 
  },
  itemImage: { width: 50, height: 50, borderRadius: 8, marginRight: 10 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "gray" },
  removeButton: { backgroundColor: "red", padding: 6, borderRadius: 5 },
  removeText: { color: "#fff", fontWeight: "bold" },
});

export default FavoritePage;
