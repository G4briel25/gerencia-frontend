<script setup>
import { Breadcrumb } from "primevue";
import Select from "primevue/select";
import { ref, computed } from "vue";
import FloatingConfigurator from "@/components/FloatingConfigurator.vue";

const home = ref({
    icon: 'pi pi-home'
});
const items = ref([
    { label: 'Electronics' }, 
    { label: 'Computer' }, 
    { label: 'Accessories' }, 
    { label: 'Keyboard' }, 
    { label: 'Wireless' }
]);

</script>

<template>
    <div 
        class="fixed z-10 top-0 rounded-sm
            bg-gray-50/90 backdrop-blur-sm
            p-2 max-w-7xl mx-auto w-full flex 
            justify-between items-center 
          dark:bg-neutral-900/90"
        >
            <Breadcrumb :home="home" :model="items"/>
            <FloatingConfigurator></FloatingConfigurator>
    </div>
</template>

<style scoped>
.p-breadcrumb {
    background-color: transparent;
}
</style>