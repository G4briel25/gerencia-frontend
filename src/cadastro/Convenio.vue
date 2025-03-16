<script setup>
import { Icon } from '@iconify/vue';
import NavBar from '@/components/NavBar.vue';
import { Button, Column, DataTable, DatePicker, InputText, Panel, Select } from 'primevue';
import convenioServiceImpl from '@/services/convenioService.js';
import { onMounted, ref } from 'vue';

const convenioService = convenioServiceImpl();

onMounted(() => {
    convenioService.listarConvenios();
});
</script>

<template>
    <NavBar></NavBar>
    <div class="py-2 px-5">
        <header class="mt-2">
            <div class="py-4 border-b dark:border-b-neutral-400">
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <Icon icon="bx:file" width="36" height="36" class="text-blue-700 dark:text-white" />
                        <h1 class="ml-2 text-2xl font-bold text-gray-900 dark:text-white">Gestão de Convênios</h1>
                    </div>
                    <button
                        class="inline-flex items-center p-2 gap-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <Icon icon="ic:baseline-plus" width="24" height="24" class="" />
                        Novo Convênio
                    </button>
                </div>
            </div>
        </header>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
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
                        <Select v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Selecione a situação" class="w-80 md:w-10/12" />
                    </div>
                    <div class="px-2">
                        <div class="flex mb-1">
                            <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Tipo de Convênio
                            </label>
                            <span class="text-red-500 ml-2">*</span>
                        </div>
                        <Select v-model="selectedCity" :options="cities" optionLabel="name"
                            placeholder="Selecione o tipo" class="w-80 md:w-10/12" />
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
            </Panel>
            <br>
            <DataTable :value="convenioService.conentent" showGridlines paginator :rows="5"
                :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50">
                <Column field="id" header="ID"></Column>
                <Column field="numeroConvenio" header="Convênio"></Column>
                <Column field="proponente" header="Proponente"></Column>
                <Column field="convenente" header="Convenente"></Column>
                <Column field="responsaveis" header="Responsáveis"></Column>
                <Column field="objeto" header="Objeto"></Column>
                <Column field="dataInicio" header="Data Início"></Column>
                <Column field="dataFim" header="Data Fim"></Column>
                <Column field="valorTotal" header="Valor Total Original"></Column>
                <Column header="Ações">
                    <template #body>
                        <div class="flex gap-2">
                            <button title="Editar" class="
                                bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200
                                  transition duration-200 ease-in-out
                                  dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                <Icon icon="mage:edit-pen" width="24" height="24"/>
                            </button>
                            <button title="Detalhar" class="
                                bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200
                                  transition duration-200 ease-in-out
                                  dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                <Icon icon="fluent:eye-12-regular" width="24" height="24"/>
                            </button>
                        </div>
                    </template>
                </Column>
            </DataTable>
        </main>
    </div>
</template>

<style lang="scss" scoped></style>
