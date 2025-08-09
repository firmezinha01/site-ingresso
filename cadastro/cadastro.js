// script.js
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let senha = document.getElementById("senha").value;
    let confSenha = document.getElementById("conf_senha").value;
    let cpf = document.getElementById("cpf").value;
    let telefone = document.getElementById("telefone").value;

    if (senha !== confSenha) {
        alert("As senhas não coincidem!");
        return;
    }

    if (!validarCPF(cpf)) {
        alert("CPF inválido!");
        return;
    }

    if (!validarTelefone(telefone)) {
        alert("Telefone inválido!");
        return;
    }

    document.getElementById("mensagem").textContent = "Cadastro realizado com sucesso!";
    document.getElementById("mensagem").style.color = "green";
});

// Função para validar CPF
function validarCPF(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}

// Função para validar telefone
function validarTelefone(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
}
