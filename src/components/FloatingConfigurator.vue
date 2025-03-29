<script setup>
import Button from 'primevue/button';
import {computed, onMounted} from 'vue';

const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('app-dark');
    localStorage.setItem('darkMode', isDark); // Salva a preferência no localStorage
};

const isDarkTheme = computed(() => {
    return document.documentElement.classList.contains('app-dark');
});

onMounted(() => {
    // Verifica se a preferência de tema está salva no localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        document.documentElement.classList.add('app-dark');
    }
});

</script>

<template>
    <span>
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </span>
</template>