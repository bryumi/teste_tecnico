const fs = require ('fs');
const path = require('path');
const vendasFilePath = path.join(__dirname,'dados.json');

const vendas = JSON.parse(fs.readFileSync(vendasFilePath, 'utf-8'));
const maiorValor = () =>{
    let maior = 0;
    for(let i = 0; i < vendas.length; i++){
        let num = parseFloat(vendas[i].valor)
        
        if(num > maior){
            maior = num;
        }
    }
    return `${maior} É o maior valor de faturamento diário`;
}
const menorValor = () =>{
    let menor = 0
    for(let i = 0; i < vendas.length; i++){
        let num = parseFloat(vendas[i].valor)
        if(menor === 0 || num < menor){
            menor = num;
        }
    }
    return `${menor} É o menor valor de faturamento diário`;
}
const diasSuperioresMedia = () =>{
    let soma = 0;
    for(let i = 0; i < vendas.length; i++){
        let num = parseFloat(vendas[i].valor)
        soma = num + soma;
    }
    let media = (soma/vendas.length).toFixed(4)
    let dias = 0;
    for(let j = 0; j < vendas.length; j++){
        let num = parseFloat(vendas[j].valor)
        if(num > media){
            dias++;
        }
    }
    return `${dias} é o número de dias em que o valor de faturamento diário foi superior à média mensal`;
}

console.log(maiorValor());
console.log(menorValor());
console.log(diasSuperioresMedia());
