<script setup>
import { Icon } from '@iconify/vue';
import { DatePicker, InputText, Select } from 'primevue';
import { defineProps } from 'vue';
import { formatMoedaBr } from '@/utils/formatCurrency';
import { formatDataBr } from '@/utils/formatDate';

const props = defineProps(['convenioService']);

</script>

<template>
    <div class="flex flex-col gap-4 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-8">
        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="lucide:building-2" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Identificador:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.id }}</span>
            </div>
        </div>

        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="bx:file" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Número do Convênio:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.numeroConvenio }}</span>
            </div>
        </div>

        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="bx:file" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Número do Processo:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.numeroProcesso }}</span>
            </div>
        </div>

        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="lucide:building-2" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Proponente:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.proponente }}</span>
            </div>
        </div>

        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="lucide:user" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Convenente:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.convenente }}</span>
            </div>
        </div>

        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="tabler:users" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Responsáveis:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.responsaveis }}</span>
            </div>
        </div>

        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="flowbite:file-pen-outline" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Objeto:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.objeto }}</span>
            </div>
        </div>

        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="tdesign:money" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Valor Total:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ formatMoedaBr(convenioService.valorTotal) }}</span>
            </div>
        </div>

        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="tdesign:money" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Tipo de Convenio:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.tipoDeConvenio }}</span>
            </div>
        </div>

        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="tdesign:money" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Situação:
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ convenioService.situacaoDescricao }}</span>
            </div>
        </div>

        <div class="px-2 bg-neutral-200 dark:bg-neutral-800 md:bg-transparent md:dark:bg-transparent">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="bx:calendar" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Data Início
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ formatDataBr(convenioService.dataInicio) }}</span>
            </div>
        </div>
        
        <div class="px-2">
            <div class="flex justify-between md:justify-normal mb-1">
                <Icon icon="bx:calendar" width="24" height="24" class="hidden md:block md:mr-2" />
                <label class="mr-2 text-md font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Data Fim
                </label>
                <span class="text-gray-900 dark:text-gray-200">{{ formatDataBr(convenioService.dataFim) }}</span>
            </div>
        </div>
    </div>
</template>