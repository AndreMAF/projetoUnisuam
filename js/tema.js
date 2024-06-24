const temaIcon = document.querySelector('.icon-tema');
let tema = 0;
let temaNavegador = localStorage.getItem('tema');


window.addEventListener('load', () => {
    if(temaNavegador == 'light' || temaNavegador == ''){
        temaIcon.src = './imgs/dark-mode.png'
        localStorage.setItem('tema', 'light')
        tema = 0
        document.body.classList.remove('dark')
    }
    if(temaNavegador == 'dark'){
        temaIcon.src = './imgs/light-mode.png'
        localStorage.setItem('tema', 'dark')
        tema = 1;
        document.body.classList.add('dark')
    }
})

temaIcon.addEventListener('click', () => {
    if(tema == 0){
        temaIcon.src = './imgs/light-mode.png'
        tema = 1;
        localStorage.setItem('tema', 'dark')
        document.body.classList.add('dark')
    }
    else{
        temaIcon.src = './imgs/dark-mode.png'
        tema = 0
        localStorage.setItem('tema', 'light')
        document.body.classList.remove('dark')
    }

    
})