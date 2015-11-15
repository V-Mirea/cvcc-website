$(document).ready(function() { 
    
    var animating = false;
    
    // If user moves the mousewheel
    $(window).bind('mousewheel', function(event) { 
        // Prevent the little scroll that would be caused by default
        event.preventDefault();
        
        if (!animating) {
            // If user scrolls down and is not at the bottom already
            if ((event.deltaY < 0) && $(".current").next(".full-height").length > 0) {
                animating = true;
                $(".current").next(".full-height").addClass("current");
                $(".current").first().removeClass("current");

                // Scroll to the top of the '.current' class in 1000ms
                $("html, body").animate({
                    // 111 px offset is due to navbar. CHANGE AFTER REPLACING PLACEHOLDER
                    scrollTop: $(".current").offset().top - 111   
                }, 1000, function() {animating = false;});

                $(".checked").next("li").addClass("checked");
                $(".checked").first().removeClass("checked");
            // If user scrolls up and is not at the top already
            } else if ((event.deltaY > 0) && $(".current").prev(".full-height").length > 0) {
                animating = true;
                if ($(".current").prev(".full-height").length > 0) { 
                    $(".current").prev(".full-height").addClass("current");
                    $(".current").last().removeClass("current");

                    $("html, body").animate({
                        // CHANGE AFTER REPLACING PLACEHOLDER
                        scrollTop: $(".current").offset().top - 111    
                    }, 1000, function() {animating = false;});

                    $(".checked").prev("li").addClass("checked");
                    $(".checked").last().removeClass("checked");
                }            
            }
        }
    });
    
    // If user clicks on side-bar
    $(".glyphicon").click(function(event) {
        event.preventDefault();
        
        if (!animating) {
            animating = true;
            // href of li element
            var href = $(event.target).parent().attr('href');

            $(".current").removeClass("current");
            $(href).addClass("current");

            $(".checked").removeClass("checked");
            $(event.target).parent().parent().addClass("checked");

            $("html, body").animate({
                    // 111 px offset is due to navbar. CHANGE AFTER REPLACING PLACEHOLDER
                    scrollTop: $(".current").offset().top - 111   
            }, 1000, function() {animating = false;});
        }
    });
});