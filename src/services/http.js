import axios from "axios";
import useAuthStore from "@/services/authStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const axiosInstance = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
        "Content-type": "application/json"
    }
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            authStore.clearToken();
            router.push({ name: "login" });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;