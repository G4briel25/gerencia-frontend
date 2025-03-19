import { defineStore } from "pinia";
import http from '@/services/http';

const convenioServiceImpl = defineStore('ConvenioServiceImpl', {
    state: () => ({
        content: [],
        objetoPadrao: {
            id: null,
            numeroConvenio: null,
            objeto: null,
            numeroProcesso: null,
            proponente: null,
            convenente: null,
            responsaveis: null,
            dataInicio: null,
            dataFim: null,
            valorTotal: null,
            tipoDeConvenio: null,
            situacaoDescricao: null
        },
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

        async buscarPorId(_convenioId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}`)
                this.objetoPadrao = response.data;
            } catch (error) {
                console.log('Erro ao editar convênio:', error);
            }
        },

        async listarConvenioPorId(_convenioId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}/detalhado`);
                this.content = response.data;
            } catch (error) {
                console.log('Erro ao listar convênio por id:', error);                
            }
        }
    }
});

export default convenioServiceImpl;