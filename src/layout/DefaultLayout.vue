<script setup>
import NavBar from "@/components/NavBar.vue";
import FooterRodape from "@/components/FooterRodape.vue";
</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <div class="flex-grow">
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                <router-view @start-loading="$emit('start-loading')" @end-loading="$emit('end-loading')"></router-view>
            </main>
        </div>

        <footer>
            <FooterRodape></FooterRodape>
        </footer>
    </div>
</template>

<style scoped>
main {
    padding: 20px;
}
</style>
