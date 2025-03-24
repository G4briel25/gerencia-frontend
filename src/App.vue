<template>
    <div style="min-height: 95vh;">
        <router-view></router-view>
    </div>
    <div class="copyright">Copyright by Gabriel</div>
</template>

<style scoped>
.copyright {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 10px 0;
}

@media (max-width: 996px) {
    .copyright {
        display: none;
    }
}
</style>