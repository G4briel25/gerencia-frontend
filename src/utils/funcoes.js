const funcoes = () => {

    const formatarDataBr = (data) => {
        if (!data) return 'N/D'; // Retorna a mensagem se a data for null, undefined ou uma string vazia

        const date = new Date(data);

        // Verifica se a data é válida
        if (isNaN(date.getTime())) return 'Data não informada';

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const formatarMoedaBr = (valor) => {
        if (valor === null || valor === undefined) return 'R$ 0,00';  // Caso o valor seja nulo ou undefined
        return 'R$ ' + valor
            .toFixed(2)
            .replace('.', ',') // Substitui ponto por vírgula
            .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.'); // Adiciona o ponto de milhar
    };

    return {
        formatarDataBr,
        formatarMoedaBr
    };
};

export default funcoes;