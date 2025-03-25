<script setup>
import {Icon} from '@iconify/vue';
import {Button, DatePicker, Dialog, InputNumber, InputText, Select} from 'primevue';
import aditivoServiceImpl from "@/services/aditivoService.js";
import {computed, ref} from "vue";

const aditivoService = aditivoServiceImpl();

const situacaoOpcoes = ref([
    { name: 'Em andamento' },
    { name: 'Finalizado' }
]);

const selectedSituacao = computed({
    get: () => {
        return situacaoOpcoes.value.find(
            (opcao) => opcao.name === aditivoService.cadastro.objeto.situacaoDescricaoAditivo
        );
    },
    set: (newValue) => {
        aditivoService.cadastro.objeto.situacaoDescricaoAditivo = newValue.name;
    }
});
</script>

<template>
    <div>
        <Dialog class="mx-4 w-8/12 md:w-[40rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem]" v-model:visible="aditivoService.cadastro.showModal" modal header="Cadastro de Aditivo">
            <div class="grid gap-4 mb-2 sm:grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:gap-8">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Número do Aditivo
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="aditivoService.cadastro.objeto.numeroAditivo" class="w-56 md:w-10/12 lg:w-11/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tabler:users" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Responsáveis
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="aditivoService.cadastro.objeto.responsaveis" class="w-56 md:w-10/12 lg:w-11/12" />
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
                        v-model="aditivoService.cadastro.objeto.valorTotalAditivo"
                        class="w-56 md:w-10/12 lg:w-11/12"
                        prefix="R$ "
                        locale="pt-BR"
                        :minFractionDigits="2"
                    />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Situação
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <Select v-model="selectedSituacao" :options="situacaoOpcoes" optionLabel="name"
                            placeholder="Selecione a situação" class="w-56 md:w-10/12 lg:w-11/12" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Data Início
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <DatePicker
                        v-model="aditivoService.cadastro.objeto.dataInicio"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-repasse"
                    />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Data Fim
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <DatePicker
                        v-model="aditivoService.cadastro.objeto.dataFim"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-repasse"
                    />
                </div>
            </div>



            <div class="flex justify-end gap-2 pt-4">
                <Button type="button" label="Cancelar" severity="secondary"
                        @click="aditivoService.cadastro.showModal = false"></Button>
                <Button severity="info" type="button" label="Salvar" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>
