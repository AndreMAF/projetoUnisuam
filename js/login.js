//alternar login/cadastro
let login = true;
const img = document.querySelector('.imagem');

function irCadastro(){
    console.log('login>cadastro')
    img.style.transform = 'translateX(100%)'
    img.style.borderRadius = '0 18px 18px 0';
    login = false
}

function irLogin(){
    console.log('cadastro>login')
    img.style.transform = 'translateX(0)'
    img.style.borderRadius = '18px 0 0 18px';
    login = true
}


//mostra/esconde senha
let visivel = true;
const olho = document.querySelector('.olho');
const input = document.querySelector('.input-senha');

function Escondesenha(){
    if(visivel){
        olho.setAttribute('src', './imgs/olho2.png')
        input.setAttribute('type', 'text')
        visivel = false;
    }
    else{
        olho.setAttribute('src', './imgs/olho.png')
        input.setAttribute('type', 'password')
        visivel = true;
    }
}

//validação

const nome = document.querySelector('.input-nome')
const email = document.querySelector('.input-email')
const senha = document.querySelector('.input-senha')
const cpf = document.querySelector('.input-cpf')
const data = document.querySelector('.input-data')
const btnCad = document.querySelector('.cadastrar')
const aviso = document.querySelector('.avisos')

const date = new Date();
let hoje = new Date(),
dia = hoje.getDate(),
mes = hoje.getMonth()+1,
ano = hoje.getFullYear();
if(dia<10){
    dia='0'+dia
} 
if(mes<10){
    mes='0'+mes
}
hoje = ano+'-'+mes+'-'+dia;

document.querySelector(".input-data").setAttribute("max", hoje);

btnCad.addEventListener('click', () => {
    if(!nome.value || nome.value.length < 15 || nome.value.length > 60 || !email.value || !senha.value || senha.value.length < 8 || senha.value.length > 60 || !cpf.value || !data.value){
        aviso.style.display = 'block'
        aviso.style.color = 'red'
        aviso.innerHTML = 'verifique novamente os campos:'

        setTimeout(() => {
            aviso.style.display = 'none'
        }, 5000)
    }

    if(nome.value.length < 15 || nome.value.length > 60){
        aviso.innerHTML += '<br> *o nome deve ter entre 15 e 60 caracteres'
        nome.style.borderColor = 'red'
    }

    if(senha.value.length < 8 || senha.value.length > 60){
        aviso.innerHTML += '<br> *a senha deve ter pelo menos 8 caracteres'
        senha.style.borderColor = 'red'
    }

    if(!email.value){
        aviso.innerHTML += '<br> *o email deve ser válido'
        email.style.borderColor = 'red'
    }
    

    if(!validadorCPF()){
        aviso.innerHTML += '<br> *o cpf deve ser válido'
        cpf.style.borderColor = 'red'
    }

    if(!data.value){
        aviso.innerHTML += '<br> *insira uma data de nascimento'
        data.style.borderColor = 'red'
    }
    
})


function validacaoNome(){
    if(nome.value.length >= 14 && nome.value.length < 60){
        nome.style.borderColor = 'rgba(255, 255, 255, .3)'
    }
}

function validacaoEmail(){
    if(true){
        email.style.borderColor = 'rgba(255, 255, 255, .3)'
    } 
}

function validacaoSenha(){
    if(senha.value.length >= 8 && senha.value.length < 60){
        senha.style.borderColor = 'rgba(255, 255, 255, .3)'
    }
}

function validacaoCPF(){
    
    if(validadorCPF()){
        cpf.style.borderColor = 'rgba(255, 255, 255, .3)'
    }
}

function validacaoNasc(){
    if(data.value){
        data.style.borderColor = 'rgba(255, 255, 255, .3)'
    }
}



function entrarCPF(){

    const inputCPF = document.querySelector(".input-cpf");
    
    if(isNaN(inputCPF.value[inputCPF.value.length-1])){
        inputCPF.value = inputCPF.value.substring(0, inputCPF.value.length-1);
       return;
    }
    
    if (inputCPF.value.length == 3 || inputCPF.value.length == 7){
        inputCPF.value += ".";
    }
    if (inputCPF.value.length == 11){
        inputCPF.value += "-";
    }
 
 }

function validadorCPF(){
    cpftest = cpf.value;
    cpftest = cpftest.replace(/\D/g, '');
    if(cpftest.toString().length != 11 || /^(\d)\1{10}$/.test(cpftest)) return false;
    var result = true;
    [9,10].forEach(function(j){
        var soma = 0, r;
        cpftest.split(/(?=)/).splice(0,j).forEach(function(e, i){
            soma += parseInt(e) * ((j+2)-(i+1));
        });
        r = soma % 11;
        r = (r <2)?0:11-r;
        if(r != cpftest.substring(j, j+1)) result = false;
    });
    return result;
}