import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://repo-node-5.onrender.com/api/v1",
  timeout: 5 * 1000,
});


instance.interceptors.request.use(async (config) => {
  const access_token = await AsyncStorage.getItem("userToken");

  if (!access_token) {
    console.warn("⚠️ Không tìm thấy accessToken trong AsyncStorage!");
    return config;
  }

  config.headers.Authorization = `Bearer ${access_token}`;
  console.log("Headers được gửi:", config.headers.Authorization);

  return config;
});
export default instance;
