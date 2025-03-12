import 'primeicons/primeicons.css';
import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Aura from '@primeuix/themes/aura';


import App from './App.vue'
import AppState from "./plugins/appState.js";
import router from './router/index.js'


const app = createApp(App)

app.use(createPinia())
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});

app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);


app.mount("#app");