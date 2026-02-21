import axios from "axios";

const API = axios.create({
  baseURL: "https://mcjellyfish-fashion-ai-backend.hf.space/analyze"
});

export const analyzeImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("file", imageFile);

  const response = await API.post("/analyze", formData);
  return response.data;
};
