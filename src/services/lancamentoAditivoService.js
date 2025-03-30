import {defineStore} from "pinia";
import http from "@/services/http.js";

const lancamentoAditivoServiceImpl = defineStore('LancamentoAditivoServiceImpl', {
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
        async listarLancamentoAditivo(_convenioId, _aditivoId) {
            try {
                console.log(_convenioId, _aditivoId)
                const response = await http.get(`/api/convenios/${_convenioId}/aditivos/${_aditivoId}/lancamentos/listar-lancamentos-do-aditivo`);
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao listar convênios:', error.msg);
                this.content = [];
            }
        },

        async buscarPorId(_convenioId, _aditivoId, _lancamentoId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}/aditivos/${_aditivoId}/lancamentos/${_lancamentoId}`);
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao editar convênio:', error);
            }
        },

        async cadastrarLancamento(_convenioId, _aditivoId, obj) {
            try {
                const response = await http.post(`/api/convenios/${_convenioId}/aditivos/${_aditivoId}/lancamentos`, obj);
                if (response.status === 201) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao cadastrar o lançamento:', error)
            }
        },

        async atualizarLancamento(obj) {
            try {
                const response = await http.put(`/api/convenios/${obj.convenioId}/aditivos/${obj.aditivoId}/lancamentos/${obj.id}`, obj);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao atualizar o lançamento:', error);
            }
        },

        async excluirLancamento(_convenioId, _aditivoId, _lancamentoId) {
            try {
                const response = await http.delete(`/api/convenios/{convenioId}/aditivos/{aditivoId}/lancamentos`);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao excluir o lançamento:', error);
                return { success: false, message: 'Erro ao excluir lançamento' };
            }
        }
    }
});

export default lancamentoAditivoServiceImpl;