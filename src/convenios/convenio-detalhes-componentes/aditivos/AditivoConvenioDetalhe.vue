<script setup>

import Panel from "primevue/panel";
import AditivoDetalhesCabecalho from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesCabecalho.vue";
import AditivoDetalhesDataTable from "@/convenios/convenio-detalhes-componentes/aditivos/AditivoConvenioDetalhesDataTable.vue";
import aditivoServiceImpl from "@/services/aditivoConvenioService.js";
import {defineProps, onMounted} from "vue";
import {useRoute} from "vue-router";
import convenioServiceImpl from "@/services/convenioService.js";

const route = useRoute();
const props = defineProps({
    id: String,
});

const aditivoService = aditivoServiceImpl();
const convenioService = convenioServiceImpl()

// const convenioId = route.params.convenioId;

onMounted( async () => {
    await convenioService.listarConvenioPorId(props.id);
    console.log(aditivoService.content)
});

</script>

<template>
    <div class="py-2 px-5">
        <pre>{{ aditivoService.content }}</pre>
        <pre>{{ convenioiService.convenioDetalhado.aditivos }}</pre>
        <AditivoDetalhesCabecalho :aditivoId="props.id"></AditivoDetalhesCabecalho>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
<!--                <AditivoDetalhe :aditivoService="aditivoService.content"></AditivoDetalhe>-->
            </Panel>
            <br><br>
<!--            <AditivoDetalhesDataTable :aditivoService="aditivoService.content"></AditivoDetalhesDataTable>-->
        </main>
    </div>
</template>

<style scoped>

</style>