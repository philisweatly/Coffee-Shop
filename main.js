
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

let aboutItem = document.getElementsByClassName('about__item');

window.onscroll = function() {
  if (document.body.scrollTop > 50) {
    aboutItem.classname = "fadein";
  } else {
    aboutItem.classname = "";
  }
};