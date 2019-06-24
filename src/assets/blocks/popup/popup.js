function popup() {
    $('.popup video').click(function() {
        var video = document.getElementsByClassName('popup__video');
        video[0].paused ? video[0].play() : video[0].pause();
    });
    $('.popup__close').click(function(){
        $('.popup').fadeOut();
    })
}