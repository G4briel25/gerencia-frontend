<script setup>
import {defineProps, onMounted} from 'vue';
import ConvenioDetalhesDataTable from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesDataTable.vue';
import ConvenioPanelDetalhes from '@/convenios/convenio-detalhes-componentes/ConvenioPanelDetalhes.vue';
import ConvenioDetalhesCabecalho from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesCabecalho.vue';
import convenioServiceImpl from '@/services/convenioService';
import lancamentoConvenioServiceImpl from "@/services/lancamentoConvenioService.js";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import ConfirmDialog from "primevue/confirmdialog";

const props = defineProps(['convenioId']);
const convenioService = convenioServiceImpl();
const lancamentoConvenioService = lancamentoConvenioServiceImpl();
const aditivoConvenioService = aditivoConvenoServiceImpl();

onMounted(async () => {
    await convenioService.listarConvenioPorId(props.convenioId);
    await lancamentoConvenioService.listarLancamento(props.convenioId);
    await aditivoConvenioService.listarAditivo(props.convenioId);
});

</script>

<template>
    <ConfirmDialog></ConfirmDialog>
    <div class="py-2 px-5">
        <ConvenioDetalhesCabecalho
            :convenioService="convenioService"
            :listaLancamentos="lancamentoConvenioService.content"
            :listaAditivos="aditivoConvenioService.content"
        ></ConvenioDetalhesCabecalho>
        <br>
        <main>
            <ConvenioPanelDetalhes
                :convenioService="convenioService.convenioDetalhado"
            ></ConvenioPanelDetalhes>
            <br><br>
            <ConvenioDetalhesDataTable
                :convenioService="convenioService.convenioDetalhado"
                :lancamentoConvenioService="lancamentoConvenioService"
                :aditivoConvenioService="aditivoConvenioService"
            ></ConvenioDetalhesDataTable>
        </main>
    </div>
</template>