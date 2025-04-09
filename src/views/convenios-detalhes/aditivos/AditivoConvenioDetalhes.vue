<script setup>

import AditivoConvenioDetalhesCabecalho from "@/views/convenios-detalhes/aditivos/AditivoConvenioDetalhesCabecalho.vue";
import AditivoConvenioPanelDetalhes from "@/views/convenios-detalhes/aditivos/AditivoConvenioDetalhesPanel.vue";
import AditivoConvenioDetalhesDataTable from "@/views/convenios-detalhes/aditivos/AditivoConvenioDetalhesDataTable.vue";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import lancamentoAditivoServiceImpl from "@/services/lancamentoAditivoService.js";
import ConfirmDialog from "primevue/confirmdialog";
import {onMounted, defineEmits} from "vue";

const aditivoConvenioService = aditivoConvenoServiceImpl();
const lancamentoAditivoService = lancamentoAditivoServiceImpl();

const emit = defineEmits(['start-loading', 'end-loading']);
const props = defineProps(['convenioId', 'aditivoId']);

onMounted( async ()=> {
    emit('start-loading');
    try {
        await aditivoConvenioService.buscarPorIdDetalhar(props.convenioId, props.aditivoId);
        await lancamentoAditivoService.listarLancamentoAditivo(props.convenioId, props.aditivoId);
    } catch (error) {
        console.log("Erro ao detalhar o aditivo do convênio:", error.message);
    } finally {
        emit('end-loading');
    }
});

</script>

<template>
    <ConfirmDialog></ConfirmDialog>
    <div class="py-2 px-5">
        <AditivoConvenioDetalhesCabecalho
            :aditivoConvenioService="aditivoConvenioService"
            :listaLancamentoAditivo="lancamentoAditivoService.content"
        ></AditivoConvenioDetalhesCabecalho>
        <br>
        <main>
            <AditivoConvenioPanelDetalhes :aditivoConvenioService="aditivoConvenioService.content"></AditivoConvenioPanelDetalhes>
            <br><br>
            <AditivoConvenioDetalhesDataTable
                :aditivoConvenioService="aditivoConvenioService.content"
                :lancamentoAditivoService="lancamentoAditivoService"
            ></AditivoConvenioDetalhesDataTable>
        </main>
    </div>
</template>

<style scoped>

</style>