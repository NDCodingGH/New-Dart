const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
// Check if the URL contains an anchor
if (window.location.hash) {
  // Remove the anchor from the URL without reloading the page
  history.replaceState({}, document.title, window.location.pathname);
}