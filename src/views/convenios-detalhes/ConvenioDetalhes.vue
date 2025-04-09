<script setup>
import {defineEmits, defineProps, onMounted} from 'vue';
import ConvenioDetalhesDataTable from '@/views/convenios-detalhes/componentes/ConvenioDetalhesDataTable.vue';
import ConvenioPanelDetalhes from '@/views/convenios-detalhes/componentes/ConvenioDetalhesPanel.vue';
import ConvenioDetalhesCabecalho from '@/views/convenios-detalhes/componentes/ConvenioDetalhesCabecalho.vue';
import convenioServiceImpl from '@/services/convenioService.js';
import lancamentoConvenioServiceImpl from "@/services/lancamentoConvenioService.js";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import ConfirmDialog from "primevue/confirmdialog";

const emit = defineEmits(['start-loading', 'end-loading']);
const props = defineProps(['convenioId']);
const convenioService = convenioServiceImpl();
const lancamentoConvenioService = lancamentoConvenioServiceImpl();
const aditivoConvenioService = aditivoConvenoServiceImpl();

onMounted(async () => {
    emit('start-loading');
    try {
        await convenioService.listarConvenioPorId(props.convenioId);
        await lancamentoConvenioService.listarLancamento(props.convenioId);
        await aditivoConvenioService.listarAditivo(props.convenioId);
    } catch (error) {
        console.log("Erro ao detalhar o convênio:", error.message);
    } finally {
        emit('end-loading');
    }
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