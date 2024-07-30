const html = document.querySelector('html');
const foco_btn = document.querySelector('.app__card-button--foco');
const curto_btn = document.querySelector('.app__card-button--curto');
const longo_btn = document.querySelector('.app__card-button--longo');
const startPause_btn = document.querySelector('#start-pause');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

let tempo = document.querySelector('#timer');
let banner = document.querySelector('.app__image');
let title = document.querySelector('.app__title');

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.play();
    } else{
        musica.pause();
    }
})

foco_btn.addEventListener('click', () => {
    alterarContexto('foco');
    foco_btn.classList.add('active');  
})

curto_btn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curto_btn.classList.add('active');
})

longo_btn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longo_btn.classList.add('active');
})

function alterarContexto(contexto){
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            title.innerHTML = 'Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>';

            break;
        case "descanso-curto":
            title.innerHTML = 'Que tal dar uma respirada?,<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            
            break;
        case "descanso-longo":
            title.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa.</strong>';
            
            break;
    }
}