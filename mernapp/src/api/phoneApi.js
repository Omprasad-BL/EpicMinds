import axios from "axios";

const API_URL =import.meta.env.VITE_API_URL;

export const assignAdditionalPhone = async (userId, phoneNumber) => {
  const res = await axios.post(`${API_URL}/phones`, { userId, phoneNumber });
  return res.data;
};
