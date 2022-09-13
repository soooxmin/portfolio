$(function () {
   
    //슬라이드 배너 슬릭
    $(".slide-banner").slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed: 1500,
    });

    //별점
    $(".review .stars .iconify").click(function () {

        $(this).addClass("active").prevAll().addClass("active").nextAll();
        $(this).nextAll().removeClass("active");

    });

    
    // $(window).on("load resize", function () {
       
    //     if($(window).width() < 768){
            
    //         $(this).on("mousewheel", function(event){
    //             if (event.originalEvent.wheelDelta < 0){;
    //                 $(".maindesc .wrap .right .buttons").css({
    //                     transform: "translateY(0)",
    //                 });
    //             } else {
    //                 $(".maindesc .wrap .right .buttons").css({
    //                     transform: "",
    //                 });
    //             }
    //         });
           
    //     }

    // });




















});