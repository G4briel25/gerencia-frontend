<script setup>
import {Column, DataTable} from "primevue";
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import {computed, defineProps, onMounted, reactive} from "vue";
import funcoes from '@/utils/funcoes.js';
import {Icon} from "@iconify/vue";
import Message from "primevue/message";
import lancamentoAditivoServiceImpl from "@/services/lancamentoAditivoService.js";
import {useRoute} from "vue-router";
import LancamentoAditivoConvenioCadastro
    from "@/convenios/convenio-detalhes-componentes/lancamentos/LancamentoAditivoConvenioCadastro.vue";

const { formatarDataBr, formatarMoedaBr } = funcoes();

const route = useRoute();
const props = defineProps(['listaLancamentoAditivo']);
const lancamentoAditivoService = lancamentoAditivoServiceImpl();

const isValidDataTable = computed(() => {
    return lancamentoAditivoService.content && lancamentoAditivoService.content.length > 0;
});

const editarLancamento = async (_convenioId, _aditivoId, _lancamentoId) => {
    console.log(_convenioId, _aditivoId, _lancamentoId)
    await lancamentoAditivoService.buscarPorId(_convenioId, _aditivoId, _lancamentoId);
    lancamentoAditivoService.cadastro.showModal = true;
};

const cadastrar = () => {
    lancamentoAditivoService.cadastro.objeto = reactive(lancamentoAditivoService.objetoPadrao);

    // limpa os campos
    lancamentoAditivoService.cadastro.objeto.dataRepasse = null;
    lancamentoAditivoService.cadastro.objeto.exercicio = null;
    lancamentoAditivoService.cadastro.objeto.valorPago = null;
    lancamentoAditivoService.cadastro.showModal = true;
};

onMounted( async () => {
    await lancamentoAditivoService.listarLancamentoAditivo(route.params.convenioId, route.params.aditivoId);
});
</script>

<template>
    <pre>{{props.listaLancamentoAditivo}}</pre>
    <Tabs value="0">
        <TabList>
            <div class="w-full flex justify-between">
                <span>
                    <Tab value="0">Lançamentos</Tab>
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
                <DataTable v-if="isValidDataTable" :value="lancamentoAditivoService.content" showGridlines>
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
                                <button title="Editar" @click="editarLancamento(props.listaLancamentoAditivo.convenioId, props.listaLancamentoAditivo.id, slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                                    <Icon icon="mage:edit-pen" width="24" height="24" />
                                </button>
                                <button title="Excluir" @click="excluir(slotProps.data.id)" class="bg-gray-100 rounded-full p-2 text-red-600 hover:text-red-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-gray-700">
                                    <Icon icon="iconamoon:trash" width="24" height="24" />
                                </button>
                            </div>
                        </template>
                    </Column>
                </DataTable>

                <Message v-else severity="warn">Não foram encontrados nenhum registro.</Message>
            </TabPanel>
        </TabPanels>
    </Tabs>

    <LancamentoAditivoConvenioCadastro></LancamentoAditivoConvenioCadastro>
</template>
