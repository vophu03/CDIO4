import axios from "axios";

// Use env for API base URL; fallback to local dev API
const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const axiosClient = axios.create({ baseURL });

// Optional: attach bearer token from localStorage
axiosClient.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  } catch {}
  return config;
});

export default axiosClient;

