let btn = window.document.body.querySelector('#btngerar');

//função anonima da anonima kkkk
btn.addEventListener('click', () => {
    let numero = Number.parseInt(window.document.body.querySelector('#txttabuada').value);
    let resultado = window.document.body.querySelector('#tabuadagerada');
    
    if(window.document.body.querySelector('#txttabuada').value === ''){
        resultado.innerHTML = '<option> Ops, vazio, brow. </option>';
        return;
    }
    
    resultado.innerHTML = '';
    for(let i = 0; i<=10; i++){
        resultado.innerHTML += `<option value="tabudadid${i}"> ${numero} * ${i} = ${numero*i} </option>`;   
    }
});