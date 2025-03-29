<script setup>

import {Icon} from "@iconify/vue";
import Panel from "primevue/panel";
import funcoes from '@/utils/funcoes.js';

const { formatarDataBr, formatarMoedaBr } = funcoes();

const props = defineProps(['aditivoConvenioService']);
</script>

<template>
    <Panel header="Filtros" class="shadow-md">
        <br>
        <div class="flex flex-col gap-4 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-8">
            <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="tabler:number" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Identificador:
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ aditivoConvenioService.id }}</span>
                </div>
            </div>

            <div class="px-2">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="bx:file" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Número do Aditivo:
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ aditivoConvenioService.numeroAditivo }}</span>
                </div>
            </div>

            <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="tabler:users" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Responsáveis:
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ aditivoConvenioService.responsaveis }}</span>
                </div>
            </div>

            <div class="px-2">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="tdesign:money" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Valor Total:
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ formatarMoedaBr(aditivoConvenioService.valorTotalAditivo) }}</span>
                </div>
            </div>

            <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="bx:file" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Situação:
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ aditivoConvenioService.situacaoDescricaoAditivo }}</span>
                </div>
            </div>

            <div class="px-2">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="bx:calendar" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Data Início
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ formatarDataBr(aditivoConvenioService.dataInicio) }}</span>
                </div>
            </div>

            <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
                <div class="flex justify-between md:justify-normal mb-1">
                    <Icon icon="bx:calendar" width="24" height="24" class="hidden md:block md:mr-2" />
                    <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Data Fim
                    </label>
                    <span class="text-gray-900 dark:text-gray-200">{{ formatarDataBr(aditivoConvenioService.dataFim) }}</span>
                </div>
            </div>
        </div>
    </Panel>
</template>

<style scoped>

</style>