<script setup>
import convenioServiceImpl from '@/services/convenioService.js';
import {onMounted, defineEmits} from 'vue';
import ConvenioCabecalho from '@/views/convenios/componentes/ConvenioCabecalho.vue';
import ConvenioFiltroBusca from '@/views/convenios/componentes/ConvenioFiltroBusca.vue';
import ConvenioDataTable from '@/views/convenios/componentes/ConvenioDataTable.vue';
import {Panel} from 'primevue';
import useAuthStore from '@/services/authStore.js';
import {useRouter} from "vue-router";

const emit = defineEmits(['start-loading', 'end-loading']);
const router = useRouter();
const autStore = useAuthStore();
const convenioService = convenioServiceImpl();

const buscar = async (filtro) => {
    emit('start-loading');
    try {
        const isFiltroVazio = Object.values(filtro).every(value => !value);

        if (isFiltroVazio) {
            await convenioService.listarConvenios();
        } else {
            await convenioService.buscarConvenios(filtro);
        }
    } catch (error) {
        console.log("Erro ao listar os convênios", error.message);
    } finally {
        emit('end-loading');
    }
};

const limpar = () => {
    convenioService.content = [];
};

onMounted( async () => {
    emit('start-loading');
    try {
        await convenioService.listarConvenios();
    } catch (error) {
        if (error.response && error.response.status === 401) {
            autStore.clearToken();
            await router.push({name: 'login'});
        } else {
            console.error('Erro ao listar convênios:', error);
        }
    } finally {
        emit('end-loading');
    }
});
</script>

<template>
    <div class="py-2 px-5">
        <ConvenioCabecalho></ConvenioCabecalho>
        <br>
        <main>
            <Panel header="Filtros" class="shadow-md">
                <br>
                <ConvenioFiltroBusca @buscarConvenios="buscar" @limparFiltros="limpar" />
            </Panel>
            <br><br>
            <ConvenioDataTable :convenios="convenioService.content"></ConvenioDataTable>
        </main>
    </div>
</template>
