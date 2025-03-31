<script setup>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import Message from 'primevue/message';
import {useConfirm, useToast} from 'primevue';

import {defineProps, reactive, ref} from "vue";
import {Icon} from "@iconify/vue";
import funcoes from '@/utils/funcoes.js';
import LancamentoConvenioCadastro
    from "@/convenios/convenio-detalhes-componentes/lancamentos/LancamentoConvenioCadastro.vue";
import AditivoCadastro from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioCadastro.vue";
import {useRouter} from "vue-router";

const confirm = useConfirm();
const toast = useToast();
const router = useRouter();
const {formatarDataBr, formatarMoedaBr} = funcoes();
const props = defineProps(['convenioService', 'lancamentoConvenioService', 'aditivoConvenioService']);

const editarLancamento = async (_convenioId, _lancamentoId) => {
    await props.lancamentoConvenioService.buscarPorId(_convenioId, _lancamentoId);
    props.lancamentoConvenioService.cadastro.showModal = true;
};

const editarAditivo = async (_convenioId, _aditivoId) => {
    await props.aditivoConvenioService.buscarPorId(_convenioId, _aditivoId);
    props.aditivoConvenioService.cadastro.showModal = true;
};

const detalhar = async (_convenioId, _aditivoId) => {
    await router.push({name: 'aditivo-detalhe', params: {convenioId: _convenioId, aditivoId: _aditivoId}});
};


const valor = ref('0');
const cadastrar = () => {
    if (valor.value === '0') {
        props.lancamentoConvenioService.cadastro.objeto = reactive(props.lancamentoConvenioService.objetoPadrao);

        // limpa os campos
        props.lancamentoConvenioService.cadastro.objeto.dataRepasse = null;
        props.lancamentoConvenioService.cadastro.objeto.exercicio = null;
        props.lancamentoConvenioService.cadastro.objeto.valorPago = null;
        props.lancamentoConvenioService.cadastro.showModal = true;
    } else {
        props.aditivoConvenioService.cadastro.objeto = reactive(props.aditivoConvenioService.objetoPadrao);

        // limpa os campos
        props.aditivoConvenioService.cadastro.objeto.numeroAditivo = null;
        props.aditivoConvenioService.cadastro.objeto.responsaveis = null;
        props.aditivoConvenioService.cadastro.objeto.valorTotalAditivo = null;
        props.aditivoConvenioService.cadastro.objeto.dataInicio = null;
        props.aditivoConvenioService.cadastro.objeto.dataFim = null;
        props.aditivoConvenioService.cadastro.objeto.situacaoDescricaoAditivo = null;
        props.aditivoConvenioService.cadastro.showModal = true;
    }
};

const excluirLancamento = (_convenioId, _lancamentoId) => {
    confirm.require({
        message: 'Você deseja excluir este registro?',
        header: 'Zona de Perigo',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancelar',
        rejectProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Excluir',
            severity: 'danger'
        },
        accept: async () => {
            const result = await props.lancamentoConvenioService.excluirLancamento(_convenioId, _lancamentoId);
            if (result.success) {
                toast.add({severity: 'info', summary: 'Confirmado', detail: 'Registro excluído', life: 5000});
                await props.lancamentoConvenioService.listarLancamento(_convenioId);
            } else {
                toast.add({severity: 'error', summary: 'Erro', detail: result.message, life: 5000});
            }
        }
    });
};

</script>

<template>
    <Tabs v-model:value="valor">
        <TabList>
            <div class="w-full flex justify-between">
                <span>
                    <Tab value="0">Lançamentos</Tab>
                    <Tab value="1">Aditivos</Tab>
                </span>

                <span class="flex items-center justify-center mr-2">
                    <button
                        @click="cadastrar"
                        class="p-2 gap-1 border border-transparent font-medium
                        rounded-md shadow-sm text-white bg-blue-600
                        hover:bg-blue-700 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-blue-500
                    ">
                        <Icon icon="ic:baseline-plus" width="24" height="24" class=""/>
                    </button>
                </span>
            </div>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <DataTable v-if="lancamentoConvenioService.content.length" :value="lancamentoConvenioService.content" showGridlines>
                    <Column field="id" header="Id"></Column>
                    <Column field="exercicio" header="Exercício"></Column>
                    <Column field="dataRepasse" header="Data de Repasse">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataRepasse) }}
                        </template>
                    </Column>
                    <Column field="valorPago" header="Valor Pago">
                        <template #body="slotProps">
                            {{ formatarMoedaBr(slotProps.data.valorPago) }}
                        </template>
                    </Column>
                    <Column header="Ações" style="width: 8rem">
                        <template #body="slotProps">
                            <div class="flex gap-2">
                                <button title="Editar"
                                        @click="editarLancamento(props.convenioService.id, slotProps.data.id)"
                                        class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="mage:edit-pen" width="24" height="24"/>
                                </button>
                                <button title="Excluir"
                                        @click="excluirLancamento(props.convenioService.id, slotProps.data.id)"
                                        class="bg-gray-100 rounded-full p-2 text-red-600 hover:text-red-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-gray-700">
                                    <Icon icon="iconamoon:trash" width="24" height="24"/>
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <Message v-else severity="warn">Não foram encontrados nenhum registro.</Message>
            </TabPanel>
            <TabPanel value="1">
                <DataTable v-if="aditivoConvenioService.content.length" :value="aditivoConvenioService.content" showGridlines>
                    <Column field="id" header="Id"></Column>
                    <Column field="numeroAditivo" header="Aditivo"></Column>
                    <Column field="responsaveis" header="Responsáveis"></Column>
                    <Column field="dataInicio" header="Data Início">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataInicio) }}
                        </template>
                    </Column>
                    <Column field="dataFim" header="Data Fim">
                        <template #body="slotProps">
                            {{ formatarDataBr(slotProps.data.dataFim) }}
                        </template>
                    </Column>
                    <Column field="valorTotalAditivo" header="Valor Pago Aditivo">
                        <template #body="slotProps">
                            {{ formatarMoedaBr(slotProps.data.valorTotalAditivo) }}
                        </template>
                    </Column>
                    <Column field="situacaoDescricaoAditivo" header="Situação"></Column>
                    <Column header="Ações" style="width: 8rem">
                        <template #body="slotProps">
                            <div class="flex gap-2">
                                <button title="Editar"
                                        @click="editarAditivo(props.convenioService.id, slotProps.data.id)"
                                        class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="mage:edit-pen" width="24" height="24"/>
                                </button>
                                <button title="Detalhar" @click="detalhar(props.convenioService.id, slotProps.data.id)"
                                        class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="fluent:eye-12-regular" width="24" height="24"/>
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
                <Message v-else severity="warn">Não foram encontrados nenhum registro.</Message>
            </TabPanel>
        </TabPanels>
    </Tabs>

    <LancamentoConvenioCadastro></LancamentoConvenioCadastro>
    <AditivoCadastro></AditivoCadastro>
</template>
