jQuery(".intro__text").fitText(1.8);

$('.navigation__toggle').click(function() {
    $(document.getElementById("navigation").style.height="120px");
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $(this).toggleClass('open');
    
  })