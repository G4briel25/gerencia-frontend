import { defineStore } from "pinia";

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
        }
    }
});

export default useAuthStore;
