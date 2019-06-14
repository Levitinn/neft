$('.history__slider').slick({
    
    slidesToShow: 1,
    slidesToScroll: 1,

  });
$('body').on('click', '.pagination__item', function() {
var index = $(this).data('index');
$('.history__slider').slick('slickGoTo', index);
$('.pagination__item').removeClass('pagination__item_active');
$(this).addClass('pagination__item_active');
});