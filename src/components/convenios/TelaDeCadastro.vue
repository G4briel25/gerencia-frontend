<script setup>
import convenioServiceImpl from '@/services/convenioService';
import { Icon } from '@iconify/vue';
import { Button, DatePicker, Dialog, InputText, Select } from 'primevue';

const convenioService = convenioServiceImpl();
</script>

<template>
    <div>
        <Dialog class="mx-4 w-72 md:w-[50rem] lg:w-[70rem]" v-model:visible="convenioService.cadastro.showModal" modal header="Cadastro de Convênio">
            <div class="grid gap-2 grid-cols-1">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="lucide:building-2" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Proponente
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="lucide:user" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Convenente
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tabler:users" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Responsáveis
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="flowbite:file-pen-outline" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Objeto
                        </label>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Número do Convênio
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Número do Processo
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tdesign:money" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Valor Total Original
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText class="w-56 md:w-10/12" />
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
                        placeholder="Selecione a situação" class="w-56 md:w-10/12" />
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
                        class="w-56 md:w-10/12" />
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
            </div>



            <div class="flex justify-end gap-2">
                <Button type="button" label="Cancel" severity="secondary"
                    @click="convenioService.cadastro.showModal = false"></Button>
                <Button type="button" label="Save" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>
