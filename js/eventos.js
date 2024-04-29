const proximo = document.querySelector('.evento-proximo');
const anterior = document.querySelector('.evento-anterior');

const eventos = document.querySelector('.eventos');
const quantEventos = 9;

const arrastoPrim = 375;
const arrasto = 528;


let i = 0;

proximo.addEventListener('click', () => {

    i++;

    if(i == 1){
        eventos.style.transform = `translateX(${-375}px)`;
        anterior.style.display = 'flex';
    }

    else{
        eventos.style.transform = `translateX(${-(i-1)*arrasto - arrastoPrim}px)`;

        if(i >= quantEventos - 3){
            proximo.style.display = 'none';
        }
    }

    
})

anterior.addEventListener('click', () => {

    i--;
    
    if(i == 0){
        eventos.style.transform = `translateX(0px)`;
        anterior.style.display = 'none';

    }

    else{
        eventos.style.transform = `translateX(${-(i-1)*arrasto - arrastoPrim}px)`;
        if(i <= quantEventos - 3){
            proximo.style.display = 'flex';
        }
    }


})