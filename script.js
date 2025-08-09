function comprarIngresso() {
  const usuarioLogado = localStorage.getItem("usuarioLogado");

  if (usuarioLogado) {
    // Redireciona para a página do ingresso
    window.location.href = "http://127.0.0.1:5501/show_da_banda/show_da_banda.html";
  } else {
    // Redireciona para a página de login
    window.location.href = "/login/login.html";
  }
}

