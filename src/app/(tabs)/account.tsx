import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/types/NavigationTypes";
import { useRouter } from "expo-router";

const API_URL = "https://repo-node-5.onrender.com/api/v1/auth/getCurrentUser";

const AccountPage: React.FC<{
  navigation: StackNavigationProp<RootStackParamList, "Account">;
}> = ({ navigation }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem("access_token");
        if (!token) throw new Error("No token provided");

        const response = await axios.get(API_URL, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(response.data.user);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleGoChangeProfile = () => {
    router.push("/screens/changeProfile/changeProfile");
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("access_token");
      router.replace("/auths/login");
    } catch (err) {
      console.error("Lỗi khi đăng xuất:", err);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text style={{ marginTop: 10 }}>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Lỗi: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Feather name="arrow-left" size={26} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>My Profile</Text>

      <View style={styles.profileContainer}>
        <Image source={{ uri: userData?.avatar || "../../assets/auth/avatarProfile.jpg" }} style={styles.avatar} />
        <Text style={styles.profileName}>{userData?.name || "Chưa có tên"}</Text>
        <Text style={styles.profileEmail}>{userData?.email || "Chưa có email"}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Feather name="user" size={22} color="#666" />
          <Text style={styles.infoText}>Name: {userData?.name || "N/A"}</Text>
        </View>
        <View style={styles.infoRow}>
          <Feather name="mail" size={22} color="#666" />
          <Text style={styles.infoText}>Email: {userData?.email || "N/A"}</Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="work" size={22} color="#666" />
          <Text style={styles.infoText}>Role: {userData?.role || "Người dùng"}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={handleGoChangeProfile}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc", 
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    marginTop: 50,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: "black",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#black",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: "#858585",
  },
  infoContainer: {
    backgroundColor: "#1B263B",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#ccc",
    marginLeft: 10,
  },
  editButton: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: "#FF4B2B",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

});

export default AccountPage;
