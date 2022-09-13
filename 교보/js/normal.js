$(function () {

    const $item =$(".item1").width();
    $(".best-seller .btn-area .right").click(function () {
        $(".rank-slide").stop().animate({left: -$item}, 500);
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
        autoplaySpeed: 1800,
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            }]
    });

    $(".new-slide .new-slider").slick({
        arrows:true,
        prevArrow: $(".new-slide .left"),
        nextArrow:$(".new-slide .right"),
        slidesToShow: 5, // 보여질 슬라이드 갯수
        slidesToScroll: 1, // 넘겨질 슬라이드 갯수
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 1700, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,  
                    infinite: true,
                    dots: false,
                    arrows: false,
                    variableWidth: true,
                }
            }]
    });


});




















        // let $index = $(this).index();
        // let $bt = $(".btn-area");
        // let $rank = $(".ranking-box");

        // if( $index === 0){
        //     $bt.find(".day").addClass("active").siblings().removeClass("active");
        //     $rank.find(".dayRank-slide").addClass("active").siblings().removeClass("active");
        // }else if( $index === 1){
        //     $bt.find(".week").addClass("active").siblings().removeClass("active");
        //     $rank.find(".weekRank-slide").addClass("active").siblings().removeClass("active");
        // }else{
        //     $bt.find(".month").addClass("active").siblings().removeClass("active");
        //     $rank.find(".monthRank-slide").addClass("active").siblings().removeClass("active");
        // }

        // $(".ranking-box .dayRank-slide").slick("setPosition");
        // $(".ranking-box .weekRank-slide").slick("setPosition");
        // $(".ranking-box .monthRank-slide").slick("setPosition");