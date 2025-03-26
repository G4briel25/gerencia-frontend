<script setup>
import {Icon} from '@iconify/vue';
import convenioServiceImpl from '@/services/convenioService.js';
import {defineProps} from 'vue';
import {Button} from 'primevue';

const props = defineProps(['convenioId']);
const convenioService = convenioServiceImpl();

const excluirConvenio = (convenioId) => {

};

</script>

<template>
    <header class="mt-2">
        <div class="py-4 border-b dark:border-b-neutral-400">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <Icon icon="bx:file" width="36" height="36" class="hidden md:block text-blue-700 dark:text-white" />
                    <h1 class="ml-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Detalhes do Convênio
                    </h1>
                </div>
                <button
                    @click="excluirConvenio(convenioId)" v-tooltip.left="'Excluir'"
                    class="p-2 gap-0 border border-transparent rounded-md shadow-sm
                        text-white bg-red-500 hover:bg-red-600
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-red-500
                    ">
                    <Icon icon="iconamoon:trash" width="24" height="24" />
                </button>
            </div>
        </div>
    </header>
</template>
