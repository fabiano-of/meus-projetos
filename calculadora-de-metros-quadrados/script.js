let botaoCalcular = document.getElementById("calcular");
let botaoLimpar = document.getElementById("limpar");

function metroQuadradoPiso() {
let valorDoComprimento = Number(document.getElementById("comprimentoPiso").value);
let valorDaLargura = Number(document.getElementById("largura").value);
let resultadoMetroQuadrado = document.getElementById("res");


/*cálculo do piso*/

let resultado = valorDoComprimento * valorDaLargura

total = resultado

resultadoMetroQuadrado.innerHTML = total.toFixed(2)

}


function metroQuadradoParede() {
    let ComprimentoDaParede = Number(document.getElementById('comprimentoParede').value)
    let alturaDaParede = Number(document.getElementById('altura').value);
    let resultadoMetroQuadrado = document.getElementById("resultParede");

    let resultadoParede = ComprimentoDaParede * alturaDaParede

    totalParede = resultadoParede

    resultadoMetroQuadrado.innerHTML = totalParede.toFixed(2)
}

function limparCampos() {
    
    //campos do piso
    valorDoComprimento.value = ""
    valorDaLargura.value = ""
    resultadoMetroQuadrado.value = ""

    //campos da parede
    ComprimentoDaParede = ""
    alturaDaParede = ""
    resultadoMetroQuadrado = ""
}


/*
let valorComprimentoPiso = Number(valorDoComprimento.value)

let valorLarguraPiso = Number(valorDaLargura.value)

resultadoTotal = valorComprimentoPiso + valorLarguraPiso
*/


botaoCalcular.addEventListener("click", metroQuadradoPiso);
botaoCalcular.addEventListener("click", metroQuadradoParede);

botaoLimpar.addEventListener("click", limparCampos);



/*
botaoLimpar.addEventListener("click", limpar);
*/

