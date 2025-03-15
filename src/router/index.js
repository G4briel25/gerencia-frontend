import useAuthStore from "@/services/authStore";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")
        },

        {
            path: "/dashboard",
            name: "dashboard",
            component: () => import("@/views/DashboardView.vue"),
            meta: { requiresAuth: true }
        },

        {
            path: "/convenio",
            name: "convenio",
            component: () => import("@/cadastro/Convenio.vue"),
            meta: { requiresAuth: true }
        },

        {
            path: "/convenio/:id",
            name: "convenio-detalhe",
            component: () => import("@/cadastro/ConvenioDetalhe.vue"),
            meta: { requiresAuth: true },
            // children: [
            //     {
            //         path: "aditivos",
            //         name: "aditivos",
            //         component: () => import("@/cadastro/Aditivos.vue")
            //     },
            //     {
            //         path: "lancamentos",
            //         name: "lancamentos",
            //         component: () => import("@/cadastro/Lancamentos.vue")
            //     }
            // ]
        },

        // {
        //     path: "/transparencia",
        //     beforeEnter() {
        //         window.location.href = "https://site-publico.com";
        //     }
        // }
    ]
});

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.token) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
