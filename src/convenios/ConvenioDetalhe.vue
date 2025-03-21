<script setup>
import {defineProps, onMounted} from 'vue';
import Panel from 'primevue/panel';
import ConvenioDetalhesDataTable from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesDataTable.vue'
import NavBar from '@/components/NavBar.vue';
import ConvenioDetalhes from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhes.vue'
import HeaderDetalhes from '@/convenios/convenio-detalhes-componentes/ConvenioDetalhesCabecalho.vue';
import convenioServiceImpl from '@/services/convenioService';

const props = defineProps({
    id: String,
});

const convenioService = convenioServiceImpl();

onMounted( async () => {
    await convenioService.listarConvenioPorId(props.id);
});

</script>

<template>
    <NavBar></NavBar>
    <div class="py-2 px-5">
        <HeaderDetalhes :convenioId="props.id"></HeaderDetalhes>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <ConvenioDetalhes :convenioService="convenioService.convenioDetalhado"></ConvenioDetalhes>
            </Panel>
            <br><br>
            <ConvenioDetalhesDataTable :convenioService="convenioService.convenioDetalhado"></ConvenioDetalhesDataTable>
        </main>
    </div>
</template>
