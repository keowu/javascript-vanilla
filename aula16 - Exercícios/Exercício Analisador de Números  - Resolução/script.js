let btnadd = window.document.body.querySelector('#btnadd');
let num = window.document.body.querySelector('input#fnum');
let lista = window.document.body.querySelector('select#flista');
let res = window.document.body.querySelector('#res');
let btnfinalizar = window.document.body.querySelector('#btnfinalizar');
let valores = [];

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}


function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}


btnadd.addEventListener('click', () => {
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = window.document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    }else{
        window.alert('Valor inválido ou já encontrado na lista !')
    }
    num.value = '';
    num.focus(); //seta focus na caixa
});


btnfinalizar.addEventListener('click', () =>{
    if(valores.length === 0){
        window.alert('Adicione valores antes de finalizar !');
    }else{
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        
        for (let pos in valores){
            soma += valores[pos];
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            
            if(valores[pos] < menor){
                menor = valores[pos];
            }
        }
        media = soma/tot;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`;
        res.innerHTML += `<p>A média de valores digitados é ${media}</p>`;
    }
});