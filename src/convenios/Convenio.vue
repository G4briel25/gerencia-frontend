<script setup>
import NavBar from '@/components/NavBar.vue';
import convenioServiceImpl from '@/services/convenioService.js';
import {onMounted} from 'vue';
import ConvenioCabecalho from '@/convenios/convenios-componentes/ConvenioCabecalho.vue';
import ConvenioFiltroBusca from '@/convenios/convenios-componentes/ConvenioFiltroBusca.vue';
import ConvenioDataTable from '@/convenios/convenios-componentes/ConvenioDataTable.vue';
import {Panel} from 'primevue';
import useAuthStore from '@/services/authStore';
import {useRouter} from "vue-router";

const router = useRouter();
const autStore = useAuthStore();
const convenioService = convenioServiceImpl();

onMounted( async () => {
    try {
        await convenioService.listarConvenios();
    } catch (error) {
        if (error.response && error.response.status === 401) {
            autStore.clearToken();
            await router.push({name: 'login'});
        } else {
            console.error('Erro ao listar convênios:', error);
        }
    }
});
</script>

<template>
    <NavBar></NavBar>
    <div class="py-2 px-5">
        <ConvenioCabecalho></ConvenioCabecalho>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <ConvenioFiltroBusca></ConvenioFiltroBusca>
            </Panel>
            <br><br>
            <ConvenioDataTable :convenios="convenioService.content"></ConvenioDataTable>
        </main>
    </div>
</template>
