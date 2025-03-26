<script setup>
import {Icon} from '@iconify/vue';
import {Button, DatePicker, Dialog, InputNumber, InputText} from 'primevue';
import lancamentoConvenioServiceImpl from "@/services/lancamentoConvenioService.js";

const lancamentoService = lancamentoConvenioServiceImpl();

</script>

<template>
    <div>
        <Dialog class="mx-4 w-8/12 md:w-[40rem] lg:w-[45rem]" v-model:visible="lancamentoService.cadastro.showModal" modal header="Cadastro de Lançamento do Convênio">
            <div class="grid gap-8 mb-2 grid-cols-1 md:grid-cols-2 lg:py-4">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="iwwa:year" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Exercício
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="lancamentoService.cadastro.objeto.exercicio" class="w-52" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tdesign:money" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Valor Pago
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputNumber
                        v-model="lancamentoService.cadastro.objeto.valorPago"
                        class="w-52"
                        prefix="R$ "
                        locale="pt-BR"
                        :minFractionDigits="2"
                    />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Data Repasse
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <DatePicker
                        v-model="lancamentoService.cadastro.objeto.dataRepasse"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-repasse"
                    />
                </div>
            </div>



            <div class="flex justify-end gap-2 pt-4">
                <Button type="button" label="Cancelar" severity="secondary"
                        @click="lancamentoService.cadastro.showModal = false"></Button>
                <Button severity="info" type="button" label="Salvar" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>
