import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8080`,
  validateStatus: (status: number) => status <= 509
});

export interface ApiError {
  code?: string;
  devMessage?: string;
  userMessage: string; 
}

export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
}

export default api;
