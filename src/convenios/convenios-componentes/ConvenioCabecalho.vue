<script setup>
import {Icon} from '@iconify/vue';
import ConvenioCadastro from '@/convenios/convenios-componentes/ConvenioCadastro.vue';
import convenioServiceImpl from '@/services/convenioService.js';
import {reactive} from "vue";


const convenioService = convenioServiceImpl();

const novoConvenio = async () => {
    convenioService.cadastro.showModal = true;
    convenioService.cadastro.objeto = reactive({...convenioService.objetoPadrao});
};

</script>

<template>
    <header class="mt-2">
        <div class="py-4 border-b dark:border-b-neutral-400">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <Icon icon="bx:file" width="36" height="36" class="hidden md:block text-blue-700 dark:text-white" />
                    <h1 class="ml-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Gestão de Convênios
                    </h1>
                </div>
                <button
                @click="novoConvenio"
                class="hidden sm:inline-flex items-center p-2 gap-1 border border-transparent text-xs md:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Icon icon="ic:baseline-plus" width="24" height="24" class="" />
                Novo Convênio
            </button>


<!--        Mobile-->
            <button
                @click="novoConvenio"
                class="inline-flex sm:hidden items-center p-1 gap-0 border border-transparent text-xs md:text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Icon icon="ic:baseline-plus" width="24" height="24" class="" />
            </button>
            </div>
        </div>
    </header>

    <ConvenioCadastro></ConvenioCadastro>
</template>
