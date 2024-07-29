const html = document.querySelector('html');
const foco_btn = document.querySelector('.app__card-button--foco');
const curto_btn = document.querySelector('.app__card-button--curto');
const longo_btn = document.querySelector('.app__card-button--longo');
const startPause_btn = document.querySelector('#start-pause')

let tempo = document.querySelector('#timer');
let banner = document.querySelector('.app__image');
let title = document.querySelector('.app__title');

foco_btn.addEventListener('click', () => {
    alterarContexto('foco');
})

curto_btn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longo_btn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
}