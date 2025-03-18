export const formatMoedaBr = (valor) => {
    if (valor === null || valor === undefined) return 'R$ 0,00';  // Caso o valor seja nulo ou undefined
    return 'R$ ' + valor
      .toFixed(2)
      .replace('.', ',') // Substitui ponto por vírgula
      .replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1.'); // Adiciona o ponto de milhar
  };