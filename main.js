const html = document.querySelector('html');
const foco_btn = document.querySelector('.app__card-button--foco');
const curto_btn = document.querySelector('.app__card-button--curto');
const longo_btn = document.querySelector('.app__card-button--longo');
const startPause_btn = document.querySelector('#start-pause');
const comecarOuPausar_btn = document.querySelector('#start-pause span')
const comecarOuPausar_img = document.querySelector('.app__card-primary-butto-icon')
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');

const musica = new Audio('/sons/luna-rise-part-one.mp3');
const play = new Audio('/sons/play.wav')
const pause = new Audio('/sons/pause.mp3')
const beep = new Audio('/sons/beep.mp3')
musica.loop = true;

let tempo = document.querySelector('#timer');
let banner = document.querySelector('.app__image');
let title = document.querySelector('.app__title');
let tempoDecorrido = 1500;
let intervalorId = null

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused){
        musica.currentTime = 0;
        musica.play();
    } else{
        musica.pause();
    }
})

foco_btn.addEventListener('click', () => {
    tempoDecorrido = 1500;
    alterarContexto('foco');
    foco_btn.classList.add('active');
})

curto_btn.addEventListener('click', () => {
    tempoDecorrido = 300;
    alterarContexto('descanso-curto');
    curto_btn.classList.add('active');
})

longo_btn.addEventListener('click', () => {
    tempoDecorrido = 900;
    alterarContexto('descanso-longo');
    longo_btn.classList.add('active');
})

function alterarContexto(contexto){
    mostrarTempo();
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

const contagemRegressiva = () => {
    if(tempoDecorrido <= 0) {
        beep.play();
        alert('Tempo finalizado');
        zerar();
        return
    }
    tempoDecorrido--;
    mostrarTempo();
}

startPause_btn.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar(){
    if(intervalorId){
        pause.play();
        zerar();
        return
    }
    intervalorId = setInterval(contagemRegressiva, 1000);
    play.play();
    comecarOuPausar_btn.textContent = 'Pausar'
    comecarOuPausar_img.setAttribute('src', '/imagens/pause.png')
}

function zerar(){
    clearInterval(intervalorId);
    comecarOuPausar_btn.textContent = 'Começar'
    comecarOuPausar_img.setAttribute('src', '/imagens/play_arrow.png')
    intervalorId = null;
}

function mostrarTempo() {
    const valorTempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = valorTempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempo.innerHTML = `${tempoFormatado}`
}

mostrarTempo();