import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const registerApi = (name: string, email: string, password: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/users/`;
  console.log("url", url);
  console.log("email", email, "name", name, "password", password);

  return axios.post(url, { name, email, password });
};

export const loginApi = (
  email: string,
  password: string,
  p0: { headers: { "Content-Type": string } }
) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/auth/signin`;
  console.log("url", url);
  console.log("email", email, "password", password);
  console.log("??", axios.post(url, { email, password }));

  return axios.post(url, { email, password });
};

export const verifyCodeApis = async (otp: string, email: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/auth/verify_email`;
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

export const getAccountApi = () => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/auth/auth/getCurrentUser`;
  return axios.get(url);
};

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


export const getWishList =  async () => {
  try{
    const token = await AsyncStorage.getItem("access_token");
    console.log("tokennn: ",token);
    
    if (!token) {
      alert("Vui lòng đăng nhập!");
      return;
    }

    const response = await axios.get(
      "http://192.168.175.1:8081/api/v1/wishlist",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Thêm vào wishlist thành công:", response.data);
    return response.data;
    } catch (error:any) {
      return error
    }
};


export const deleteProductWishlist =  async (id:string) => {
  try{
    const token = await AsyncStorage.getItem("access_token");
    console.log("tokennn: ",token);
    
    if (!token) {
      alert("Vui lòng đăng nhập!");
      return;
    }

    const response = await axios.get(
      `http://192.168.175.1:8081/api/v1/wishlist/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
    } catch (error:any) {
      return error
    }
};


