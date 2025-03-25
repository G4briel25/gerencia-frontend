<script setup>
import {Button, Column, DataTable} from "primevue";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {defineProps} from "vue";
import funcoes from '@/utils/funcoes.js';
import {Icon} from "@iconify/vue";
import lancamentoConvenioServiceImpl from '@/services/lancamentoConvenioService.js';
import LancamentoConvenioCadastro
    from "@/convenios/convenio-detalhes-componentes/lancamentos/LancamentoConvenioCadastro.vue";
import AditivoCadastro from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoCadastro.vue";
import aditivoServiceImpl from "@/services/aditivoService.js";

const { formatarDataBr, formatarMoedaBr } = funcoes();
const props = defineProps(['convenioService']);
const lancamentoConvenioService = lancamentoConvenioServiceImpl();
const aditivoService = aditivoServiceImpl();

const editarLancamento = async (_convenioId, _lancamentoId) => {
    await lancamentoConvenioService.buscarPorId(_convenioId, _lancamentoId);
    lancamentoConvenioService.cadastro.showModal = true;
};

const editarAditivo = async (_convenioId, _aditivoId) => {
    await aditivoService.buscarPorId(_convenioId, _aditivoId);
    aditivoService.cadastro.showModal = true;
};
</script>

<template>
    <Tabs value="0">
        <TabList>
            <Tab value="0">Lançamentos</Tab>
            <Tab value="1">Aditivos</Tab>
        </TabList>
        <TabPanels>
            <TabPanel value="0">
                <DataTable :value="convenioService.lancamento" showGridlines>
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
                                <button title="Editar" @click="editarLancamento(props.convenioService.id, slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="mage:edit-pen" width="24" height="24" />
                                </button>
                                <button title="Excluir" @click="excluir(slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-red-600 hover:text-red-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-gray-700">
                                    <Icon icon="iconamoon:trash" width="24" height="24" />
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel value="1">
                <DataTable :value="convenioService.aditivos" showGridlines>
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
                                <button title="Editar" @click="editarAditivo(props.convenioService.id, slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="mage:edit-pen" width="24" height="24" />
                                </button>
                                <button title="Detalhar" @click="detalhar(slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="fluent:eye-12-regular" width="24" height="24" />
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
        </TabPanels>
    </Tabs>

    <LancamentoConvenioCadastro></LancamentoConvenioCadastro>
    <AditivoCadastro></AditivoCadastro>
</template>
