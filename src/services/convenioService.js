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

        async buscarConvenios(filtro) {
            try {
                const response = await http.post('/api/convenios/filtrar', filtro);
                this.content = response.data;
            } catch (error) {
                console.error('Erro ao buscar convênios:', error);
                this.content = [];
            }
        },

        async buscarPorId(_convenioId) {
            try {
                const response = await http.get(`/api/convenios/${_convenioId}`)
                this.cadastro.objeto = response.data;
            } catch (error) {
                console.log('Erro ao buscar convênio por id:', error);
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

        async excluirCovenio(_convenioId) {
            try {
                const response = await http.delete(`/api/convenios/${_convenioId}`);
                if (response.status === 200) {
                    return { success: true };
                }
            } catch (error) {
                console.log('Erro ao excluir o convênio:', error);
            }
        }
    }
});

export default convenioServiceImpl;