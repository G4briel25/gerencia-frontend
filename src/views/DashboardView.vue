<script setup>
import NavBar from '@/components/NavBar.vue';
import TelasDeMenus from '@/layout/TelasDeMenus.vue';
import http from '@/services/http';
import { ref, onMounted } from 'vue';

const users = ref([]);

async function getUser() {
    try {
        const response = await http.get('/api/usuario');
        console.log(response.data);
        users.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(async () => {
    await getUser();
});
</script>

<template>
    <div class="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <TelasDeMenus></TelasDeMenus>
        <router-view></router-view>
    </div>
</template>
