import {defineStore} from "pinia";
import http from "@/services/http.js";

const lancamentoConvenioServiceImpl = defineStore('LancamentoConvenioServiceImpl', {
    state: () => ({
        content: [],
        objetoPadrao: {
            id: null,
            dataRepasse: null,
            exercicio: null,
            valorPago: null,
            convenioId: null,
            aditivoId: null,
        },
        cadastro: {
            objeto: {},
            showModal: false
        }
    }),

    actions: {
        async listarLancamento(_convenioId) {
            try {
                const response = await http.get(`api/convenios/${_convenioId}/lancamentos/listar`);
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao listar convênios:', error);
                this.content = [];
            }
        },

        async buscarPorId(_convenioId, _lancamentoId) {
            try {
                const response = await http.get(`api/convenios/${_convenioId}/lancamentos/${_lancamentoId}`)
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao editar convênio:', error);
            }
        },
    }
});

export default lancamentoConvenioServiceImpl;