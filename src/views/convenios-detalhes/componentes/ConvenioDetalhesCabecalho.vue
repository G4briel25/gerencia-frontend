<script setup>
import {Icon} from '@iconify/vue';
import {computed, defineProps} from 'vue';
import {useConfirm, useToast} from "primevue";
import {useRouter} from "vue-router";

const router = useRouter();
const props = defineProps(['convenioService', 'listaLancamentos', 'listaAditivos']);
const confirm = useConfirm();
const toast = useToast();

const excluirConvenio = (_convenioId) => {
    confirm.require({
        message: 'Você deseja excluir este convênio?',
        header: 'Zona de Perigo',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancelar',
        rejectProps: {
            label: 'Cancelar',
            severity: 'secondary',
            outlined: true
        },
        acceptProps: {
            label: 'Excluir',
            severity: 'danger'
        },
        accept: async () => {
            try {
                const result = await props.convenioService.excluirCovenio(_convenioId);
                if (result.success) {
                    toast.add({severity: 'info', summary: 'Confirmado', detail: 'Convênio excluído', life: 5000});
                    await router.push({name: 'convenio'});
                } else {
                    toast.add({severity: 'error', summary: 'Erro', detail: result.message || 'Falha ao excluir o convênio.', life: 5000});
                }
            } catch (error) {
                console.error('Erro ao excluir convênio:', error);
                toast.add({severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao tentar excluir o convênio.', life: 5000});
            }
        },
    });
};

const isValid = computed(() => {
    return props.listaLancamentos && props.listaLancamentos.length > 0 || props.listaAditivos && props.listaAditivos.length > 0;
});

</script>

<template>
    <header class="mt-2">
        <div class="py-4 border-b dark:border-b-neutral-400">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <Icon icon="bx:file" width="36" height="36" class="hidden md:block text-blue-700 dark:text-white" />
                    <h1 class="ml-2 text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Detalhes do Convênio</h1>
                </div>
                <button
                    :disabled="isValid"
                    @click="excluirConvenio(props.convenioService.convenioDetalhado.id)"
                    v-tooltip.left="isValid ? 'Para excluir este convênio, deve limpar todos os lançamentos e aditivos' : 'Excluir Convênio'"
                    class="p-2 gap-0 border border-transparent rounded-md shadow-sm
                        text-white bg-red-500 hover:bg-red-600
                         focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-red-500
                        disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
                >
                    <Icon icon="iconamoon:trash" width="24" height="24"/>
                </button>
            </div>
        </div>
    </header>
</template>
