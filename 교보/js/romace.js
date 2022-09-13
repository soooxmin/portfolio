$(function () {
   

    const $item =$(".item1").width();
    $(".best-seller .btn-area .right").click(function () {
        $(".rank-slide").stop().animate({left: "-100%"}, 500);
    });

    $(".best-seller .btn-area .left").click(function () {
       $(".rank-slide").stop().animate({left: 0}, 500);
    });
    
    $(".best-seller .btn-area button").click(function () {
        $(this).removeClass("on").siblings().addClass("on");
    })

    $(".best-seller .tabmenu span").click(function () {

        $(".rank-slide").css("display","none");

       for(let i = 0; i < 3; i++){ 
            if( $(this).index() == i){
                $(".ranking-box .rank-slide").eq(i).css({display : "flex"});
            }
       }

        $(this).addClass("active").siblings().removeClass("active");
    });


    $(".main-banner .slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".main-banner .iconify.left"),
        nextArrow: $(".main-banner .iconify.right"),
        autoplay: true,
        autoplaySpeed: 1800,
        responsive: [ // 반응형 적용여부
        {
            breakpoint: 768, //해상도 브레이크 포인트 설정
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }]
   });

   $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
   });

   var slider = $(".new-slide .new-slider");  	
   var slickOptions ={ 		
                        arrows:true,
                        prevArrow: $(".new-slide .left"),
                        nextArrow:$(".new-slide .right"),
                        // slidesToShow: 1,
                        // slidesToScroll: 1,
                    };  	
   
    $(window).on("load resize", function() { 		
        if($(window).width() < 767) { 			
            slider.slick("unslick"); 		
        }else{ 			
            slider.not(".slick-initialized").slick(slickOptions); 		
        } 
    });


});