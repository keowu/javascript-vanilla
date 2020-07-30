var btn = window.document.body.querySelector('#btnadd');
var btnfinalizar = window.document.body.querySelector('#btnfinalizar');
var arr = [];
var res = window.document.body.querySelector('#res');


function eONumeroJaEstaNoArray(n){
    for (i in arr){
        if(arr[i] === n){
            return true;
        }
    }
    return false;
}


function pegaSOMATUDO(){
    let sum = 0;
    for(i in arr){
       sum += Number(arr[i]);    
    }
    return sum;
}

function pegaFAZMEDIA(){
    let media = 0;
    for(i in arr){
        media += arr[i];
    }
    return (media/(arr.length-1));
}


btnfinalizar.addEventListener('click', () =>{
    if(arr.length === 0){
        alert('Cara, como você vai finalizar algo que não concluíu ? Não tem lógica, começe e termine as coisas na sua vida !');
        return;
    }
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo temos ${arr.length} Números cadastrados</p>`;
    arr.sort(); //organiza os elementos números de um array do menor para o maior
    res.innerHTML += `<p>O Maior número é o ${arr[(arr.length - 1)]}</p>`; 
    res.innerHTML += `<p>O Menor número digitado é o ${arr[0]}</p>`; // ou ((arr.length - arr.length)) + 1 ; :D
    res.innerHTML += `<p>A Soma de todos os valores é ${pegaSOMATUDO()}</p>`;
    res.innerHTML += `<p>A Média de todos os valores é ${pegaFAZMEDIA()}</p>`;
});


btn.addEventListener('click', () => {
   let txt = window.document.body.querySelector('#btntxt');
   let n = Number(txt.value);
   let caixa_select = window.document.body.querySelector('#caixaselect');
   let option = window.document.createElement('option');
    
    if ((n>100)||(n<=0)){
        alert(`Número ${n} não é permitido !`);
        return;
    }else if(eONumeroJaEstaNoArray(n)){
        alert('Número já está no array');
        return;
    }
    
    arr.push(n);
    option.text = `número ${n}`;
    caixa_select.appendChild(option);
});