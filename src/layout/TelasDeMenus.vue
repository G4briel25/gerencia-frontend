<script setup>
import useAuthStore from "@/services/authStore";
import {useRouter} from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const goToCadastro = () => {
  console.log("Redirecionando para Cadastro...");
  router.push({name: "convenio"});
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
    <div>
        <div class="p-2 flex items-center flex-col gap-4 h-full md:flex-row md:justify-around md:h-screen">
            <div @click="goToCadastro" class="bg-blue-400 rounded-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105">
                <div>
                    <img src="../assets/imgs/cadastro.svg" class="w-52 h-52">
                    <div class="mt-2 text-center">
                        <h3 class="text-xl font-semibold text-neutral-800">Cadastro</h3>
                    </div>
                </div>
            </div>

            <div @click="goToTransparencia" class="bg-blue-400 rounded-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105">
                <div>
                    <img src="../assets/imgs/transparencia.svg" class="w-52 h-52">
                    <div class="mt-2 text-center">
                        <h3 class="text-xl font-semibold text-neutral-800">Transparência</h3>
                    </div>
                </div>
            </div>

            <div @click="logout" class="bg-blue-400 rounded-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] p-4 md:p-8 cursor-pointer transition-transform transform hover:scale-105">
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
