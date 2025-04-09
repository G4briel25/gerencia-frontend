<script setup>
import {Icon} from '@iconify/vue';
import {Button, DatePicker, Dialog, InputNumber, InputText, Select, useToast, Toast} from 'primevue';
import {computed, ref} from "vue";
import convenioServiceImpl from "@/services/convenioService.js";
import {useRoute} from "vue-router";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";

const toast = useToast();
const convenioService = convenioServiceImpl();
const aditivoConvenioService = aditivoConvenoServiceImpl();
const route = useRoute();

const situacaoOpcoes = ref([
    { name: 'Em andamento' },
    { name: 'Finalizado' }
]);

const selectedSituacao = computed({
    get: () => {
        return situacaoOpcoes.value.find(
            (opcao) => opcao.name === aditivoConvenioService .cadastro.objeto.situacaoDescricaoAditivo
        );
    },
    set: (newValue) => {
        aditivoConvenioService.cadastro.objeto.situacaoDescricaoAditivo = newValue.name;
    }
});

const invalidFields = ref({
    numeroAditivo: null,
    responsaveis: null,
    dataInicio: null,
    dataFim: null,
    valorTotalAditivo: null,
    situacaoDescricaoAditivo: null
});

const validarCampos = () => {
    let isValid = true;

    const { numeroAditivo, responsaveis, dataInicio, valorTotalAditivo, situacaoDescricaoAditivo } = aditivoConvenioService.cadastro.objeto;

    // Validar campos obrigatórios e atualizar o estado dos campos inválidos
    if (!numeroAditivo) { invalidFields.value.numeroAditivo = true; isValid = false; }
    if (!responsaveis) { invalidFields.value.responsaveis = true; isValid = false; }
    if (!dataInicio) { invalidFields.value.dataInicio = true; isValid = false; }
    if (!valorTotalAditivo) { invalidFields.value.valorTotalAditivo = true; isValid = false; }
    if (!situacaoDescricaoAditivo) { invalidFields.value.situacaoDescricaoAditivo = true; isValid = false; }

    return isValid;
};

const novoAditivo = async (obj) => {
    // Limpar os erros ao tentar submeter novamente
    Object.keys(invalidFields.value).forEach(key => invalidFields.value[key] = false);

    if (!validarCampos()) {
        toast.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, preencha todos os campos obrigatórios.', life: 5000 });
        return;
    }

    try {
        let result;
        if(obj.id) {
            result = await aditivoConvenioService.atualizarAditivo(obj);
        } else {
            result = await aditivoConvenioService.cadastrarAditivo(convenioService.convenioDetalhado.id, obj);
        }

        if (result.success) {
            await aditivoConvenioService.listarAditivo(route.params.convenioId);
            aditivoConvenioService.cadastro.showModal = false;
            toast.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: obj.id ? 'Aditivo atualizado com sucesso!' : 'Aditivo cadastrado com sucesso!',
                life: 5000
            });
        } else {
            toast.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Houve um erro ao salvar o aditivo. Tente novamente.',
                life: 5000
            });
        }
    } catch (error) {
        console.log(error)
    }
};
</script>

<template>
    <div>
        <Toast></Toast>
        <Dialog class="mx-4 w-8/12 md:w-[40rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem]" v-model:visible="aditivoConvenioService.cadastro.showModal" modal header="Cadastro de Aditivo do Convênio">
            <div class="grid gap-4 mb-2 sm:grid-cols-1 md:gap-5 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:gap-8">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Número do Aditivo
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="aditivoConvenioService.cadastro.objeto.numeroAditivo" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.numeroAditivo" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tabler:users" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Responsáveis
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="aditivoConvenioService.cadastro.objeto.responsaveis" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.responsaveis" />
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
                        v-model="aditivoConvenioService.cadastro.objeto.valorTotalAditivo"
                        :invalid="invalidFields.valorTotalAditivo"
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
                            placeholder="Selecione a situação" class="w-56 md:w-10/12 lg:w-7/12"
                            :invalid="invalidFields.situacaoDescricaoAditivo"/>
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
                        v-model="aditivoConvenioService.cadastro.objeto.dataInicio"
                        :invalid="invalidFields.dataInicio"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-inicio"
                    />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:calendar" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Data Fim
                        </label>
                    </div>
                    <DatePicker
                        v-model="aditivoConvenioService.cadastro.objeto.dataFim"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-fim"
                    />
                </div>
            </div>



            <div class="flex justify-end gap-2 pt-4">
                <Button type="button" label="Cancelar" severity="secondary"
                        @click="aditivoConvenioService.cadastro.showModal = false"></Button>
                <Button severity="info" type="button" label="Salvar" @click="novoAditivo(aditivoConvenioService.cadastro.objeto)"></Button>
            </div>
        </Dialog>
    </div>
</template>
