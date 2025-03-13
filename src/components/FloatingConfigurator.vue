<script setup>
import Button from 'primevue/button'
import { ref } from 'vue';

const toggleDarkMode = ref(false);

</script>

<template>
    <div class="fixed flex gap-4 top-8 right-8">
        <Button type="button" @click="toggleDarkMode" rounded :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </div>
</template>
