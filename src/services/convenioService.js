import { defineStore } from "pinia";
import http from '@/services/http';

const convenioServiceImpl = defineStore('ConvenioServiceImpl', {
    state: () => ({
        content: [],
        convenioDetalhado: [],
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

        async cadastrarConvenio(obj) {
            try {
                const response = await http.post('/api/convenios', obj);
                if (response.status === 201) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao cadastrar o convênio:', error);
            }
        },

        async atualizarConvenio(obj) {
            try {
                const response = await http.put(`/api/convenios/${obj.id}`, obj);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao atualizar o convênio:', error);
            }
        },


        async buscarPorId(_convenioId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}`)
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao editar convênio:', error);
            }
        },

        async listarConvenioPorId(_convenioId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}/detalhado`);
                this.convenioDetalhado = response.data;
            } catch (error) {
                console.log('Erro ao listar convênio por id:', error);                
            }
        },

        async excluirCovenio(_convenioId) {
            try {
                const response = await http.delete(`/api/convenios/${_convenioId}`);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao excluir o convênio:', error);
                return { success: false, message: 'Erro ao excluir convênio' };
            }
        }
    }
});

export default convenioServiceImpl;