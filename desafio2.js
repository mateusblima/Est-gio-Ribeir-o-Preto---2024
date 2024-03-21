function sequenciaFibonacci(numero){
    let n1 = 0;
    let n2 = 1;
    let n3;

    while (n1 <= numero){
        if (n1 === numero){
            return true;
        }
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3
    }
    return false;
}

let numero = 6;

if(sequenciaFibonacci(numero)){
    console.log(`O numero ${numero} pertence a sequencia fibonacci!`)
} else {
    console.log(`O numero ${numero} nao pertence a sequencia fibonacci!`)
}