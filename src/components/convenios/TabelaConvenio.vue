<script setup>
import { Icon } from '@iconify/vue';
import { Column, DataTable } from 'primevue';
import { defineProps } from 'vue';
import { formatMoedaBr } from '@/utils/formatCurrency';
import { formatDataBr } from '@/utils/formatDate';

const props = defineProps({
  convenios: {
    type: Array,
    required: true,
  },
});

</script>

<template>
    <DataTable :value="props.convenios" showGridlines paginator :rows="5"
        :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50">
        <Column field="id" header="ID"></Column>
        <Column field="numeroConvenio" header="Convênio"></Column>
        <Column field="proponente" header="Proponente"></Column>
        <Column field="convenente" header="Convenente"></Column>
        <Column field="responsaveis" header="Responsáveis"></Column>
        <Column field="objeto" header="Objeto"></Column>
        <Column field="dataInicio" header="Data Início">
            <template #body="slotProps">
                {{ formatDataBr(slotProps.data.dataInicio) }}
            </template>
        </Column>
        <Column field="dataFim" header="Data Fim">
            <template #body="slotProps">
                {{ formatDataBr(slotProps.data.dataFim) }}
            </template>
        </Column>
        <Column field="valorTotal" header="Valor Total Original">
            <template #body="slotProps">
                {{ formatMoedaBr(slotProps.data.valorTotal) }}
            </template>
        </Column>
        <Column header="Ações">
            <template #body>
                <div class="flex gap-2">
                    <button title="Editar" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                        <Icon icon="mage:edit-pen" width="24" height="24" />
                    </button>
                    <button title="Detalhar" class="bg-gray-100 rounded-full p-2 text-blue-600 hover:text-blue-800 hover:bg-slate-200 transition duration-200 ease-in-out dark:bg-gray-800 dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700">
                        <Icon icon="fluent:eye-12-regular" width="24" height="24" />
                    </button>
                </div>
            </template>
        </Column>
    </DataTable>
</template>
