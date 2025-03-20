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
            meta: { 
                requiresAuth: true,
                titulo: "Início",
                breadcrumb: [
                    {nome: "Início"}
                ],
            }
        },

        {
            path: "/convenio",
            name: "convenio",
            component: () => import("@/convenios/Convenio.vue"),
            meta: { 
                requiresAuth: true,
                titulo: "Convênios",
                breadcrumb: [
                    {nome: "Início", url: "/"},
                    {nome: "Convênios"},
                ],
            }
        },

        {
            path: "/convenio/:id",
            name: "convenio-detalhe",
            component: () => import("@/convenios/ConvenioDetalhe.vue"),
            props: true,
            meta: { 
                requiresAuth: true,
                titulo: "Convênios",
                breadcrumb: [
                    {nome: "Início", url: "/"},
                    {nome: "Convênios", url: "/dashboard/convenios"},
                    {nome: "Detalhes"},
                ],
            }
        }
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
