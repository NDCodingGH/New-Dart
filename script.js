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
