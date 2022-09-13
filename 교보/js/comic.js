$(function () {
    
    //오늘의 책 탭버튼
    $(".today-book .title .btn-area span").click(function () {
        let $this = $(this);
        let itemIndex = $this.index();
        let $wrap = $(".today-book .contents-wrap");
        
        $this.addClass("active").siblings().removeClass("active");   
        
        console.log(itemIndex);

        for(let i = 0; i < 2; i++){
            if(itemIndex == i){
                $wrap.find(".wrap").eq(i).addClass("active").siblings().removeClass("active");
            }
        }
    });


    //슬라이드 배너 슬릭
    $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
    });

    //신간도서 반응형 슬릭 해제
    var slider = $(".new-slide .new-slider");  	
    var slickOptions = { 		
                            arrows:true,
                            prevArrow: $(".new-slide .left"),
                            nextArrow:$(".new-slide .right"),
                        };  	

    
    $(window).on("load resize", function() { 		
        if($(window).width() < 767) { 			
            slider.slick("unslick"); 		
        }else{ 			
            slider.not(".slick-initialized").slick(slickOptions); 		
        } 
    });


});