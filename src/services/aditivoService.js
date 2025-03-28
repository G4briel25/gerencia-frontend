import {defineStore} from "pinia";
import http from "@/services/http.js";

const aditivoServiceImpl = defineStore('AditivoServiceImpl', {
    state: () => ({
        content: [],
        objetoPadrao: {
            id: null,
            numeroAditivo: null,
            responsaveis: null,
            dataInicio: null,
            dataFim: null,
            valorTotalAditivo: null,
            situacaoDescricaoAditivo: null,
            convenioId: null,
        },
        cadastro: {
            objeto: {},
            showModal: false
        }
    }),

    actions: {
        async listarAditivoPorId(_convenioId) {
            try {
                const response = await http.get(`api/convenios/${_convenioId}/aditivos/listar`);
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao listar convênios:', error);
                this.content = [];
            }
        },

        async buscarPorId(_convenioId, _aditivoId) {
            try {
                const response = await http.get(`api/convenios/${_convenioId}/aditivos/${_aditivoId}`)
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao editar convênio:', error);
            }
        },

        async cadastrarAditivo(_convenioId, obj) {
            try {
                const response = await http.post(`/api/convenios/${_convenioId}/aditivos`, obj);
                if (response.status === 201) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao cadastrar o aditivo:', error);
            }
        },

        async atualizarAditivo(obj) {
            try {
                const response = await http.put(`/api/convenios/${obj.convenioId}/aditivos/${obj.id}`, obj);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao atualizar o aditivo:', error);
            }
        }
    }
});

export default aditivoServiceImpl;
