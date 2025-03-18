<script setup>
import NavBar from '@/components/NavBar.vue';
import convenioServiceImpl from '@/services/convenioService.js';
import { onMounted, ref } from 'vue';
import Header from '@/components/convenios/Header.vue';
import FiltroDeBusca from '@/components/convenios/FiltroDeBusca.vue';
import TabelaConvenio from '@/components/convenios/TabelaConvenio.vue';
import { Panel } from 'primevue';

const convenioService = convenioServiceImpl();

onMounted( async () => {
    await convenioService.listarConvenios();
});
</script>

<template>
    <NavBar></NavBar>
    <div class="py-2 px-5">
        <Header></Header>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <FiltroDeBusca></FiltroDeBusca>
            </Panel>
            <br><br>
            <TabelaConvenio :convenios="convenioService.content"></TabelaConvenio>
        </main>
    </div>
</template>
