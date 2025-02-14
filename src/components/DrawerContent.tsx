import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

// 📌 Component menu item với hiệu ứng khi nhấn
const MenuItem = ({ icon, label }: { icon: string; label: string }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <FontAwesome5 name={icon} size={20} color="#4F8EF7" />
    <Text style={styles.menuText}>{label}</Text>
  </TouchableOpacity>
);

const DrawerContent = (props : any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      {/* Hồ sơ người dùng */}
      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://i.pravatar.cc/150" }} style={styles.profileImage} />
        <Text style={styles.profileName}>Quandba</Text>
        <Text style={styles.profileEmail}>quandba@gmail.com</Text>
      </View>

      {/* Danh sách menu */}
      <View style={styles.menuContainer}>
        <MenuItem icon="list-alt" label="My Orders" />
        <MenuItem icon="user" label="My Profile" />
        <MenuItem icon="map-marker-alt" label="Delivery Address" />
        <MenuItem icon="credit-card" label="Payment Methods" />
        <MenuItem icon="envelope" label="Contact Us" />
        <MenuItem icon="cogs" label="Settings" />
        <MenuItem icon="question-circle" label="Helps & FAQs" />
      </View>

      {/* Nút Đăng xuất */}
      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.8}>
        <MaterialIcons name="power-settings-new" size={24} color="white" />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

// 📌 Style hiện đại hơn
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
    backgroundColor: "#4F8EF7",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "white",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 8,
  },
  profileEmail: {
    fontSize: 14,
    color: "#DCE4F7",
  },
  menuContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3, // Hiệu ứng đổ bóng trên Android
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: "#333",
    fontWeight: "500",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF5733",
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    elevation: 3,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default DrawerContent;
