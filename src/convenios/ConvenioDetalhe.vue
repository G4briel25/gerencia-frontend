<script setup>
import {defineProps, onMounted} from 'vue';
import Panel from 'primevue/panel';
import ConvenioDetalhesDataTable from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesDataTable.vue'
import ConvenioDetalhes from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhes.vue'
import ConvenioDetalhesCabecalho from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesCabecalho.vue';
import convenioServiceImpl from '@/services/convenioService';
import lancamentoConvenioServiceImpl from "@/services/lancamentoConvenioService.js";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import {useRoute} from "vue-router";

const props = defineProps({
    id: String,
});

const route = useRoute();

const convenioService = convenioServiceImpl();
const lancamentoConvenioService = lancamentoConvenioServiceImpl();
const aditivoConvenioService = aditivoConvenoServiceImpl();

onMounted( async () => {
    await convenioService.listarConvenioPorId(props.id);
    await lancamentoConvenioService.listarLancamento(route.params.id);
    await aditivoConvenioService.listarAditivo(route.params.id);
});

</script>

<template>
    <div class="py-2 px-5">
        <ConvenioDetalhesCabecalho :convenioId="props.id"></ConvenioDetalhesCabecalho>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <ConvenioDetalhes :convenioService="convenioService.convenioDetalhado"></ConvenioDetalhes>
            </Panel>
            <br><br>
            <ConvenioDetalhesDataTable
                :convenioService="convenioService.convenioDetalhado"
                :listaLancamentos="lancamentoConvenioService.content"
                :listaAditivos="aditivoConvenioService.content"
            ></ConvenioDetalhesDataTable>
        </main>
    </div>
</template>
