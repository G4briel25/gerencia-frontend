<script setup>
import Button from 'primevue/button'

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('app-dark');
}

</script>

<template>
    <span>
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </span>
</template>
