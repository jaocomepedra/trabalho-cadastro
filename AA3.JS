// Seleciona o formulário e a tabela
const form = document.getElementById('formCadastro');
const tabelaUsuarios = document.getElementById('tabelaUsuarios').getElementsByTagName('tbody')[0];

// Função para adicionar o cadastro na tabela
function adicionarUsuario(nome, email) {
    const novaLinha = tabelaUsuarios.insertRow();
    const colunaNome = novaLinha.insertCell(0);
    const colunaEmail = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaEmail.textContent = email;
}

// Adiciona um listener ao formulário para quando for enviado
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Adiciona o usuário à tabela
    adicionarUsuario(nome, email);

    // Limpa os campos do formulário
    form.reset();
});