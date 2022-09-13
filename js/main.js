$(function () {

  //마우스 따라다니는 원
    $(window).on("mousemove",function (event) {
       
        const mousex = event.clientX;
        const mousey = event.clientY;

        $(".mouse-cursor").css({
            left : mousex + "px",
            top : mousey + "px",
        });

    });
   
  // 풀페이지 플러그인
    $("#fullpage").fullpage({
        navigation : true,
        sectionsColor: ["#FFFCF7", "#FFFCF7", "#FFFCF7","#FFFCF7"],
        loopBottom: true,

        afterLoad:function(origin,destination,direction) {
          if(destination.index === 1){
            $(".about .img-area").addClass("active");
            $(".about .txt-area").addClass("active");
            $(".about .skill").addClass("active");
          }else{
            $(".about .img-area").removeClass("active");
            $(".about .txt-area").removeClass("active");
            $(".about .skill").removeClass("active");
          };
          
          if(destination.index === 2){
            $(".slider .img-slider").addClass("active");
            $(".slider .txt-area").addClass("active");
          }else{
            $(".slider .img-slider").removeClass("active");
            $(".slider .txt-area").removeClass("active");
          };

          if(destination.index === 3){
            $(".end .txt").addClass("active");
          }else{
            $(".end .txt").removeClass("active");
          }
        }
    });
    
  //슬릭 페이지 넘버
    const pageNum = $(".txt-area .page-num");

  //슬릭 페이지 넘버링 이벤트
    $(".img-slider").on("init",function (event,slick) {
       $(".txt-slider .item").eq(slick.currentSlide).addClass("active"); 
        pageNum.find(".num1").text("0" + (slick.currentSlide +1) );
        pageNum.find(".num2").text("0" + slick.slideCount );
    }).on("afterChange",function (event,slick,currentSlide,nextSlide) {
        $(".txt-slider .item").removeClass("active").eq(currentSlide).addClass("active");
        pageNum.find(".num1").text("0" + (currentSlide + 1));
    });

  //슬릭 슬라이더
    $(".img-slider").slick({
        arrows: true,
        prevArrow: $(".btn-area .prev"),
        nextArrow: $(".btn-area .next"),
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });

  //파티클 플러그인
    particlesJS.load("end", "js/particlesjs-config(2).json", function () {
        // console.log('callback - particles.js config loaded');
    });






























});