let tipoTarefa = document.getElementById("tipoDeTarefa");
let botaoAddTarefa = document.getElementById("addTarefa");
let listaCompleta = document.getElementById("tarefas");


let arrayDeTarefas = []



function criandoLista() {

    let novaLista = ""

    arrayDeTarefas.forEach( (lista) => {
        novaLista = novaLista + `
        <li id="tarefa">
            <input type="checkbox" id="check">
            <label for="scales">${lista}</label>
            <button id="delTarefa" onclick="deletarTarefa()">X</button>           
        </li>
        `       
    })

    listaCompleta.innerHTML = novaLista
    
    localStorage.setItem('lista', JSON.stringify(arrayDeTarefas))
}



function addTarefa() {

        arrayDeTarefas.push(tipoTarefa.value)

        criandoLista()
        tipoTarefa.value = ""

}
function mostrarTarefas() {
    const tarefasNoLocalStorage = localStorage.getItem('lista');
    
    if(tarefasNoLocalStorage){
        arrayDeTarefas = JSON.parse(tarefasNoLocalStorage)
    }
    
    
    criandoLista()
    
}


function deletarTarefa(posicao) {
    arrayDeTarefas.splice(posicao, 1)

    criandoLista()
}

/*function limparLocalStorage {
    const limparStorage = localStorage.clear
}*/

mostrarTarefas()
botaoAddTarefa.addEventListener("click", addTarefa)




















/*
let listaDeTarefas = []

function criandoLista() {
  let novaLista = ""

  listaDeTarefas.forEach( lista => {
    novaLista = novaLista + `
        <li>
            <p>${lista}</p>
        </li>
        `
  });

  listaCompleta.innerHTML = novaLista
}

function addTarefas() {
  listaDeTarefas.push(tipoTarefa.value);
  criandoLista();
}

botaoAddTarefa.addEventListener("click", addTarefas);
*/