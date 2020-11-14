jQuery(".strom__intro__text").fitText(2);

$('.navigation__toggle').click(function() {
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $('.navigation__nav').slideToggle();
    $(this).toggleClass('open');
  })