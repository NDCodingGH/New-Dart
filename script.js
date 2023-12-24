const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

$(window).on('hashchange', function(e){ // listen if hashtag is being added to the URL

  location.href = location.href.replace(location.hash,"") //replace it with nothing
  console.log("bam!"); //enjoy it

});