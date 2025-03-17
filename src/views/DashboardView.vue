<script setup>
import NavBar from '@/components/NavBar.vue';
import TelasDeMenus from '@/layout/TelasDeMenus.vue';

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <TelasDeMenus></TelasDeMenus>
        <router-view></router-view>
    </div>
</template>
