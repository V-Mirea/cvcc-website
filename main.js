$(document).ready(function() {
    var lastScrollTop = 0;
     
    $(window).bind('mousewheel', function(event) {
        var scrollTop = $(this).scrollTop();
        
        // If user scrolls down
        if ((event.deltaY < 0) && $(".current").next(".full-height").length > 0) {
            $(".current").next(".full-height").addClass("current");
            $(".current").first().removeClass("current");
            
            $("html, body").animate({
                scrollTop: $(".current").offset().top - 111   
            }, 1000);
        // If user scrolls up
        } else if ((event.deltaY > 0) && $(".current").prev(".full-height").length > 0) { 
            if ($(".current").prev(".full-height").length > 0) {        
                $(".current").prev(".full-height").addClass("current");
                $(".current").last().removeClass("current");
                
                $("html, body").animate({
                    scrollTop: $(".current").offset().top - 111    
                }, 1000);
            }            
        }
        
        lastScrollTop = scrollTop;
    });
});