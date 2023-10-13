    let peso = document.getElementById('pes')
    let altura = document.getElementById('altura')
    let botao = document.getElementById('botao')
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')
    let limpar = document.getElementById('btnLimpar')

function cliqueiNoBotao() {

    img.style.width = 'auto';
    img.style.width = 'auto';


    valorP = Number(peso.value)
    valorA = Number(altura.value)

    imc = valorP / (valorA * valorA )

    res.innerHTML = imc.toFixed(2)

    if (valorP <= 0 || valorA <= 0) {
        alert('Favor preencher os dados corretamente!');
    }else if(imc <= 17) {
        img.src = 'img/muitoabaixodopeso.png'
    }else if(imc <= 18.49){
        img.src = 'img/abaixodopeso.png'
    }else if(imc >= 18.5 && imc <= 24.99){
        img.src = 'img/pesonormal.png'
    }else if(imc >= 25 && imc <= 29.99){
        img.src = 'img/acimadopeso.png'
    }else if(imc >= 30 && imc <= 34.99){
        img.src = 'img/obesidade1.png'
    }else if(imc >= 35 && imc <= 39.99){
        img.src = 'img/obesidade2.png'
    }else {
        img.src ='img/obesidade3.png'
    }

}

function limparCampo(){
    peso.value = ''
    altura.value =''
    img = ''

    res.innerHTML =''
}

botao.addEventListener('click', cliqueiNoBotao)
limpar.addEventListener('click', limparCampo)
