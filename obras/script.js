const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const headerText = document.getElementsByClassName('header-texto');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    headerText.classList.toggle('hidden');
});




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