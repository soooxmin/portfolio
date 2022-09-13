$(function () {
  
    let $btnTop = $(".main .topbtn"); 

    $(".footer .box2 span").click(function () {
        $(".footer .box2 ul").slideToggle();
    });



	$btnTop.click(function() {
		$("html,body").animate({scrollTop: 0}, '300');
	});


	$(".header .mobile-gnb .trigger").click(function () {
        $(".header .mobile-gnb ul").slideToggle();

        $(this).toggleClass("on");
    });

    let scrollTop;

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