let valorDoComprimento = Number(document.getElementById("comprimentoPiso"));
let valorDaLargura = Number(document.getElementById("largura"));
let resultadoMetroQuadrado = document.getElementById("res");

let botaoCalcular = document.getElementById("calcular");
let botaoLimpar = document.getElementById("limpar");

/*cálculo do piso*/


let resultado = valorDoComprimento + valorDaLargura



function metroQuadradoPiso() {
    
    resultadoMetroQuadrado.innerHTML = resultado.toFixed(2)

}


/*
let valorComprimentoPiso = Number(valorDoComprimento.value)

let valorLarguraPiso = Number(valorDaLargura.value)

resultadoTotal = valorComprimentoPiso + valorLarguraPiso
*/


botaoCalcular.addEventListener("click", metroQuadradoPiso);

/*
botaoLimpar.addEventListener("click", limpar);
*/

