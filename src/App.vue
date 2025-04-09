<script setup>
import MensagemToast from "@/components/MensagemToast.vue";
import LoadingModal from "@/components/LoadingModal.vue";
import {ref} from "vue";

const isLoading = ref(false);

const startLoading = () => {
    isLoading.value = true;
};

const endLoading = () => {
    isLoading.value = false;
};
</script>

<template>
    <LoadingModal :isVisible="isLoading"/>
    <MensagemToast/>
    <div>
        <router-view
            @start-loading="startLoading"
            @end-loading="endLoading"
        ></router-view>
    </div>
</template>
