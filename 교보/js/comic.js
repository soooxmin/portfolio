$(function () {
    
    
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


    $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 2000,
    });

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