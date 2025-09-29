import axios from "axios";

const API_URL =import.meta.env.VITE_API_URL;

export const assignProject = async (userId, name) => {
  const res = await axios.post(`${API_URL}/projects`, { userId, name });
  return res.data;
};
