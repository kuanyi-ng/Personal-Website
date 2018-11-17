window.addEventListener('scroll', function() {
  document.getElementById('main-header').style.background = "rgba(244, 244, 246, " + pageYOffset/window.innerHeight + ")"
})