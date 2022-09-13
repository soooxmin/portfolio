$(function () {


    //신간도서 슬라이드 반응형에서 슬릭 해제
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


    //슬라이드 배너 슬릭
    $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
    });

});