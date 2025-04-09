<template>
    <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-white">
            <div class="relative mx-auto mb-8">
                <img src="../assets/imgs/404.svg" alt="404" class="w-96">
            </div>
            <h1 class="text-4xl font-bold mb-4 text-red-500 dark:text-red-400">
                Oops! Página Não Encontrada
            </h1>
            <p class="mb-6 text-gray-600 dark:text-gray-50">
                A página que você tentou acessar não existe ou foi movida.
            </p>
            <router-link
                to="/"
                class="font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700"
            >
                Voltar para o Início
            </router-link>
    </div>
</template>
