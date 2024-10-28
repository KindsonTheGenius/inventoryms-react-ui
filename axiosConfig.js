import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = import.meta.env.VITE_REACT_APP_API_TOKEN;

        if(token){
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance