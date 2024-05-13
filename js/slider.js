const imagens = document.querySelectorAll('.imagem-slider');
const imagensContainer = document.querySelector('.imagens-slider')

let index = 0;      //Posição no slider
const tempoAuto = 6500;     //tempo de cada mudança automatica no slider


function avancar(){
    document.querySelector(`.imagem-slider-${index+1} img`).style.scale = '1';
    if (index>=imagens.length-1) {index=-1}
    index++;
    imagens.forEach(element => {        //Cada imagem vai andar 100vw
        element.style.transform = `translateX(${-100*index}vw)`;
    });
}

function voltar(){
    document.querySelector(`.imagem-slider-${index+1} img`).style.scale = '1';
    if (index<=0) {index=imagens.length}
    index--;
    imagens.forEach(element => {        //Cada imagem vai andar 100vw
        element.style.transform = `translateX(${-100*index}vw)`;
    });
}

function avancarAuto(){

    avancar()
    document.querySelector(`.imagem-slider-${index+1} img`).style.scale = '1.35';   //imagem aumenta a cada avancarAuto()
    
    
}

imagensContainer.addEventListener('mouseover', () => {  //Quando o mouse entrar no slider
    clearInterval(auto)
    document.querySelector(`.imagem-slider-${index+1} img`).style.filter = 'blur(7px)';     //blur na imagem
    document.querySelector(`.imagem-slider-${index+1} img`).style.filter += 'brightness(.8)'; //exemplo de quando a div de comentario aparecer
    document.querySelector(`.imagem-slider-${index+1} h3`).style.opacity = '1';      //h3 aparece
    document.querySelector(`.imagem-slider-${index+1} p`).style.opacity = '1';      //paragrafo aparece
    document.querySelector(`.imagem-slider-${index+1} h2`).style.opacity = '0';      //h2 some


    
})

imagensContainer.addEventListener('mouseout', () => {   //Quando o mouse sair do slider
    auto = setInterval(avancarAuto, 6500)
    document.querySelector(`.imagem-slider-${index+1} img`).style.filter = '';      //reseta o filtro
    document.querySelector(`.imagem-slider-${index+1} h3`).style.opacity = '0';      //h3 aparece
    document.querySelector(`.imagem-slider-${index+1} p`).style.opacity = '0';      //paragrafo some
    document.querySelector(`.imagem-slider-${index+1} h2`).style.opacity = '1';      //h2 aparece
})


var auto = setInterval(avancarAuto, tempoAuto)      //função avancarAuto rodando a cada momento