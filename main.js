const html = document.querySelector('html');
const foco_btn = document.querySelector('.app__card-button--foco');
const curto_btn = document.querySelector('.app__card-button--curto');
const longo_btn = document.querySelector('.app__card-button--longo');
const startPause_btn = document.querySelector('#start-pause')

let tempo = document.querySelector('#timer');
let imagem = document.querySelector('.app__logo-image');
let title = document.querySelector('.app__title');

foco_btn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
})

curto_btn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
})

longo_btn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
})