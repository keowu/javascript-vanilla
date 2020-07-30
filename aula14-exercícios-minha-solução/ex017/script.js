let btn = window.document.body.querySelector('#btnstart');

btn.addEventListener('click', function(){
    let inicio = Number(window.document.body.querySelector('#textinicio').value);
    let fim = Number(window.document.body.querySelector('#txtfim').value);
    let passo = Number(window.document.body.querySelector('#textopass').value);
    let res = window.document.body.querySelector('#res');
    let body = window.document.body;
    
    res.innerHTML = '';
    
    if ((inicio < 0) || (fim < 0) || (passo < 0)){
        res.innerHTML = 'Nenhum dos valores podem ser menor que zero, preste atenção, preencha novamente !';
        return;
    }
    
    if (inicio === 0){
        inicio = 1;
        res.innerHTML += 'Início é 0, ignorando, e adicionando 1 para o valor que você inseriu 0';
    }else if(fim === 0){
        fim = 1;
        res.innerHTML += 'Fim é 0, ignorando, e adicionando 1 para o valor que você inseriu 0';
    }else if(passo === 0){
        passo = 1;
        res.innerHTML += 'Passo é 0, ignorando, e adicionando 1 para o valor que você inseriu 0';
    }
    
    for (let i = inicio; i < fim; i+= passo){
        res.innerHTML += `🖖 ${i}`;
        console.log(i);
        
    }
    body.style.background = '#e63942';
    res.innerHTML += `🔚`;
});