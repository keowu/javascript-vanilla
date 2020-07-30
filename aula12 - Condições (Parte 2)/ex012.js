var idade = 10;

if(idade < 16){
    console.log(`Você tem ${idade}`);
    console.log('Não vota !');
}else if(idade < 18){
    console.log(`Você tem ${idade}`);
    console.log('Voto opcional !');
}else if(idade > 65){
    console.log(`Você tem mais ${idade}`);
    console.log('Voto opcional !');
}else{
    console.log(`Você tem ${idade}`);
    console.log('Voto Obrigatorio !');
}