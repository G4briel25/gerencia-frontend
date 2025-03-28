<script setup>
import convenioServiceImpl from '@/services/convenioService.js';
import { Icon } from '@iconify/vue';
import {Button, DatePicker, Dialog, InputNumber, InputText, Select, Toast, useToast} from 'primevue';
import {computed, ref} from "vue";

const toast = useToast();
const convenioService = convenioServiceImpl();

const situacaoOpcoes = ref([
    { name: 'Em execução' },
    { name: 'Em andamento' }
]);

const tipoConvenio = ref([
    { name: 'Obra Pública' },
    { name: 'Federal' }
]);


const selectedSituacao = computed({
    get: () => {
        return situacaoOpcoes.value.find(
            (opcao) => opcao.name === convenioService.cadastro.objeto.situacaoDescricao
        );
    },
    set: (newValue) => {
        convenioService.cadastro.objeto.situacaoDescricao = newValue.name;
    }
});

const selectedTipoConvenio = computed({
    get: () => {
        return tipoConvenio.value.find(
            (opcao) => opcao.name === convenioService.cadastro.objeto.tipoDeConvenio
        );
    },
    set: (newValue) => {
        convenioService.cadastro.objeto.tipoDeConvenio = newValue.name;
    }
});

const invalidFields = ref({
    proponente: false,
    convenente: false,
    responsaveis: false,
    objeto: false,
    numeroConvenio: false,
    numeroProcesso: false,
    valorTotal: false,
    situacaoDescricao: false,
    tipoDeConvenio: false,
    dataInicio: false
});

const validarCampos = () => {
    let isValid = true;

    const { proponente, convenente, responsaveis, objeto, numeroConvenio, numeroProcesso, valorTotal, situacaoDescricao, tipoDeConvenio, dataInicio } = convenioService.cadastro.objeto;

    // Validar campos obrigatórios e atualizar o estado dos campos inválidos
    if (!proponente) { invalidFields.value.proponente = true; isValid = false; }
    if (!convenente) { invalidFields.value.convenente = true; isValid = false; }
    if (!responsaveis) { invalidFields.value.responsaveis = true; isValid = false; }
    if (!objeto) { invalidFields.value.objeto = true; isValid = false; }
    if (!numeroConvenio) { invalidFields.value.numeroConvenio = true; isValid = false; }
    if (!numeroProcesso) { invalidFields.value.numeroProcesso = true; isValid = false; }
    if (!valorTotal) { invalidFields.value.valorTotal = true; isValid = false; }
    if (!situacaoDescricao) { invalidFields.value.situacaoDescricao = true; isValid = false; }
    if (!tipoDeConvenio) { invalidFields.value.tipoDeConvenio = true; isValid = false; }
    if (!dataInicio) { invalidFields.value.dataInicio = true; isValid = false; }

    return isValid;
};

const cadastrarConvenio = async (obj) => {
    // Limpar os erros ao tentar submeter novamente
    Object.keys(invalidFields.value).forEach(key => invalidFields.value[key] = false);

    if (!validarCampos()) {
        toast.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, preencha todos os campos obrigatórios.', life: 3000 });
        return;
    }

    try {
        let result;
        if (obj.id) {
            result = await convenioService.atualizarConvenio(obj);
        } else {
            result = await convenioService.cadastrarConvenio(obj);
        }

        if (result.success) {
            convenioService.cadastro.objeto = {};
            convenioService.cadastro.showModal = false;
            await convenioService.listarConvenios();
            toast.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: obj.id ? 'Convênio atualizado com sucesso!' : 'Convênio cadastrado com sucesso!',
                life: 3000
            });
        } else {
            toast.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Houve um erro ao salvar o convênio. Tente novamente.',
                life: 3000
            });
        }
    } catch (error) {
        console.error('Erro ao salvar o convênio:', error);
        toast.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Houve um erro inesperado. Tente novamente mais tarde.',
            life: 3000
        });
    }
};


</script>

<template>
    <div>
        <Toast></Toast>
        <Dialog class="mx-4 w-8/12 md:w-[40rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem]" v-model:visible="convenioService.cadastro.showModal" modal header="Cadastro de Convênio">
            <div class="grid gap-4 mb-2 sm:grid-cols-1 md:gap-2 md:grid-cols-2 lg:grid-cols-3 lg:py-4 lg:gap-8">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="lucide:building-2" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Proponente
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.proponente" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.proponente" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="lucide:user" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Convenente
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.convenente" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.convenente" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tabler:users" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Responsáveis
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.responsaveis" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.responsaveis" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="flowbite:file-pen-outline" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Objeto
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.objeto" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.objeto" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Número do Convênio
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.numeroConvenio" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.numeroConvenio" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Número do Processo
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="convenioService.cadastro.objeto.numeroProcesso" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.numeroProcesso" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="tdesign:money" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Valor Total Original
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputNumber
                        v-model="convenioService.cadastro.objeto.valorTotal"
                        class="w-56 md:w-10/12 lg:w-11/12"
                        prefix="R$ "
                        locale="pt-BR"
                        :minFractionDigits="2"
                        :invalid="invalidFields.valorTotal"
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
                            placeholder="Selecione a situação" class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.situacaoDescricao" />
                </div>
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="bx:file" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Tipo de Convênio
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <Select v-model="selectedTipoConvenio" :options="tipoConvenio" optionLabel="name" placeholder="Selecione o tipo"
                        class="w-56 md:w-10/12 lg:w-11/12" :invalid="invalidFields.tipoDeConvenio" />
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
                        v-model="convenioService.cadastro.objeto.dataInicio"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-inicio"
                        :invalid="invalidFields.dataInicio"
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
                        v-model="convenioService.cadastro.objeto.dataFim"
                        dateFormat="dd/mm/yy" 
                        locale="pt-BR"
                        inputId="data-fim"
                    />
                </div>
            </div>



            <div class="flex justify-end gap-2 pt-4">
                <Button type="button" label="Cancelar" severity="secondary"
                    @click="convenioService.cadastro.showModal = false"></Button>
                <Button severity="info" type="button" label="Salvar" @click="cadastrarConvenio(convenioService.cadastro.objeto)"></Button>
            </div>
        </Dialog>
    </div>
</template>
