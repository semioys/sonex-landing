(function(){
  let me = {};
  let nav = document.querySelector('.nav');
  

  me.toggleToActiveLink = function(target) {
    let links = document.querySelectorAll('.nav__link');

    for (var i = 0; i < links.length; i++) {
      if (links[i].classList.contains('nav__link--active')) {
        links[i].classList.remove('nav__link--active');
      }
    }
    target.classList.add('nav__link--active'); 
  }


  nav.addEventListener('click', function(e) {
    let target = e.target;
    if(target.tagName.toLowerCase() !== 'a')
    {
      return;
    }
    me.toggleToActiveLink(target);

    e.preventDefault();
  });

  window.navigation = me;
}());