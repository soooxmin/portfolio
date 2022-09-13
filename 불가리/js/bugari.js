$(function () {
    
    //스크롤탑 변수, 이미지 주소 변수
    let scrollTop;

    let imgSrc_per = "../images/banner-perfume.png";
    let imgSrc_wat = "../images/banner_watch.png";

    //마우스 호버할때 배너배경 바뀌게
    $(".watch").mouseenter(function () {    

        $(".banner").removeClass("per").addClass("wat");
        $(".watch-bg").addClass("on");
        $(".perfume-bg").removeClass("on");
        $(".watch").addClass("on");
        $(".perfume").removeClass("on")
    });
    $(".perfume").mouseenter(function () {
        $(".banner").removeClass("wat").addClass("per");
        $(".perfume-bg").addClass("on");
        $(".watch-bg").removeClass("on");   
        $(".perfume").addClass("on");
        $(".watch").removeClass("on");
    });



    //이미지 슬라이더 이닛,에프터 이벤트
    $(".img-slider").on("init",function (event,slick) {
        
        $(".txt-con .box").eq(slick.currentSlide).addClass("active");
       
        $(".img-slider .item.slick-current").mouseenter(function () {
            $(".mouse-pointer").css({
                backgroundColor: "#a44e048d",
                width: "30px",
                height: "30px",
            })
        }).mouseleave(function () {
            $(".mouse-pointer").css({
                backgroundColor: "",
                width: "",
                height: "",
            });
        });
    
    }).on("afterChange",function (event,slick,currentSlide,nextSlide) {
        
        $(".txt-con .box").removeClass("active").eq(currentSlide).addClass("active");
        
        $(".img-slider .item.slick-current").mouseenter(function () {
            $(".mouse-pointer").css({
                backgroundColor : "#a44e048d",
                width : "30px",
                height: "30px",
            }) 
        }).mouseleave(function () {
            $(".mouse-pointer").css({
                backgroundColor : "",
                width : "",
                height: "",
            }); 
        });
    });
 
    //이미지 슬라이더 슬릭
    $(".img-slider").slick({
        dots: false,
        arrows: true,
        prevArrow : $(".jewelry .left"),
        nextArrow : $(".jewelry .right"),
        slidesToShow: 3,
        variableWidth: true,
        centerMode: true,
        slidesToScroll: 1, 
    });


   //위로가기 버튼
    $(".top-btn").click(function () {
        scrollTop = $(window).scrollTop();
       $("html,body").animate({scrollTop: 0}, '300');
    });

   //하트 누르기
    $(".new .xi-heart").click(function () {
       $(this).toggleClass("active"); 
    });

  
  //마우스 호버시 원형 이벤트
    $(".new .img").mouseenter(function () {
        $(".mouse-pointer").css({
             backgroundColor : "#a44e048d",
             width : "30px",
             height: "30px",
        }) 
     }).mouseleave(function () {
         $(".mouse-pointer").css({
             backgroundColor : "",
             width : "",
             height: "",
        }); 
    });

    $(".wedding .img").mouseenter(function () {
        $(".mouse-pointer").css({
             backgroundColor : "#a44e048d",
             width : "30px",
             height: "30px",
        }) 
     }).mouseleave(function () {
         $(".mouse-pointer").css({
             backgroundColor : "",
             width : "",
             height: "",
        }); 
    });

   
   //마우스 따라다니는원
    $(window).on("mousemove", function (event) {
        
        const mousex = event.clientX;
        const mouseY = event.clientY;    
        
        // $(".pos").text(mousex + " / " + mouseY);

        $(".mouse-pointer").css({
            left :  mousex + "px",
            top :  mouseY + "px",
        })
    });

    //페이지별 오프셋
    let winH = $(window).height();
    let sec2Top = $(".high-jewelry").offset().top;
    let sec3Top = $(".jewelry").offset().top;
    let sec5Top = $(".new").offset().top;
    let sec6Top = $(".wedding").offset().top;
    let videoTop = $(".fixVideo-wrap").offset().top;
   
    //페이지 스크롤 이벤트
    $(window).scroll(function () {
       
        scrollTop = $(this).scrollTop();
        
        //전체페이지 스크롤 이벤트
        if(scrollTop > sec3Top){
            $(".top-btn").css({
                display : "block",
            });
        }else{
            $(".top-btn").css({
                display : "",
            })
        }
    
        if(scrollTop + (winH * 0.4) > sec2Top) {
            $(".high-jewelry").addClass("change");
        }else{
            $(".high-jewelry").removeClass("change");
        }
        if(scrollTop + (winH * 0.5) > sec3Top) {
            $(".jewelry").addClass("change");
            $(".jewelry .slide-con").addClass("active");
        }else{
            $(".jewelry").removeClass("change");
            $(".jewelry .slide-con").removeClass("active");
        }

        if( scrollTop +(winH * 0.5) > $(".high-jewelry .item1").offset().top){
            $(".item1 .txt").addClass("active");
            $(".item1 .img").addClass("active");
        }else{
            $(".item1 .txt").removeClass("active");
            $(".item1 .img").removeClass("active");
        }
        if( scrollTop +(winH * 0.7) > $(".high-jewelry .item2").offset().top){
            $(".item2 .txt").addClass("active");
            $(".item2 .img").addClass("active");
        }else{
            $(".item2 .txt").removeClass("active");
            $(".item2 .img").removeClass("active");
        }
        if( scrollTop +(winH * 0.7) > $(".high-jewelry .item3").offset().top){
            $(".item3 .txt").addClass("active");
            $(".item3 .img").addClass("active");
        }else{
            $(".item3 .txt").removeClass("active");
            $(".item3 .img").removeClass("active");
        }
        if( scrollTop +(winH * 0.7) > $(".high-jewelry .item4").offset().top){
            $(".item4 .txt").addClass("active");
            $(".item4 .img").addClass("active");
        }else{
            $(".item4 .txt").removeClass("active");
            $(".item4 .img").removeClass("active");
        }


        //비디오 픽스
        if(scrollTop > sec5Top -  winH*0.1){

            if ( scrollTop > videoTop && scrollTop < sec6Top ) {
                $(".fixVideo").css("position", "fixed");
            } else {
                $(".fixVideo").css({
                    position: "absolute",
                });
            }

        }

        //비디오 픽스한뒤 상품 스크롤이벤트
        if (scrollTop > videoTop){


            $(".new .box1 .txt").css({
                transform : "translateY(" + -(scrollTop - (videoTop - winH * 0.55)) + "px)",
            });
            $(".new .box1 .img").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.45)) + "px)",
            });
            $(".new .box2 .txt").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.6)) + "px)",
            });
            $(".new .box2 .img").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.55)) + "px)",
            });
            $(".new .box3 .txt").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.45)) + "px)",
            });
            $(".new .box3 .img").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.6)) + "px)",
            });
            $(".new .box4 .txt").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.54)) + "px)",
            });
            $(".new .box4 .img").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.65)) + "px)",
            });
            

        }else{

            $(".new .box1 .txt").css({
                transform: "",
            });
            $(".new .box1 .img").css({
                transform: "",
            });
            $(".new .box2 .txt").css({
                transform: "",
            });
            $(".new .box2 .img").css({
                transform: "",
            });
            $(".new .box3 .txt").css({
                transform: "",
            });
            $(".new .box3 .img").css({
                transform: "",
            });
            $(".new .box4 .txt").css({
                transform: "",
            });
            $(".new .box4 .img").css({
                transform: "translateY(" + -(scrollTop - (videoTop - winH * 0.67)) + "px)",
            });

        }
            
        
    

        
       


    });


















});