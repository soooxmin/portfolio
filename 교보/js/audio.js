$(function () {
   
    
    $(".slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        variableWidth: true,
        centerMode: true,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 1000,
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

    })









});