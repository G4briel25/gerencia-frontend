/**
 * Função para formatar um número como moeda no padrão PT-BR
 * @param {number} valor - O valor numérico que será formatado
 * @returns {string} - O valor formatado como moeda no formato PT-BR
 */
export function formatMoedaBr(valor) {
    if (valor === null || valor === undefined) {
        return 'R$ 0,00'; // Caso o valor seja null ou undefined
    }
    
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}
