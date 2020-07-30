let btnverificar = window.document.body.querySelector('#btnverify');

btnverificar.addEventListener('click', function(){
    let agora = new Date();
    let ano = agora.getFullYear();
    let fano = window.document.body.querySelector('input#txtano');
    var res = window.document.body.querySelector('div#res');
    
    if ((fano.value.length == 0) || (Number(fano.value) > ano)){
       alert('Ops, verifique com atenção oque você inseriu !'); 
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = (ano - Number(fano.value));
        var genero = '';
        var img = window.document.createElement('img');
        var body = window.document.body;
        img.setAttribute('id', 'foto');
        img.style.textAlign = 'center';
        if(fsex[0].checked){
            genero = 'Homen';
            body.style.background = 'blue';
            if ((idade >= 0 ) && (idade < 10)){
                //criança
                img.setAttribute('src', 'bebe-h.jpg');
                img.title = `Homem Criança com ${idade} de anos.`;
                img.alt = 'Homem criança';
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-h.jpg');
                img.title = `Homem, Jovem com ${idade} de anos.`;
                img.alt = 'Homem Jovem';
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-h.jpg');
                img.title = `Homem, Adulto com ${idade} de anos.`;
                img.alt = 'Homem Adulto';
            }else{
                //idoso
                img.setAttribute('src', 'idoso-h.jpg');
                img.title = `Homem, Idoso com ${idade} de anos.`
                img.alt = 'Homem, Idoso';
            }
        }else if(fsex[1].checked){
            genero = 'Mulher';
            body.style.background = 'pink';
            if ((idade >= 0) && (idade < 10)){
                //criança
                img.setAttribute('src', 'bebe-m.jpg');
                img.title = `Mulher, Criança com ${idade} de anos.`;
                img.alt = 'Mulher, Criança';
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg');
                img.title = `Mulher, Jovem com ${idade} de anos.`;
                img.alt = 'Mulher, Jovem';
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.jpg');
                img.title = `Mulher, Adulta com ${idade} de anos.`;
                img.alt = 'Mulher, Adulta';
            }else{
                //idoso
                img.setAttribute('src', 'idoso-m.jpg');
                img.title = `Mulher, Idosa com ${idade} de anos.`;
                img.alt = 'Mulher, Idosa';
            }
        }
        
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); //adiciona depois do elemento acima !
    }
    
});