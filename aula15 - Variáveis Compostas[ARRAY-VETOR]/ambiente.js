//criando um vetor 
let num = [5, 8, 2, 9, 3];
num.push(1); //coloca 1 ao final do vetor
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);


//adicionando um valor ao vetor

num[3] = 6; // a uma posição definida

num.push(7); // adiciona um valor a uma pósição do vetor, sem saber seu comprimento, automaticamente já adiciona ao final

num.length; //retorna o tamanho do vetor

num.sort(); // ordena os dados do vetor coloca em ordem