import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");
type Product = {
  id: number;
  name: string;
  price: number;
  reviews: number;
  image: any;
  quantity: number;
};

type ProductCardProps = {
  item: Product;
  updateQuantity: (id: number, change: number) => void;
  removeItem: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  item,
  updateQuantity,
  removeItem,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, -1)}
            style={styles.button}
          >
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 1)}
            style={styles.button}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.info}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.reviews}>⭐ {item.reviews} reviews</Text>
        <Text style={styles.price}>₫ {item.price.toFixed(2)}</Text>

        {/* Nút lưu và xóa */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.saveButton}>
            <Text>Save for later</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => removeItem(item.id)}
            style={styles.removeButton}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>

        {/* Tổng giá */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Qty ({item.quantity}) :</Text>
          <Text style={styles.totalText}>
            ₫ {(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginBottom: 20,
    elevation: 9,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: width * 0.3,
    height: height * 0.19,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  info: { flex: 1 },

  title: { fontSize: 20, fontWeight: "bold" },
  reviews: { fontSize: 12, color: "gray" },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "15%",
    marginBottom: 5,
  },
  controls: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  button: { padding: 5, borderWidth: 1, borderRadius: 5, marginHorizontal: 5 },
  quantity: { fontSize: 16 },
  actions: { flexDirection: "row", justifyContent: "space-between" },
  saveButton: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 5,
    marginEnd: "10%",
  },
  removeButton: { backgroundColor: "#f0f0f0", padding: 15, borderRadius: 5 },
  totalContainer: {
    marginTop: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ProductCard;
