import useAuthStore from "@/services/authStore";
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layout/DefaultLayout.vue"; // Layout global

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginView.vue"),
    },
    {
        path: "/cadastro",
        name: "cadastro-usuario",
        component: () => import("@/views/CadastroUsuarioView.vue"),
        meta: {
            requiresAuth: false,
            titulo: "Cadastro de Usuário",
            breadcrumb: [
                { nome: "Cadastro de Usuário" },
            ],
        }
    },
    {
        path: "/",
        component: DefaultLayout, // Aplicação do layout global
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: () => import("@/views/DashboardView.vue"),
                meta: {
                    requiresAuth: true,
                    titulo: "Início",
                }
            },
            {
                path: "convenio",
                name: "convenio",
                component: () => import("@/views/convenios/Convenio.vue"),
                meta: {
                    requiresAuth: true,
                    titulo: "Convênios",
                    breadcrumb: [
                        { nome: "Convênios" },
                    ],
                }
            },
            {
                path: "convenio/:convenioId",
                name: "convenio-detalhe",
                component: () => import("@/views/convenios-detalhes/ConvenioDetalhes.vue"),
                props: true,
                meta: {
                    requiresAuth: true,
                    titulo: "Detalhes do Convênio",
                    breadcrumb: [
                        { nome: "Convênios", url: "/convenio" },
                        { nome: "Detalhes do Convênio" },
                    ],
                }
            },
            {
                path: "convenio/:convenioId/aditivo/:aditivoId",
                name: "aditivo-detalhe",
                component: () => import("@/views/convenios-detalhes/aditivos/AditivoConvenioDetalhes.vue"),
                props: true,
                meta: {
                    requiresAuth: true,
                    titulo: "Detalhes do Aditivo",
                    breadcrumb: [
                        { nome: "Convênios", url: "/convenio" },
                        { nome: "Detalhes do Convênio", url: "/convenio/:convenioId" },
                        { nome: "Aditivo" },
                    ],
                }
            },
            {
                path: "/:pathMatch(.*)",
                name: "Error",
                component: () => import("@/views/404.vue"),
                meta: {
                    titulo: "Página não encontrada",
                    breadcrumb: [{ nome: "Erro 404" }],
                },
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

// Proteção das rotas
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.token) {
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;
