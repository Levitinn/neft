$('.study__slider').slick({
    
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    centerMode: true,
    centerPadding: 100,
    initialSlide: 2,
    loop: false,

  });


function checkCurrentSlide(){
  var nextSlide = $('.slick-current').next();
  var prevSlide = $('.slick-current').prev();
  
  $('.slick-slide')
    .removeClass('next-slide')
    .removeClass('prev-slide');
  nextSlide.addClass('next-slide');
  prevSlide.addClass('prev-slide');
}

$('.study__slider .slick-arrow').click(function() {
  checkCurrentSlide()
})

