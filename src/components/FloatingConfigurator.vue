<script setup>
import AppConfigurator from '@/layout/AppConfigurator.vue';
import { useLayout } from '@/layout/composables/layout';
import Button from 'primevue/button'
import { ref } from 'vue';

const { toggleDarkMode, isDarkTheme } = useLayout();
const showConfigurator = ref(false);

const toggleConfigurator = () => {
    showConfigurator.value = !showConfigurator.value;
};
</script>

<template>
    <div class="fixed flex gap-4 top-8 right-8">
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
        
        <div class="relative">
            <!-- Botão para abrir/fechar -->
            <Button
                icon="pi pi-palette"
                @click="toggleConfigurator"
                type="button"
                rounded
            />

            <!-- Componente AppConfigurator visível apenas quando showConfigurator = true -->
            <div v-if="showConfigurator" 
                class="absolute config-panel top-[3.25rem] right-0 w-56 p-4 bg-gray-50 dark:bg-neutral-900 border border-gray-50 rounded-md origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.05),0px_0px_2px_rgba(0,0,0,0.5),0px_1px_4px_rgba(0,0,0,0.1)]"
            >
                <AppConfigurator />
            </div>
        </div>
    </div>
</template>
