<script setup>
import FloatingConfigurator from '@/components/FloatingConfigurator.vue';
import useAuthStore from "@/services/authStore";
import {useRouter} from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const goToCadastro = () => {
  console.log("Redirecionando para Cadastro...");
};

const goToTransparencia = () => {
  console.log("Redirecionando para Transparência...");
};

const logout = () => {
    console.log("Usuario deslogado");
    router.push({name: "login"})
    authStore.clearToken();
}
</script>

<template>
    <FloatingConfigurator />
    <div class=" flex items-center justify-center w-full h-screen">
        <div class="p-2 flex flex-col h-screen justify-around sm:gap-4 items-center md:flex-row lg:w-[58rem] md:h-auto">
            <div @click="goToCadastro" class="bg-gray-50 rounded-md shadow-2xl p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div>
                    <img src="../assets/imgs/cadastro.svg" class="w-52 h-52">
                    <div class="mt-2 text-center">
                        <h3 class="text-xl font-semibold text-neutral-800">Cadastro</h3>
                    </div>
                </div>
            </div>

            <div @click="goToTransparencia" class="bg-gray-50 rounded-md shadow-2xl p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div>
                    <img src="../assets/imgs/transparencia.svg" class="w-52 h-52">
                    <div class="mt-2 text-center">
                        <h3 class="text-xl font-semibold text-neutral-800">Transparência</h3>
                    </div>
                </div>
            </div>

            <div @click="logout" class="bg-gray-50 rounded-md shadow-2xl p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl">
                <div>
                    <img src="../assets/imgs/sair.svg" class="w-52 h-52">
                    <div class="mt-2 text-center">
                        <h3 class="text-xl font-semibold text-neutral-800">Sair</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
