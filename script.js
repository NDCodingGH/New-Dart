const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

function copyEmailToClipboard(imgElement) {
  var email = imgElement.getAttribute("data-email");
  navigator.clipboard.writeText(email);
  alert("Email copiado: " + email);
}

// Função para exibir o player após o consentimento
function carregarElementoExterno(event) {
  const parent = event.target.closest('.plataformas-sqr');
  const player = parent.querySelector('.embed-player');
  player.style.display = 'block';
  parent.querySelector('.aviso-overlay').style.display = 'none';
}

// Adiciona um event listener para cada botão de aceitar
document.querySelectorAll('.btnAceitar').forEach(btn => {
  btn.addEventListener('click', carregarElementoExterno);
});

