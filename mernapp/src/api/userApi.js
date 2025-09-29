import axios from "axios";

const API_URL =import.meta.env.VITE_API_URL;


export const loginUser = async (email, password) => {
  const dataToSend = {}; // Currently empty — you can add data here if needed

  console.log('Sending data to backend:', dataToSend);

  const res = await axios.post(`${API_URL}/users`, dataToSend);

  const user = res.data.find(u => u.email === email && u.password === password);
  return user || null;
};


export const getAllUsers = async () => {
  const res = await axios.get(`${API_URL}/users`);
  return res.data;
};
