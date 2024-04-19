import axios from "axios";

const baseURL = "http://localhost:5000/";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;
