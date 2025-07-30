// Variaveis do Projeto Fokus

const html = document.querySelector("html");
const focoBtn = document.querySelector(".app__card-button--foco");
const curtoBtn = document.querySelector(".app__card-button--curto");
const longoBtn = document.querySelector(".app__card-button--longo");
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btns =document.querySelectorAll('.app__card-button');
const musicInput = document.getElementById('alternar-musica');
const music = new Audio('./sons/luna-rise-part-one.mp3');

// Adiciona loop na musica e define o volume em 50%

music.loop = true;
music.volume = 0.5; 

// Acionando Input de musica

musicInput.addEventListener('change', () => {
    if(music.paused) {
        music.play();
    } else {
        music.pause();
    }
});

// Acionamento dos buttons

focoBtn.addEventListener("click", () => {
    alterarContexto('foco');
    focoBtn.classList.add('active');
});

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
});

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
});

// Função para alterar o tema da pagina de acordo com o modo escolhido

function alterarContexto(contexto) {

    // Reseta a class active em todos os buttons

    btns.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);

    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case 'descanso-longo':
            titulo.innerHTML = `
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}