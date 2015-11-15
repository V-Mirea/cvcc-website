$(document).ready(function() {
  
    // If user moves the mousewheel
    $(window).bind('mousewheel', function(event) { 
        // Prevent the little scroll that would be caused by default
        event.preventDefault();
        
        // If user scrolls down and is not at the bottom already
        if ((event.deltaY < 0) && $(".current").next(".full-height").length > 0) {
            $(".current").next(".full-height").addClass("current");
            $(".current").first().removeClass("current");
            
            // Scroll to the top of the '.current' class in 1000ms
            $("html, body").animate({
                // 111 px offset is due to navbar. CHANGE AFTER REPLACING PLACEHOLDER
                scrollTop: $(".current").offset().top - 111   
            }, 1000);
        // If user scrolls up and is not at the top already
        } else if ((event.deltaY > 0) && $(".current").prev(".full-height").length > 0) { 
            if ($(".current").prev(".full-height").length > 0) { 
                $(".current").prev(".full-height").addClass("current");
                $(".current").last().removeClass("current");
                
                $("html, body").animate({
                    // CHANGE AFTER REPLACING PLACEHOLDER
                    scrollTop: $(".current").offset().top - 111    
                }, 1000);
            }            
        }
    });
});