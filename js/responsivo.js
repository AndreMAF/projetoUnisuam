const menuResponsivo = document.querySelector('.menu-responsivo')
const imgMenu = document.querySelector('.menu-responsivo img')
const menu = document.querySelector('.menu')

menuResponsivo.addEventListener('click', () => {
    menu.classList.toggle('menu-ativo')
    if(menu.classList.contains('menu-ativo')){
        imgMenu.setAttribute('height', '20px')
        imgMenu.src = './imgs/fechar.png'
    }
    else{
        imgMenu.setAttribute('height', '40px')
        imgMenu.src = './imgs/menu.png'
    }
    
})

const nomeHeader = document.querySelector('.nomeHeader')
if(localStorage.getItem('nome') && localStorage.getItem('logado') == 'true'){
    nomeHeader.innerHTML = 'Olá, ' + localStorage.getItem('nome').split(' ')[0] + ' ▼'
}
