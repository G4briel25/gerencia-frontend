import { defineStore } from "pinia";
import http from '@/services/http';

const convenioServiceImpl = defineStore('ConvenioServiceImpl', {
    state: () => ({
        content: [],
        cadastro: {
            objeto: {},
            showModal: false
        }
    }),

    actions: {
        async listarConvenios() {
            try {
                const response = await http.get('/api/convenios/listar');
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao listar convênios:', error);
                this.content = [];
            }
        },
    }
});

export default convenioServiceImpl;