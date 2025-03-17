<script setup>
import { Icon } from '@iconify/vue';
import TelaDeCadastro from '@/components/convenios/TelaDeCadastro.vue';
import convenioServiceImpl from '@/services/convenioService';


const convenioService = convenioServiceImpl();

const novoConvenio = async () => {
    convenioService.cadastro.showModal = true;
};

</script>

<template>
    <header class="mt-2">
            <div class="py-4 border-b dark:border-b-neutral-400">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <Icon icon="bx:file" width="36" height="36" class="text-blue-700 dark:text-white" />
                        <h1 class="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Gestão de Convênios</h1>
                    </div>
                    <button
                        @click="novoConvenio"
                        class="inline-flex items-center p-2 gap-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <Icon icon="ic:baseline-plus" width="24" height="24" class="" />
                        Novo Convênio
                    </button>
                </div>
            </div>
        </header>

    <TelaDeCadastro></TelaDeCadastro>
</template>
