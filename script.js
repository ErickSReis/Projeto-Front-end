const form = document.getElementById('form');
const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

function adicionarItem(event) {
event.preventDefault(); 

const codigo = document.getElementById('codigo').value;
const nome = document.getElementById('nome').value;
const quantidade = document.getElementById('quantidade').value;
const medida = document.getElementById('medida').value;

const novaLinha = tabela.insertRow();

const celulaCodigo = novaLinha.insertCell(0);
const celulaNome = novaLinha.insertCell(1);
const celulaQuantidade = novaLinha.insertCell(2);
const celulaMedida = novaLinha.insertCell(3);

celulaCodigo.textContent = codigo;
celulaNome.textContent = nome;
celulaQuantidade.textContent = quantidade;
celulaMedida.textContent = medida;

form.reset();
}

form.addEventListener('submit', adicionarItem);