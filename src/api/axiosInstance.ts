import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
