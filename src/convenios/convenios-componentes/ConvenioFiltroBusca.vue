<script setup>
import {computed, ref} from 'vue';
import { Icon } from '@iconify/vue';
import { InputText } from 'primevue';

const filtro = ref({
    proponente: null,
    convenente: null,
    responsaveis: null,
    objeto: null,
    numeroConvenio: null,
    numeroProcesso: null
});

const emit = defineEmits(['buscarConvenios', 'limparFiltros']);

const buscar = () => {
    emit('buscarConvenios', filtro.value);
};

const limpar = () => {
    filtro.value = {
        proponente: null,
        convenente: null,
        responsaveis: null,
        objeto: null,
        numeroConvenio: null,
        numeroProcesso: null
    };
    emit('limparFiltros');
};

// Função para lidar com o evento 'keydown'
const onEnter = (event) => {
    if (event.key === 'Enter') {
        buscar();
    }
};

const algumFiltroPreenchido = computed(() => {
    return Object.values(filtro.value).some(value => value !== null && value !== '');
});
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="lucide:building-2" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Proponente</label>
            </div>
            <InputText v-model="filtro.proponente" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="lucide:user" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Convenente</label>
            </div>
            <InputText v-model="filtro.convenente" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="tabler:users" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Responsáveis</label>
            </div>
            <InputText v-model="filtro.responsaveis" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="flowbite:file-pen-outline" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Objeto</label>
            </div>
            <InputText v-model="filtro.objeto" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Número do
                    Convênio</label>
            </div>
            <InputText v-model="filtro.numeroConvenio" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2"/>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Número do
                    Processo</label>
            </div>
            <InputText v-model="filtro.numeroProcesso" class="w-56 md:w-80 lg:w-10/12" @keydown="onEnter"/>
        </div>

        <div class="shadow-sm flex md:justify-end col-span-1 md:col-span-2 lg:col-span-3">
            <div class="flex justify-end">
                <button
                    v-if="algumFiltroPreenchido"
                    @click="limpar"
                    class="h-10 mr-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                        <Icon icon="jam:rubber" width="24" height="24" class="mr-2"/>
                    Limpar
                </button>
                <button @click="buscar"
                        class="h-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                    <Icon icon="material-symbols:search" width="24" height="24" class="mr-2"/>
                    Buscar
                </button>
            </div>
        </div>
    </div>
</template>