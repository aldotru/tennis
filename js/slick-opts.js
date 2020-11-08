$(document).ready(function () {

  // Rackets slick slider options
  $('.rackets__slider').slick({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipe: true,
    swipeToSlide: true,
    variableWidth: true,

    // Moving next/previous buttons outside the slick wrapper
    // @type {object} DOM node
    nextArrow: $('#slick__next'),
    prevArrow: $('#slick__previous'),
    
    // Moving next/previous buttons outside the slick wrapper
    // @type {object} DOM node
    appendDots: $('.rackets__slider-dots')
  });

  $('.slick-carousel-3').slick({
    
  });
  
});