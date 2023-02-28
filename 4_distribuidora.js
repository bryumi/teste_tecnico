const faturamento = [
    {estado: 'SP', valor:67836.43},
    {estado: 'RJ', valor:36678.66},
    {estado: 'MG', valor:29229.88},
    {estado: 'ES', valor:27165.48},
    {estado: 'Outros', valor:19849.53},
];

const total = () => {
    let soma = 0;
    for(let i = 0; i < faturamento.length; i++){
        let num = faturamento[i].valor;
        soma = num + soma;
    }
    return soma;
}
const percentualCadaEstado = () => {
    for(let i = 0; i < faturamento.length; i++){
        let num = faturamento[i].valor;
        let perc = ((num/total())*100).toFixed(2);
        faturamento[i]['percentual'] = perc;
    }
    return faturamento;
}
console.log(percentualCadaEstado())