function history() {
  var historySlider = $('.history__slider');
  
  historySlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: false,
    infinite: false,
    dots: true
  });
  
  $('body').on('click', '.pagination__item', function () {
    var index = $(this).data('index');
    historySlider.slick('slickGoTo', index);
    $('.pagination__item').removeClass('pagination__item_active');
    $(this).addClass('pagination__item_active');
  });
  
  $('.history__slider .slick-slide').each(function(index) {
    var historyDate = $(this).find('.item__date').text();
    $(`.slick-dots button:eq(${index})`).text(historyDate)
  });
    
  
}
