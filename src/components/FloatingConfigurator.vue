<script setup>
import Button from 'primevue/button';
import { computed } from 'vue';

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('app-dark');
};

const isDarkTheme = computed(() => {
    return document.documentElement.classList.contains('app-dark');
});

</script>

<template>
    <span>
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </span>
</template>