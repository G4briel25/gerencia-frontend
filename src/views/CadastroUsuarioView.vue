<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import http from '@/services/http.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const newUser = ref({
    nome: null,
    login: null,
    email: null,
    senha: null,
    confirmSenha: null,
});

const mensagemSucesso = ref("");
const mensagemError = ref("");

const handleCadastro = async () => {
    mensagemError.value = "";
    mensagemSucesso.value = "";

    if (newUser.value.senha !== newUser.value.confirmSenha) {
        mensagemError.value = "As senhas não coincidem.";
        return;
    }

    try {
        const response = await http.post('/api/usuario', {
            nome: newUser.value.nome,
            login: newUser.value.login,
            email: newUser.value.email,
            senha: newUser.value.senha,
        });

        mensagemSucesso.value = "Usuário cadastrado com sucesso!";

        setTimeout(() => {
            router.push({ name: 'login' });
        }, 2500);

    } catch (error) {
        mensagemError.value = "Erro ao cadastrar usuário.";
        if (error?.response?.data?.message) {
            mensagemError.value = error.response.data.message;
        }
    }
};

</script>

<template>
    <FloatingConfigurator class="fixed flex gap-4 top-8 right-8" />
    <div
        class="bg-gray-50 dark:bg-neutral-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="bg-gray-50 w-full max-w-md p-8 space-y-8 dark:bg-neutral-900 rounded-lg shadow-2xl dark:shadow-none">

            <div v-if="mensagemSucesso" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                {{ mensagemSucesso }}
            </div>

            <div v-if="mensagemError" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                {{ mensagemError }}
            </div>

            <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-white">Cadastro de Usuário</h2>
            <form @submit.prevent="handleCadastro" class="space-y-6">
                <div>
                    <label for="nome"
                           class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome</label>
                    <InputText id="nome" v-model="newUser.nome" class="w-full mt-1" required />
                </div>
                <div>
                    <label for="login"
                           class="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome de Usuário (login)</label>
                    <InputText id="login" v-model="newUser.login" class="w-full mt-1" required />
                </div>
                <div>
                    <label for="email"
                           class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <InputText id="email" v-model="newUser.email" type="email" class="w-full mt-1" required />
                </div>
                <div>
                    <label for="senha"
                           class="block text-sm font-medium text-gray-700 dark:text-gray-300">Senha</label>
                    <Password id="senha" v-model="newUser.senha" :feedback="false" toggleMask class="w-full mt-1" required />
                </div>
                <div>
                    <label for="confirmSenha"
                           class="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirmar Senha</label>
                    <Password id="confirmSenha" v-model="newUser.confirmSenha" :feedback="false" toggleMask class="w-full mt-1" required />
                </div>
                <div>
                    <Button label="Cadastrar" type="submit" class="w-full" />
                </div>
                <p class="text-center text-gray-600 dark:text-gray-400 text-sm">
                    Já tem uma conta? <router-link :to="{ name: 'login' }" class="text-blue-500 hover:underline">Faça login</router-link>
                </p>
            </form>
        </div>
    </div>
</template>