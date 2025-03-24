<script setup>

</script>

<template>
    <div style="height: 95vh">
        <router-view></router-view>
    </div>
    <div class="copyright">Copyright by Gabriel</div>
</template>

<style scoped>
.copyright {
    text-align: center;
}

@media (max-width: 996px) {
    .copyright {
        display: none;
    }
}
</style>