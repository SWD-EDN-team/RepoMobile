import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.19:8081",
  timeout: 5 * 1000,
});

// Add a request interceptor
instance.interceptors.request.use(
  async function (config) {
    config.headers["delay"] = 3000;
    const access_token = await AsyncStorage.getItem("accessToken");
    config.headers["Authorization"] = `Bearer ${access_token}`;
    console.log("check accesstoken", access_token);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    debugger;
    console.log(">>>> run here");
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
