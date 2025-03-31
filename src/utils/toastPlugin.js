import ToastService from 'primevue/toastservice';

export default {
    install: (app) => {
        app.config.globalProperties.$toast = ToastService;
    }
};