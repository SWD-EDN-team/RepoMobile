import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API_RESET_PASSWORD = "http://172.16.11.25:8081/api/v1/auth/reset_password";

const ChangePasswordScreen = () => {
  const navigation = useNavigation();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async () => {
    console.log(oldPassword, newPassword, confirmNewPassword);
    
    if (!oldPassword.trim() || !newPassword.trim() || !confirmNewPassword.trim()) {
      alert("Lỗi Vui lòng điền đầy đủ thông tin.");
    }

    if (newPassword !== confirmNewPassword) {
      alert("Lỗi Mật khẩu mới không khớp.");
    }

    if (newPassword.length < 6) {
      alert("Lỗi Mật khẩu mới phải có ít nhất 6 ký tự.");
    }

    // setLoading(true);
    const token = await AsyncStorage.getItem("access_token");
    if (!token) throw new Error("Không tìm thấy token đăng nhập.");
console.log(token);
    try {

      const response = await axios.post(
        API_RESET_PASSWORD,
        { oldPassword, newPassword, confirmNewPassword},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data)
      if (response.status === 200) {
        Alert.alert("Thành công", "Mật khẩu đã được đổi thành công!", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      } else {
        throw new Error(response.data?.message || "Đổi mật khẩu thất bại.");
      }
    } catch (error) {
      alert("Lỗi");
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <Text style={styles.label}>Old Password:</Text>
      <TextInput
        style={styles.input}
        value={oldPassword}
        onChangeText={setOldPassword}
        placeholder="Enter old password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <Text style={styles.label}>New Password:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Enter new password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <Text style={styles.label}>Confirm New Password:</Text>
      <TextInput
        style={styles.input}
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        placeholder="Re-enter new password"
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      {/* {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : ( */}
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#007AFF",
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginTop: 10,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ChangePasswordScreen;
