$(function () {


    
    var slider = $(".new-slide .new-slider");  	
    var slickOptions = { 		
                            arrows:true,
                            prevArrow: $(".new-slide .left"),
                            nextArrow:$(".new-slide .right"),
                            slideToShow:1,
                        };  	
    
    $(window).on('load resize', function() { 		
        if($(window).width() < 767) { 			
            slider.slick('unslick'); 		
        }else{ 			
            slider.not('.slick-initialized').slick(slickOptions); 		
        } 
    });


    $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
    });

});