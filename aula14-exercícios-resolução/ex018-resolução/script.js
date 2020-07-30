let btn = window.document.body.querySelector('#btngerartabuada');

btn.addEventListener('click', () =>{
   let num = window.document.body.querySelector('#txtn');
   let tab = window.document.body.querySelector('#seltab');
   
   if (num.value.length === 0){
       window.alert('Digite um número !');
       return;  
   }
    let n = Number(num.value);
    
    tab.innerHTML = '';
    
    let c = 0;
    
    while(c <= 10){
        let item = window.document.createElement('option');
        item.text = `${n} x ${c} = ${n*c}`;
        item.value = `tab${c}`;
        tab.appendChild(item);
        c++;    
    }
    
});