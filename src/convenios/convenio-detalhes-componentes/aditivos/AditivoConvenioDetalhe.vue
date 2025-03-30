<script setup>

import AditivoConvenioDetalhesCabecalho
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesCabecalho.vue";
import {defineProps, onMounted} from "vue";
import {useRoute} from "vue-router";
import aditivoConvenoServiceImpl from "@/services/aditivoConvenioService.js";
import AditivoConvenioPanelDetalhes
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioPanelDetalhes.vue";
import AditivoConvenioDetalhesDataTable
    from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesDataTable.vue";
import lancamentoAditivoServiceImpl from "@/services/lancamentoAditivoService.js";

const aditivoConvenioService = aditivoConvenoServiceImpl();
const lancamentoAditivoService = lancamentoAditivoServiceImpl();
const route = useRoute();
const props = defineProps({
    id: String,
});

onMounted( async ()=> {
    await aditivoConvenioService.buscarPorIdDetalhar(route.params.convenioId, route.params.aditivoId);
    await lancamentoAditivoService.listarLancamentoAditivo(route.params.convenioId, route.params.aditivoId);
});

</script>

<template>
    <div class="py-2 px-5">
        <AditivoConvenioDetalhesCabecalho
            :aditivoId="props.id"
            :aditivoConvenioService="aditivoConvenioService.content"
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