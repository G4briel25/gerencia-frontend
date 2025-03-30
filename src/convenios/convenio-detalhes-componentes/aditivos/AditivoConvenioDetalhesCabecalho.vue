<script setup>
import {Icon} from '@iconify/vue';
import {computed, defineProps} from 'vue';

const props = defineProps(['aditivoId', 'aditivoConvenioService', 'listaLancamentoAditivo']);

const excluirAditivo = (aditivoId) => {
    console.log(aditivoId)
};

const isValid = computed(() => {
    return props.listaLancamentoAditivo && props.listaLancamentoAditivo.length > 0;
});

</script>

<template>
    <header class="mt-2">
        <div class="py-4 border-b dark:border-b-neutral-400">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <Icon icon="bx:file" width="36" height="36" class="hidden md:block text-blue-700 dark:text-white" />
                    <h1 class="ml-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Detalhes do Aditivo
                    </h1>
                </div>
                <button
                    :disabled="isValid"
                    @click="excluirAditivo(aditivoId)"
                    v-tooltip.left="isValid ? 'Para excluir este aditivo, deve limpar todos os lançamentos' : 'Excluir Aditivo'"
                    class="p-2 gap-0 border border-transparent rounded-md shadow-sm
                        text-white bg-red-500 hover:bg-red-600
                         focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-red-500
                        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                >
                    <Icon icon="iconamoon:trash" width="24" height="24"/>
                </button>
            </div>
        </div>
    </header>
</template>
