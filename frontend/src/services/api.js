import axios from "axios";

const API = axios.create({
  baseURL: "https://industry-chatbot.onrender.com",
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