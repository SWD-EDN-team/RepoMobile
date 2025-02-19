import axios from "axios";

export const registerApi = (name: string, email: string, password: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/v1/api/users`;
  console.log("url", url);
  console.log("email", email, "name", name, "password", password);

  return axios.post(url, { name, email, password });
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
