<script setup>
import {Icon} from '@iconify/vue';
import {Button, DatePicker, Dialog, InputNumber, InputText, Toast, useToast} from 'primevue';
import convenioServiceImpl from "@/services/convenioService.js";
import {useRoute} from "vue-router";
import {ref} from "vue";
import lancamentoAditivoServiceImpl from "@/services/lancamentoAditivoService.js";

const toast = useToast();
const route = useRoute();
const lancamentoAditivoConvenioService = lancamentoAditivoServiceImpl();
const convenioService = convenioServiceImpl();

const invalidFields = ref({
    dataRepasse: null,
    exercicio: null,
    valorPago: null,
});

const validarCampos = () => {
    let isValid = true;

    const { dataRepasse, exercicio, valorPago } = lancamentoAditivoConvenioService.cadastro.objeto;

    // Validar campos obrigatórios e atualizar o estado dos campos inválidos
    if (!dataRepasse) { invalidFields.value.dataRepasse = true; isValid = false; }
    if (!exercicio) { invalidFields.value.exercicio = true; isValid = false; }
    if (!valorPago) { invalidFields.value.valorPago = true; isValid = false; }

    return isValid;
};

const novoLancamento = async (obj) => {
    // Limpar os erros ao tentar submeter novamente
    Object.keys(invalidFields.value).forEach(key => invalidFields.value[key] = false);

    if (!validarCampos()) {
        toast.add({ severity: 'error', summary: 'Erro', detail: 'Por favor, preencha todos os campos obrigatórios.', life: 5000 });
        return;
    }

    try {
        let result;
        if(obj.id) {
            result = await lancamentoAditivoConvenioService.atualizarLancamento(obj);
        } else {
            result = await lancamentoAditivoConvenioService.cadastrarLancamento(route.params.convenioId, route.params.aditivoId, obj);
        }

        if (result.success) {
            await lancamentoAditivoConvenioService.listarLancamentoAditivo(route.params.convenioId, route.params.aditivoId);
            lancamentoAditivoConvenioService.cadastro.showModal = false;
            toast.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: obj.id ? 'Lançamento atualizado com sucesso!' : 'Lançamento cadastrado com sucesso!',
                life: 5000
            });
        } else {
            toast.add({
                severity: 'error',
                summary: 'Erro',
                detail: 'Houve um erro ao salvar o lançamento. Tente novamente.',
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
        <Dialog class="mx-4 w-8/12 md:w-[40rem] lg:w-[45rem]" v-model:visible="lancamentoAditivoConvenioService.cadastro.showModal" modal header="Cadastro de Lançamento do Aditivo">
            <div class="grid gap-8 mb-2 grid-cols-1 md:grid-cols-2 lg:py-4">
                <div class="px-2">
                    <div class="flex mb-1">
                        <Icon icon="iwwa:year" width="24" height="24" class="mr-2" />
                        <label class="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                            Exercício
                        </label>
                        <span class="text-red-500 ml-2">*</span>
                    </div>
                    <InputText v-model="lancamentoAditivoConvenioService.cadastro.objeto.exercicio" :invalid="invalidFields.exercicio" class="w-52" />
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
                        v-model="lancamentoAditivoConvenioService.cadastro.objeto.valorPago"
                        :invalid="invalidFields.valorPago"
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
                        v-model="lancamentoAditivoConvenioService.cadastro.objeto.dataRepasse"
                        :invalid="invalidFields.dataRepasse"
                        dateFormat="dd/mm/yy"
                        locale="pt-BR"
                        inputId="data-repasse"
                    />
                </div>
            </div>



            <div class="flex justify-end gap-2 pt-4">
                <Button type="button" label="Cancelar" severity="secondary"
                        @click="lancamentoAditivoConvenioService.cadastro.showModal = false"></Button>
                <Button severity="info" type="button" label="Salvar" @click="novoLancamento(lancamentoAditivoConvenioService.cadastro.objeto)"></Button>
            </div>
        </Dialog>
    </div>
</template>
