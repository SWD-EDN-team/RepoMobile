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
  const url = `${process.env.EXPO_PUBLIC_API_URL}/auth/getCurrentUser`;
  return axios.get(url);
};

export const resetPasswordApi = async (oldPassword: string, newPassword: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/auth/reset_password`;
  console.log("Reset Password URL:", url);

  try {
    const token = await AsyncStorage.getItem("access_token");
    if (!token) throw new Error("Không tìm thấy token đăng nhập.");

    const response = await axios.post(
      url,
      { oldPassword, newPassword },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Lỗi khi đổi mật khẩu.");
  }
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
