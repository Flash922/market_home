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
function Formdata(data){

/* если не заполнено поле Ваше имя, длина менее 3-x*/
if (data.fnm != null && data.fnm.value.length < 3 )
{
alert('Заполните поле «Ваше имя»');
return false;
}

/* если не заполнено поле Сообщение */
if (data.text != null && data.text.value.length < 3)
{
alert('Заполните поле «Сообщение»');
return false;}

/* e-mail Юзера */
if(data.email != null && data.email.value.length == 0)
{
alert('поле «E-Mail» пустое');
return false;}

if(data.email != null && data.email.value.length < 6)
{
alert('слишком короткий «E-Mail»');
return false;}

if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
{
alert('«Введите правильный E-Mail адрес»');
return false;}

/* контактный телефон */
if(data.phone != null && data.phone.value.length == 0)
{
alert('поле «Контактный телефон» пустое');
return false;}

if(data.phone != null && data.phone.value.length < 5)
{
alert('поле «Контактный телефон» должно содержать минимум пять символов');
return false;}

if(!(/^[0-9-+()s]+z/.test(data.phone.value+'z')))
{
alert('»Контактный телефон» указан неверно');
return false;}
};

