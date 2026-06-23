import axios from "axios";

const API_URL = "https://industry-chatbot.onrender.com";

export const ingestWebsite = async (url) => {
  const response = await axios.post(
    `${API_URL}/ingest-website`,
    null,
    {
      params: { url }
    }
  );

  return response.data;
};