$(function(){
 
  $('.home-slider__wrapper').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: true,
  });
  $('.home-slider__wrapper-two').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
  });
  $('.rate-star').rateYo({
    rating: 5,
    starWidth: '14px',
    ratedFill: '#ffc000',
    readOnly: true,
  });
  var mixer = mixitup('.n-product__container'
  // , {controls: {
  //     toggleDefault: 'none',
  //   },}
  );
});

