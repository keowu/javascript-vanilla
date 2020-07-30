var body = window.document.body;
var playbutton = window.document.body.querySelector('#btnplay');


playbutton.addEventListener('click', function(){
   // se 1 = true vai deja-vu se não(0) falso vai gas-gas.wav
   let srt_play = Math.floor(Math.random() * 2) ? 'deja-vu.wav' : 'gas-gas.wav';
    
   let audio = new Audio(srt_play);
   audio.play();
});

//ONLOAD
body.addEventListener('load', load());

function load(){
    var msg = window.document.body.querySelector('#msg');
    var img = window.document.body.querySelector('#imagem');
    var agora = new Date();
    var hora = agora.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if(hora >= 0 && hora <12){
        img.src = 'fotomanha.jpg';
        img.alt = 'Foto de Manhã';
        img.title = 'Foto de Manhã';
        body.style.background = '#a07e48';
    }else if((hora >= 12) && ( hora <= 18)){
        img.src = 'fototarde.jpg';
        img.alt = 'Foto de Tarde';
        img.title = 'Foto de Tarde';
        body.style.background = '#a04612';
    }else{
        img.src = 'fotonoite.jpg';
        img.alt = 'Foto de Noite';
        img.title = 'Foto de Noite';
        body.style.background = '#6a4668';
    }
}