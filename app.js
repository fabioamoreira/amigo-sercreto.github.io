let amigosAdicionados = [];
let qtdDePessoas = (amigosAdicionados.length);

// Funções __________________________________________________________________________________________________________________________________________________

// function exibirLista(){
//     listaAmigos.innerHTML = amigosAdicionados.join('<br>');
// }

function exibirLista() {
    let listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = "";    
    for (let i = 0; i < amigosAdicionados.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigosAdicionados[i];
        listaAmigos.appendChild(li);
    }
}

function adicionarAmigo() {
    let campoInput = document.getElementById('amigo');
    let amigo = campoInput.value.trim();
if (amigo == ''){
    alert ('Por favor, inserir um nome válido');
}else {
    amigosAdicionados.push(amigo);
    let listaAmigos = document.getElementById('listaAmigos');
    exibirLista();
    limparCampo();
}
}

function limparCampo(){
    campoInput = document.getElementById('amigo');
    campoInput.value = ('');
    campoInput.focus();
}

function sortearAmigo() {
    let pessoaEscolhida = Math.floor(Math.random() * amigosAdicionados.length);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (` Seu amigo secreto escolhido foi ${amigosAdicionados[pessoaEscolhida]}`);
    listaAmigos;
    console.log(amigosAdicionados);
    exibirLista();
    verificarAmigo();
    amigosAdicionados.splice(pessoaEscolhida, 1);
  }


function verificarAmigo(){
    if (amigosAdicionados.length == 0 ){
        resultado.textContent = ('Nenhum Amigo para sortear, Adicione um nome!');
    }
}


function zerarLista() {
    if (confirm('Tem certeza de que deseja limpar a lista de amigos?')) {
        amigosAdicionados = [];
        listaAmigos.textContent = (amigosAdicionados =[]);
        resultado.textContent = ('');
    }
}
