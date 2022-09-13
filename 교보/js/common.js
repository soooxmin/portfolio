$(function () {
  

    //반응형 풋터에서 슬라이드 토글
    $(".footer .box2 span").click(function () {
        $(".footer .box2 ul").slideToggle();
    });

    //반응형 헤더 버튼
	$(".header .mobile-gnb .trigger").click(function () {
        $(".header .mobile-gnb ul").slideToggle();

        $(this).toggleClass("on");
    });

    //위로가기 버튼
    let $btnTop = $(".main .topbtn");

    $btnTop.click(function () {
        $("html,body").animate({ scrollTop: 0 }, '300');
    });

    let scrollTop;

    //위로가기 버튼 나타나도록
    $(window).scroll(function () {
        scrollTop = $(this).scrollTop();

        if(scrollTop > 500){
            $btnTop.css({
                display : "block",
            });
        }else{
            $btnTop.css({
                display : "",
            })
        }
    });


});