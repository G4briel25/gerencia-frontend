<script setup>
import MensagemToast from "@/components/MensagemToast.vue";

</script>

<template>
    <MensagemToast/>
    <div style="min-height: 95vh;">
        <router-view></router-view>
    </div>
</template>
