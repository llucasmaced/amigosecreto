//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigos = [];

function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



function adicionarAmigo() {
    let incluirAmigo = document.querySelector('input').value
    nomesAmigos.push(incluirAmigo);
    console.log(nomesAmigos);
    limparLabel();
    exibirTexto('ul', nomesAmigos);
}
    
function limparLabel() {
    incluirAmigo = document.querySelector('input');
    incluirAmigo.value = '';


}

//Sorteio

function sortearAmigo() {
    let ganhador = '';
    let i;
    let maximo = nomesAmigos.length;
    i = parseInt(Math.random() * maximo);
    ganhador = nomesAmigos[i];

    //Escolhe o ganhador

    exibirTexto('section', ganhador) //Exibe o ganhador

}

