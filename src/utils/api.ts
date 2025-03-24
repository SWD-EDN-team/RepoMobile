import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const registerApi = (name: string, email: string, password: string) => {
  const url = `http://localhost:8081/api/v1/users/`;
  console.log("url", url);
  console.log("email", email, "name", name, "password", password);

  return axios.post(url, { name, email, password });
};

export const loginApi = (email: string, password: string) => {
  const url = `http://localhost:8081/api/v1/auth/auth/signin`;
  console.log("url", url);
  console.log("email", email, "password", password);
  console.log("??", axios.post(url, { email, password }));

  return axios.post(url, { email, password });
};

export const verifyCodeApis = async (otp: string, email: string) => {
  const url = `http://localhost:8081/v1/api/auth/verify_code`;
  console.log("Verifying ", url);
  try {
    const response = await axios.post<IBackendRes<any>>(
      url,
      { otp, email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw new Error("Failed to verify OTP. Please try again.");
  }
};

export const getProductList = async () => {}

export const printAsyncStorage = () => {
  AsyncStorage.getAllKeys((err, keys) => {
    AsyncStorage.multiGet(keys!, (error, stores) => {
      let asyncStorage: any = {};
      stores?.map((result, i, store) => {
        asyncStorage[store[i][0]] = store[i][1];
      });
      console.log(JSON.stringify(asyncStorage, null, 2));
    });
  });
};
