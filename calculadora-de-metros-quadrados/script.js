let botaoCalcular = document.getElementById("calcular");
let botaoLimpar = document.getElementById("limpar");

/*dados do piso*/
let valorDoComprimento = document.getElementById("comprimentoPiso");
let valorDaLargura = document.getElementById("largura");

/*dados da parede*/
let ComprimentoDaParede = document.getElementById("comprimentoParede");
let alturaDaParede = document.getElementById("altura");

/*dados do resultado*/
let resMetPiso = document.getElementById("res");
let resMetParede = document.getElementById('resultParede');

/*cálculo do piso*/

function metroQuadradoPiso() {
   
    valorC = Number(valorDoComprimento.value);
    valorL = Number(valorDaLargura.value);

    valorTotal = valorC * valorL;

    total = valorTotal;
  
    resMetPiso.innerHTML = total.toFixed(2);
  
  }

/*cálculo da parede*/

function metroQuadradoParede() {

  valorDo = Number(ComprimentoDaParede.value);
  valorAl = Number(alturaDaParede.value);

  mult = valorDo * valorAl;

  multTotal = mult;

  resMetParede.innerHTML = multTotal.toFixed(2);
}

/*Função limpar campos*/

function limparCampos() {
  //campos do piso

  valorDoComprimento.value = "";
  valorDaLargura.value = "";
  resMetPiso.value = "";

  //campos da parede

  ComprimentoDaParede.value = "";
  alturaDaParede.value = "";
  resMetParede.value = "";

}


  botaoCalcular.addEventListener("click", metroQuadradoPiso);
  botaoCalcular.addEventListener("click", metroQuadradoParede);
  botaoLimpar.addEventListener('click', limparCampos);