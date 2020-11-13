jQuery(".intro__text").fitText(1.8);

$('.navigation__toggle').click(function() {
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $(this).toggleClass('open');
    $('.navigation__nav').slideToggle();
  })