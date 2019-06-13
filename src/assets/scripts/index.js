//=include ../blocks/header/header.js
//=include ../blocks/history/history.js


$(document).ready(function () {
    header('this is string to header.js')
    
    $(".invite__title").on("click", function() {  
     
        $(".main__invite").toggleClass("main__invite-active");    
    });
    
    $(".invite__top-title").on("click", function() {  
     
        $(".main__invite").toggleClass("main__invite-active");    
    });
    
})
