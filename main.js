jQuery(".intro__text").fitText(1.8);

$('.navigation__toggle').click(function() {
  
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $(this).toggleClass('open');
    
  })


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}