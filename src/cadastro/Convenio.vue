<script setup>
import { Icon } from '@iconify/vue';
import NavBar from '@/components/NavBar.vue';
import { InputText, Panel } from 'primevue';

</script>

<template>
    <div class="max-w-7xl mx-auto">
        <NavBar></NavBar>
        <header class="shadow-sm mt-20">
            <div class="p-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="#0058ff" d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995zm-2 1h-5V4H5v16h14zM8 7h3v2H8zm0 4h8v2H8zm0 4h8v2H8z"/></svg>
                    </div>
                    <h1 class="ml-2 text-2xl font-bold text-gray-900">Gestão de Convênios</h1>
                </div>
                <button
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <Icon icon="ic:baseline-plus" width="24" height="24" class="mr-2" />
                    Novo Convênio
                </button>
                </div>
            </div>
      </header>
      <br>
      <main class="">
        <Panel header="Filtros" class="shadow-sm">
            <br>
            <div class="">
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full md:w-1/3">
                        <div class="flex mb-1">
                            <Icon icon="lucide:building-2" width="24" height="24" class="mr-2" />
                            <label class="block text-sm font-medium text-gray-700 mb-1">
                                Convenente
                            </label>
                        </div>
                        <InputText />
                    </div>
                </div>
            </div>
        </Panel>
      </main>
    </div>
</template>

<style lang="scss" scoped>

</style>
