document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário
    
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    if (nome && email && mensagem) {
      alert("Obrigado por entrar em contato, " + nome + "! Sua mensagem foi enviada.");
      // Aqui você pode adicionar o código para enviar os dados para um servidor
      // Ou realizar alguma outra ação com as informações do formulário.
      
      // Limpar o formulário após envio
      document.getElementById("contactForm").reset();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
  