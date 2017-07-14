document.body.onload = function() {

  setTimeout(function() {
    var preloader = document.getElementById('pege-preloader');
    if (!preloader.classList.conteins('done')) {
      preloader.classList.add('done');
    }
  }, 1000);

}