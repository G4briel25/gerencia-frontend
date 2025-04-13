<script setup>
import { Icon } from "@iconify/vue";
import { Breadcrumb, Button, Menu } from "primevue";
import { ref, computed } from "vue";
import FloatingConfigurator from "@/components/FloatingConfigurator.vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Mobile
const homeMenu = ref({
    label: "Início",
    to: "/",
});


const homeBreadcrumb = ref({
    icon: "pi pi-home",
    to: "/",
});

const items = computed(() => {
    const matched = route.matched;
    if (!matched || matched.length === 0) {
        return [];
    }

    return matched.reduce((acc, item) => {
        if (item.meta.breadcrumb) {
            return acc.concat(
                item.meta.breadcrumb.map((breadcrumbItem) => {
                    let url = breadcrumbItem.url;

                    if (url) {
                        // Substitui os parâmetros dinâmicos na URL
                        Object.keys(route.params).forEach(param => {
                            url = url.replace(`:${param}`, route.params[param]);
                        });
                    }

                    return {
                        label: breadcrumbItem.nome,
                        to: url ? { path: url } : undefined,
                    };
                })
            );
        }
        return acc;
    }, []);
});

const menu = ref(null);

const toggle = (event) => {
    if (menu.value) {
        menu.value.toggle(event);
    }
};
</script>

<template>
    <div class="hidden md:flex rounded-sm shadow-sm p-2 pr-6 mx-auto w-full justify-between items-center dark:bg-neutral-900/90">
        <Breadcrumb :home="homeBreadcrumb" :model="items">
            <template #item="{ item, props }">
                <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span v-if="item.icon" :class="item.icon" class="text-primary mr-1" />
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
        <FloatingConfigurator />
    </div>


<!--    Mobile   -->
    <div class="flex justify-between pl-6 pt-6 pr-5 md:hidden">
        <Button severity="info" type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
            <Icon icon="material-symbols:menu" width="24" height="24" />
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="[homeMenu, ...items]" :popup="true">
            <template #item="{ item, props }">
                <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
                    <a :href="href" v-bind="props.action" @click="navigate">
                        <span class="text-primary font-semibold">{{ item.label }}</span>
                    </a>
                </router-link>
                <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                    <span class="text-surface-700 dark:text-surface-0">{{ item.label }}</span>
                </a>
            </template>
        </Menu>
        <FloatingConfigurator />
    </div>
</template>

<style scoped>
.p-breadcrumb {
    background-color: transparent;
}
</style>