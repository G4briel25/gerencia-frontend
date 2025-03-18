/**
 * Função para formatar uma data no padrão PT-BR (dd/mm/yyyy)
 * @param {string | Date} data - A data que será formatada
 * @returns {string} - A data formatada no formato PT-BR (dd/mm/yyyy) ou uma mensagem se a data for inválida
 */
export function formatDataBr(data) {
    if (!data) return 'N/D'; // Retorna a mensagem se a data for null, undefined ou uma string vazia

    const date = new Date(data);
    
    // Verifica se a data é válida
    if (isNaN(date.getTime())) return 'Data não informada';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
