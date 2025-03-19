<script setup>
import { defineProps, onMounted } from 'vue';
import { DataTable, Panel } from 'primevue';
import NavBar from '@/components/NavBar.vue';
import Detalhes from '@/components/convenios-detalhes/Detalhes.vue'
import HeaderDetalhes from '@/components/convenios-detalhes/HeaderDetalhes.vue';
import convenioServiceImpl from '@/services/convenioService';

const props = defineProps({
  id: Number,
});

const convenioService = convenioServiceImpl();

onMounted( async () => {
    await convenioService.listarConvenioPorId(props.id);
});

console.log("ID do Convênio:", props.id);

</script>

<template>
    <NavBar></NavBar>
    <div class="py-2 px-5">
        <HeaderDetalhes :convenioId="props.id"></HeaderDetalhes>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <Detalhes :convenioService="convenioService.content"></Detalhes>
            </Panel>
            <br><br>
            <DataTable></DataTable>
        </main>
    </div>
</template>
