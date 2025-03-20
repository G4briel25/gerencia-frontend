<script setup>
import {Breadcrumb, Button, Menu} from "primevue";
import {ref} from "vue";
import FloatingConfigurator from "@/components/FloatingConfigurator.vue";
import {Icon} from "@iconify/vue";

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

const menu = ref();
const toggle = (event) => {
    menu.value.toggle(event);
};

</script>

<template>
    <div class="hidden md:flex rounded-sm shadow-sm p-2 pr-6 mx-auto w-full justify-between items-center dark:bg-neutral-900/90">
        <Breadcrumb :home="home" :model="items" />
        <FloatingConfigurator />
    </div>
    <div class="flex justify-between pl-6 pt-6 pr-5 md:hidden">
        <Button severity="info" type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
            <Icon icon="material-symbols:menu" width="24" height="24"/>
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        <FloatingConfigurator />
    </div>
</template>

<style scoped>
.p-breadcrumb {
    background-color: transparent;
}
</style>
