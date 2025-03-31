<script setup>

import AditivoConvenioDetalhesCabecalho
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesCabecalho.vue";
import {onMounted} from "vue";
import AditivoConvenioPanelDetalhes
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioPanelDetalhes.vue";
import AditivoConvenioDetalhesDataTable
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesDataTable.vue";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import lancamentoAditivoServiceImpl from "@/services/lancamentoAditivoService.js";
import ConfirmDialog from "primevue/confirmdialog";

const aditivoConvenioService = aditivoConvenoServiceImpl();
const lancamentoAditivoService = lancamentoAditivoServiceImpl();

const props = defineProps(['convenioId', 'aditivoId']);

onMounted( async ()=> {
    await aditivoConvenioService.buscarPorIdDetalhar(props.convenioId, props.aditivoId);
    await lancamentoAditivoService.listarLancamentoAditivo(props.convenioId, props.aditivoId);
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