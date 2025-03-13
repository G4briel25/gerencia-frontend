<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { reactive, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import http from '@/services/http';
import useAuthStore from '@/services/authStore';
import {useRouter} from 'vue-router';

const router = useRouter();
const autStore = useAuthStore();
const user = reactive({
    username: null,
    password: null
});

const mensagemError = ref("");
const handleLogin = async () => {
    mensagemError.value = "";
    try {
        const response = await http.post('/auth/login', user);
        
        autStore.setToken(response.data.token);
        router.push({ name: 'dashboard' });

    } catch (error) {
        mensagemError.value = "Usuário ou senha inválidos";
        console.error(error?.response?.data);        
    }
};

</script>

<template>
    <FloatingConfigurator />
    <div class="bg-gray-50 dark:bg-neutral-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="bg-gray-50 w-full max-w-md p-8 space-y-8 dark:bg-neutral-900 rounded-lg shadow-2xl">
            <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="login" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Usuário</label>
                    <InputText id="usuario" v-model="user.username" class="w-full mt-1" required />
                </div>
                <div>
                    <label for="password"
                        class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                    <Password id="password" v-model="user.password" toggleMask class="w-full mt-1" required />
                </div>

                <p v-if="mensagemError" class="text-red-500 text-sm">
                    {{ mensagemError }}
                </p>

                <div>
                    <Button label="Login" type="submit" class="w-full" />
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>