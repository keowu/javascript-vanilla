let valores = [8, 1, 7, 4, 2, 9];

valores.indexOf(7); // retorna a posição 3 que tem a ocorrencia do número 7
valores.indexOf(3); // retorna a posição -1 porque não tem nenhuma ocorrencia dentro do vetor

console.log(`O valor 8 está na posição ${valores.indexOf(8)}`);

//poderia usar um if também mais preferi usar um operador ternário condição ? caso verdade : caso falso
console.log(`O valor 4 está na posição ${valores.indexOf(4) === -1 ? valores.indexOf(4) : 'Não está presente no array/vetor'}`);
