function logar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
if(login === "admin" && senha === "admin"){
    window.location.href = "http://127.0.0.1:5501/pagina_principal/index.html";
}}

