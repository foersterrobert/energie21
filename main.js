jQuery(".intro__text").fitText(2.4);

jQuery(".intro__text--2").fitText(3);

jQuery(".intro__text--card").fitText(2);

jQuery(".intro__info__card h4").fitText(1.3);

jQuery(".intro__title").fitText(2.5);

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