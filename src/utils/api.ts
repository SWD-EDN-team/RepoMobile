import axios from "axios";
//http://localhost:8081/v1/api/users/
export const registerApi = (name: string, email: string, password: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/v1/api/users`;
  return axios.post<IBackendRes<any>>(url, { name, email, password });
};

export const verifyCodeApis = async (otp: string, email: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/v1/api/auth/verify_email`;
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
