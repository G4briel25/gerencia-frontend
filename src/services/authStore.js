import {useRouter} from 'vue-router';
import { defineStore } from "pinia";


const router = useRouter();

const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem("token") || null,
    }),

    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem("token", token);
        },

        clearToken() {
            this.token = null;
            localStorage.removeItem("token");
            router.push({ name: "login" });
        }
    }
});

export default useAuthStore;
