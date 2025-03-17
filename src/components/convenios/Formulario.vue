<script setup>
import { Icon } from '@iconify/vue';
import { DatePicker, InputText, Select } from 'primevue';

</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="lucide:building-2" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Proponente
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="lucide:user" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Convenente
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="tabler:users" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Responsáveis
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="flowbite:file-pen-outline" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Objeto
                </label>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Número do Convênio
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Número do Processo
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="tdesign:money" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Valor Total Original
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <InputText class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Situação
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione a situação"
                class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Convênio
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione o tipo"
                class="w-80 md:w-10/12" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Data Início
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <DatePicker v-model="date" dateFormat="dd/mm/yy" />
        </div>
        <div class="px-2">
            <div class="flex mb-1">
                <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Data Fim
                </label>
                <span class="text-red-500 ml-2">*</span>
            </div>
            <DatePicker v-model="date" dateFormat="dd/mm/yy" />
        </div>

        <div class="shadow-sm pt-4 flex justify-end items-end">
            <div class="flex justify-end">
                <button
                    class="h-10 mr-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <Icon icon="jam:rubber" width="24" height="24" class="mr-2" />
                    Limpar
                </button>
                <button
                    class="h-10 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Icon icon="material-symbols:search" width="24" height="24" class="mr-2" />
                    Buscar
                </button>
            </div>
        </div>
    </div>
</template>