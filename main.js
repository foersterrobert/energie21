$('.navigation__toggle').click(function() {
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $('.navigation__nav').slideToggle();
    $(this).toggleClass('open');
  })

$('.energien__quelle__text__click--e').click(function() {
  $('.energien__quelle__text__content--e').slideToggle();
  $('.energien__quelle__text__click--e svg').toggleClass('rotate');
})

$('.energien__quelle__text__click--f').click(function() {
  $('.energien__quelle__text__content--f').slideToggle();
  $('.energien__quelle__text__click--f svg').toggleClass('rotate');
})