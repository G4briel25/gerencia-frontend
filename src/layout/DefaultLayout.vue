<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
    <div>
        <NavBar></NavBar>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<style scoped>
main {
    padding: 20px;
}
</style>
