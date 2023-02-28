const stringInvert = (palavra) => {
    let numChr = palavra.split('');
    let novoArr=[]
    for(let i = numChr.length-1; i >= 0; i--){
        novoArr.push(palavra[i]);
    }
    let novaPalavra = novoArr.join('');

    return novaPalavra;
}
let str = 'banana'
console.log(stringInvert(str))