//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome.trim().length === 0){
        alert('Preencha o campo de nome!');
    } else{
        amigos.push(nome);
        console.log(amigos);
        exibirListaAmigos();
    }
    limparCampo();
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert('Não é possível realizar o sorteio!');
    } else{
        let indice = Math.floor(Math.random() * amigos.length);
        let campo = document.getElementById('resultado');
        campo.innerHTML = `Amigo sorteado: ${amigos[indice]}`;
    }
}


function exibirListaAmigos(){
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = "";

    let lista = document.createElement('ul');

    for(let i = 0; i <= amigos.length - 1; i++){
        let itemDaLista = document.createElement('li');
        itemDaLista.textContent = amigos[i];
        lista.appendChild(itemDaLista);
    }

    campo.appendChild(lista);
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

