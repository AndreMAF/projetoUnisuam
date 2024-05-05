const tenis = document.querySelector('.i-tenis')
const tenisImg = document.querySelector('#img-tenis')

const basquete = document.querySelector('.i-basquete')
const basqueteImg = document.querySelector('#img-basquete')

const futebol = document.querySelector('.i-futebol')
const futebolImg = document.querySelector('#img-futebol')

const volei = document.querySelector('.i-volei')
const voleiImg = document.querySelector('#img-volei')

const raquete = document.querySelector('.i-raquete')
const raqueteImg = document.querySelector('#img-raquete')

const h1 = document.querySelector('.info-evento h1')
const p = document.querySelector('.info-evento p')
const input = document.querySelector('.info-evento input')
const fundo = document.querySelector('.evento')
const wave = document.querySelector('.wave svg')

function resetarIcone(){
    tenis.querySelector('g').style.fill = 'black';
    basquete.querySelector('g').style.fill = 'black';
    futebol.querySelector('g').style.fill = 'black';
    volei.querySelector('g').style.fill = 'black';
    raquete.querySelector('g').style.fill = 'black';
}

function resetarImg(){
    tenisImg.style.opacity = 0;
    tenisImg.style.zIndex = 1;
    
    basqueteImg.style.opacity = 0;
    basqueteImg.style.zIndex = 1;

    futebolImg.style.opacity = 0;
    futebolImg.style.zIndex = 1;

    voleiImg.style.opacity = 0;
    voleiImg.style.zIndex = 1;

    raqueteImg.style.opacity = 0;
    raqueteImg.style.zIndex = 1;

}

tenis.addEventListener('click', () => {
    resetarIcone();
    tenis.querySelector('g').style.fill = 'rgb(8, 67, 8)';


    resetarImg();
    tenisImg.style.zIndex = 2;
    tenisImg.style.opacity = 1;

    input.style.backgroundColor = '#203655'
    fundo.style.backgroundColor = '#a3b6d1'
    wave.style.fill = '#a3b6d1'
    p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit possimus repudiandae eligendi quae beatae porro laboriosam deserunt! Voluptatum ullam nulla debitis culpa reprehenderit adipisci? Nesciunt facere dolores reiciendis totam!'
    h1.innerHTML = 'Tênis'
    
})

basquete.addEventListener('click', () => {
    resetarIcone();
    basquete.querySelector('g').style.fill = 'orange';

    resetarImg();
    basqueteImg.style.zIndex = 2;
    basqueteImg.style.opacity = 1;

    input.style.backgroundColor = '#bd4200'
    fundo.style.backgroundColor = '#ced4ed'
    wave.style.fill = '#ced4ed'
    p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit possimus repudiandae eligendi quae beatae porro laboriosam deserunt! Voluptatum ullam nulla debitis culpa reprehenderit adipisci? Nesciunt facere dolores reiciendis totam!'
    h1.innerHTML = 'Basquete'
})

futebol.addEventListener('click', () => {
    resetarIcone();
    futebol.querySelector('g').style.fill = 'gray';

    resetarImg();
    futebolImg.style.zIndex = 2;
    futebolImg.style.opacity = 1;

    input.style.backgroundColor = '#615e00'
    fundo.style.backgroundColor = '#eaf595'
    wave.style.fill = '#eaf595'
    p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit possimus repudiandae eligendi quae beatae porro laboriosam deserunt! Voluptatum ullam nulla debitis culpa reprehenderit adipisci? Nesciunt facere dolores reiciendis totam!'
    h1.innerHTML = 'Futebol'
})

volei.addEventListener('click', () => {
    resetarIcone();
    volei.querySelector('g').style.fill = 'brown';

    resetarImg();
    voleiImg.style.zIndex = 2;
    voleiImg.style.opacity = 1;

    input.style.backgroundColor = '#004a5e'
    fundo.style.backgroundColor = '#7dc1d4'
    wave.style.fill = '#7dc1d4'
    p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit possimus repudiandae eligendi quae beatae porro laboriosam deserunt! Voluptatum ullam nulla debitis culpa reprehenderit adipisci? Nesciunt facere dolores reiciendis totam!'
    h1.innerHTML = 'Vôlei'
})

raquete.addEventListener('click', () => {
    resetarIcone();
    raquete.querySelector('g').style.fill = 'red';

    resetarImg();
    raqueteImg.style.zIndex = 2;
    raqueteImg.style.opacity = 1;

    input.style.backgroundColor = '#3d5c46'
    fundo.style.backgroundColor = '#bcd1c3'
    wave.style.fill = '#bcd1c3'
    p.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit possimus repudiandae eligendi quae beatae porro laboriosam deserunt! Voluptatum ullam nulla debitis culpa reprehenderit adipisci? Nesciunt facere dolores reiciendis totam!'
    h1.innerHTML = 'Tênis de Mesa'
})