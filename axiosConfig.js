import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,  // Set base URL here
  // You can also add default headers here
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const username = import.meta.env.VITE_REACT_APP_API_USERNAME;
    const password = import.meta.env.VITE_REACT_APP_API_PASSWORD;
    if (username && password) {
      config.auth = {
        username: username,
        password: password
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
