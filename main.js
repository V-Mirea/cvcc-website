$(document).ready(function() {
    var lastScrollTop = 0;
    
    $(window).scroll(function(event) {
        var scrollTop = $(this).scrollTop();
        
        // If user scrolls down
        if (scrollTop > lastScrollTop) {
            if ($(".current").next("div").length > 0) {
                console.log("down");
                
                $(".current").next("div").addClass("current");
                $(".current").first().removeClass("current");

                $("html, body").animate({
                    scrollTop: $(".current").offset().top    
                }, 1000);
            }
        // If user scrolls up
        } else {
            if ($(".current").prev("div").length > 0) {
                console.log("up");
                
                $(".current").prev("div").addClass("current");
                $(".current").last().removeClass("current");

                $("html, body").animate({
                    scrollTop: $(".current").offset().top    
                }, 1000);
            }            
        }
        
        lastScrollTop = scrollTop;
    });
});