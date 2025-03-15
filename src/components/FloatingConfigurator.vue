<script setup>
import Button from 'primevue/button'

const toggleDarkMode = () => {
    document.documentElement.classList.toggle('app-dark');
}

</script>

<template>
    <div>
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </div>
</template>
