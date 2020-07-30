let valores = [8, 1, 7, 4, 2, 9];

console.log(valores);

vetor();

console.log('______________________________________________________');

valores.sort(); //organiza os itens do vetor de forma crescente

console.log('______________________________________________________');

vetor();

console.log('______________________________________________________');

vetorCOPIA_DO_PYTHON_QUE_O_JAVASCRIPT_ROUBOU();

//exibe valores do vetor
function vetor(){
    for(let i = 0; i < valores.length; i++){
         console.log(`A posição ${i} tem o valor ${valores[i]}`);
    }
    return true;
}


//maneira simplificada mais recente do ECMASCRIPT
function vetorCOPIA_DO_PYTHON_QUE_O_JAVASCRIPT_ROUBOU(){
    for(let pos in valores){
        console.log(`A posição ${pos} tem o valor: ${valores[pos]}`);
    }
}

