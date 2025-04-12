<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import http from '@/services/http.js';
import useAuthStore from '@/services/authStore.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const autStore = useAuthStore();
const user = ref({
    username: null,
    password: null
});

const mensagemError = ref("");
const handleLogin = async () => {
    try {
        const response = await http.post('/auth/login', user.value);

        autStore.setToken(response.data.token);
        await router.push({ name: 'dashboard' });

    } catch (error) {
        mensagemError.value = "Usuário ou senha inválidos!";
    }
};

</script>

<template>
    <FloatingConfigurator class="fixed flex gap-4 top-8 right-8" />
    <div
        class="bg-gray-50 dark:bg-neutral-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="bg-gray-50 w-full max-w-md p-8 space-y-8 dark:bg-neutral-900 rounded-lg shadow-2xl dark:shadow-none">

            <div v-if="mensagemError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                 role="alert">
                {{ mensagemError }}
            </div>

            <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Login</h2>
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="login" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome de Usuário</label>
                    <InputText id="usuario" v-model="user.username" class="w-full mt-1" required />
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                    <Password id="password" v-model="user.password" :feedback="false" toggleMask class="w-full mt-1"
                              required />
                </div>
                <div>
                    <Button label="Login" type="submit" class="w-full" />
                </div>
            </form>
            <div class="text-center mt-4">
                <router-link :to="{ name: 'cadastro-usuario' }" class="text-blue-500 hover:underline">Não tem uma conta? Cadastre-se</router-link>
            </div>
        </div>
    </div>
</template>
