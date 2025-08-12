function logar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
if(login === "admin" && senha === "admin"){
    window.location.href = "/pagina_principal/index.html";
}}

function cadastreSe() {
  window.location.href = "/cadastro/cadastro.html";
}

function clicarLogo() {
    window.location.href = "/index.html";
}