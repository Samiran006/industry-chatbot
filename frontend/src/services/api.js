import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const sendMessage = async (message) => {
  const response = await API.get("/chat", {
    params: {
      query: message,
    },
  });

  console.log("API Response:", response.data);

  return response.data.answer;
};