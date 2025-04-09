<script setup>
import { HalfCircleSpinner } from 'epic-spinners';
import { defineProps } from 'vue';

const props = defineProps({
    isVisible: {
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <div v-if="isVisible" class="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
        <div class="flex flex-col justify-center items-center">
            <half-circle-spinner
                :animation-duration="1000"
                :size="60"
                color="#0084ff"
            />
        </div>
    </div>
</template>
