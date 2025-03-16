import { defineStore } from "pinia";
import http from '@/services/http';

const convenioServiceImpl = defineStore('ConvenioServiceImpl', {
    state: () => ({
        conentent: [],
    }),

    actions: {
        async listarConvenios() {
            const response = await http.get('/api/convenios/listar');
            this.conentent = await response.data;
        },
    }
});

export default convenioServiceImpl;