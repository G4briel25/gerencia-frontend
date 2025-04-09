<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
    <footer class="bg-gray-100 dark:bg-zinc-800 py-8 text-center text-gray-600 dark:text-gray-400 text-sm">
        <div class="container mx-auto px-4">
            <div class="mb-4">
                <h3 class="text-lg font-semibold dark:text-white mb-2">Conecte-se</h3>
                <ul class="flex justify-center space-x-4">
                    <li>
                        <div class="flex items-center">
                            <Icon icon="logos:linkedin-icon" width="24" height="24" class="mr-2"/>
                            <a href="https://www.linkedin.com/in/gabrieljauneribera/" target="_blank" rel="noopener noreferrer"
                               class="hover:text-blue-500 dark:hover:text-blue-400">
                                LinkedIn
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <Icon icon="simple-icons:github" width="24" height="24" class="mr-2"/>
                            <a href="https://github.com/G4briel25" target="_blank" rel="noopener noreferrer"
                               class="hover:text-gray-700 dark:hover:text-gray-300">
                                GitHub
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="mb-4">
                <h3 class="text-lg font-semibold dark:text-white mb-2">Fonte</h3>
                <ul class="flex justify-center space-x-4">
                    <li>
                        <div class="flex items-center mb-2">
                            <Icon icon="mingcute:code-fill" width="24" height="24" class="mr-2"/>
                            <a href="https://github.com/G4briel25/gerencia-frontend" target="_blank" class="hover:text-blue-500 dark:hover:text-blue-400">
                                Código do Projeto
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <p class="mb-2">
                Desenvolvido com paixão por
                <a href="https://www.linkedin.com/in/gabrieljauneribera/" target="_blank" rel="noopener noreferrer"
                   class="font-medium hover:text-blue-500 dark:hover:text-blue-400">
                    Gabriel
                </a>.
            </p>
            <p>&copy; {{ new Date().getFullYear() }} Gabriel/Convênios. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>