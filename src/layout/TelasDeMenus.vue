<script setup>
import useAuthStore from "@/services/authStore";
import {useRouter} from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const goToCadastro = () => {
  router.push({name: "convenio"});
};

const goToTransparencia = () => {
    window.open("https://www.google.com", "_blank");
};

const logout = () => {
    router.push({name: "login"})
    authStore.clearToken();
}
</script>

<template>
    <div class="mt-20 mb-6 md:mt-0 md:mb-0">
        <div class="py-2 px-4 flex items-center flex-col gap-10 h-full md:flex-row md:justify-around md:h-[50rem] md:gap-4">
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
