let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// get collection of about__items elements
let aboutItems = document.getElementsByClassName('about__item');

// remember if we have toggled the display state of the about__items
// - used for stopping the really expensive adding/removing CSS styling to elements everytime we scroll a bit ... (trigged many times!)
let aboutItemsShowing = false ;

window.onscroll = function() {
  
  if (window.scrollY > 150) {
   
    if ( !aboutItemsShowing ) {
      // we haven't applied the "fadein" class ...
      for (let i = 0 ; i < aboutItems.length ; i++ ) {
        aboutItems[i].classList.add("fadein");
      }
      aboutItemsShowing = true ;
    }
  } else {
    if ( aboutItemsShowing ) {
      // we haven't removed the "fadein" class ...
      for (let i = 0 ; i < aboutItems.length ; i++ ) {
        aboutItems[i].classList.remove("fadein");
      }
      aboutItemsShowing = false ;
    }
  }
};