document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const msg = document.getElementById("msg");

  if (email === "cliente@starbucks.com" && senha === "cafe123") {
    msg.style.color = "green";
    msg.textContent = "Login bem-sucedido!";
  } else {
    msg.style.color = "red";
    msg.textContent = "Email ou senha inválidos.";
  }

  // Redireciona o usuário para a página da Starbucks
        window.location.href = 'index.html'; // Ou o caminho correto para sua página
});