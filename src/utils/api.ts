import axios from "axios";

export const registerApi = (name: string, email: string, password: string) => {
  const url = `${process.env.EXPO_PUBLIC_API_URL}/v1/api/users`;
  return axios.post(url, { name, email, password });
};
