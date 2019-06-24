//=include ../blocks/header/header.js
//=include ../blocks/popup/popup.js
//=include ../blocks/history/history.js
////=include ../blocks/contacts/contacts-info.js
////=include ../blocks/vacancy/vacancy.js
//=include ../blocks/study/study.js
//=include ../blocks/success/success.js
//=include ../blocks/mission/mission.js


$(document).ready(function () {
    popup();
    header('this is string to header.js')
    
    $(".invite__title").on("click", function() {  
     
        $(".main__invite").toggleClass("main__invite-active");    
    });
    
    $(".invite__top-title").on("click", function() {  
     
        $(".main__invite").toggleClass("main__invite-active");    
    });
    if ($('.study__slider')){
        checkCurrentSlide();

    }
    history()
    success()
    mission()
})
