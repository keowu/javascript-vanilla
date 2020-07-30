let btn = window.document.body.querySelector('#btncontar');

btn.addEventListener('click', () => {
    let ini = window.document.getElementById('textini');
    let fim = window.document.body.querySelector('#textfim')
    let passo = window.document.body.querySelector('#textp');
    let res = window.document.body.querySelector('#res');
    
    if ((ini.value.length === 0) || (fim.value.length === 0) || (passo.value.length === 0)){
        window.alert('Erro faltam dados');
        res.innerHTML = 'Impossível contar !';
        return;
    }
    
    res.innerHTML = 'Contando: ';
    
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    
    p = (p <= 0) ? p = 1 : p = p; //se p for zero ou menor que zero !
    
    if (i < f){
        //contagem crescente
        for(let c = i; c <= f; c +=p){
            res.innerHTML += `${c} \u{1F449}`;
        }
    }else{
        //contagem regressiva
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`;
        }
    }
        res.innerHTML += `\u{1F3C1}`;
    
});