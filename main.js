jQuery(".intro__text").fitText(2);

jQuery(".intro__info__card h4").fitText(1.5);

jQuery(".intro__title").fitText(2.5);

$('.navigation__toggle').click(function() {
    $('.navigation__nav').toggleClass('navigation__nav--open', 500);
    $('.navigation__nav').slideToggle();
    $(this).toggleClass('open');
  })

$('.details__quelle__text__click--windrad').click(function() {
  $('.details__quelle__text__content--windrad').slideToggle();
})

$('.details__quelle__text__click--photovoltaik').click(function() {
  $('.details__quelle__text__content--photovoltaik').slideToggle();
})

$('.details__quelle__text__click--atom').click(function() {
  $('.details__quelle__text__content--atom').slideToggle();
})