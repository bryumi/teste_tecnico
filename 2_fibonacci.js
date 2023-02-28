function fibonacci(numFib){
    let ant = 0;
    let atual = 1;
    let aux = 0;
    do {
        aux = atual;
        atual = ant + aux;
        ant = aux;

        if(numFib == atual){
            return `${numFib} pertence a sequencia de fibonacci`;
        }
    } while(numFib > atual)

    return `${numFib} não pertence a sequencia de fibonacci`;
}

console.log(fibonacci(13));