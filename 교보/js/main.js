$(function () {


    //뷰어 슬라이드 이닛,에프터체인지
    $(".viewer-slider").on("init", function (event, slick) {
        $(".viewer-text .txt-item").eq(slick.currentSlide).addClass("active");
    }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".viewer-text .txt-item").removeClass("active").eq(currentSlide).addClass("active");
    });

    //뷰어 슬릭
    $(".viewer-slider").slick({
        dots: true,
        arrows: true,
        prevArrow: $(".viewer .iconify.left"),
        nextArrow: $(".viewer .iconify.right"),
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
            }]
    });

    //무료도서 이닛,에프터체인지
    $(".free-book .slide-area").on("init", function (event, slick) {
        $(".free-book .book-desc .name").eq(slick.currentSlide).addClass("active");
    }).on("afterChange", function (event, slick, currentSlide, nextSlide) {
        $(".free-book .book-desc .name").removeClass("active").eq(currentSlide).addClass("active");
    })

    //무료도서 슬릭
    $(".free-book .slide-area").slick({
        arrows: true,
        prevArrow: $(".free-book .iconify.leftbt"),
        nextArrow: $(".free-book .iconify.rightbt"),
        initialSlide: 0,
        variableWidth: true,
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    infinite: true,
                    dots: false,
                    arrows: true,
                }
            }]
    })

    //이북리더기 세로 마우스 스크롤
    $(".vertical-slide .slide-con").on('wheel', function (e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    });

    //이북리더기 이닛,비포체인지
    $(".vertical-slide .slide-con").on("init", function (event, slick) {
        updateSlide_count(slick);
        $(".progress").css({height: (1 / $totalCount) * 100 + "%",});
    }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
        updateSlide_count(slick);
        // console.log(nextSlide / $totalCount);
        $(".progress").css({top: (nextSlide / $totalCount) * 100 + "%",});
    });

    //이북리더기 슬릭
    $(".vertical-slide .slide-con").slick({
        vertical: true,
        arrows: false,
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false,
                    infinite: true,
                    dots: true,
                    arrows: true,
                    prevArrow: $(".reader .iconify.left"),
                    nextArrow: $(".reader .iconify.right"),
                }
            }]
    });

    //도서분류 탭메뉴
    $(".book-tabMenu .btn-area button").click(function () {
        let $this = $(this);
        let itemIndex = $this.index();
        let $menu = $(".book-tabMenu .book-area");
       
        $this.addClass("tab").siblings().removeClass("tab");

        for(let i = 0; i < 5; i++){
            if(itemIndex == i){
                $menu.find(".wrap").eq(i).addClass("tab").siblings().removeClass("tab");
            }
        }
    });


    //슬리이드 넘버 카운트 함수
    function updateSlide_count(event, next) {
        $totalCount = event.slideCount;
        $current = event.currentSlide;
        $firstBar = $current / ($totalCount - 1);
        $changeBar = next / ($totalCount - 1);
    }


    // 페이지별 오프셋 변수
    let visual_offset = parseInt($(".visual").offset().top);
    let char_offset = parseInt($(".character").offset().top);
    let manybooks_offset = parseInt($(".many-books").offset().top);
    let viewer_offset = parseInt($(".viewer").offset().top);
    let type_offset = $("section.book-type").offset().top;
    let free_offset = parseInt($(".free-book").offset().top);
    let sam_offset = parseInt($(".sam").offset().top);
    let reader_offset = parseInt($(".reader").offset().top);


    //윈헤이트
    const winHeight = $(window).innerHeight();
    console.log(winHeight);


    //스크롤 이벤트
    $(window).scroll(function () {

        const pos = parseInt($(this).scrollTop());


        $(".pos").text(pos + "/" + type_offset);

        if (pos + (winHeight * 0.4) > char_offset) {
            $(".character .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".character .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > manybooks_offset) {
            $(".many-books .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
            $(".many-books .title p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".many-books .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
            $(".many-books .title p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > viewer_offset) {
            $(".viewer .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
            $(".viewer .title p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".viewer .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
            $(".viewer .title p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > type_offset) {
            $(".book-type .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
            $(".book-type .title p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".book-type .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
            $(".book-type .title p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > free_offset) {
            $(".free-book .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".free-book .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > sam_offset) {
            $(".sam .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
            $(".sam .title p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".sam .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
            $(".sam .title p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if (pos + (winHeight * 0.4) > reader_offset) {
            $(".reader .title h3").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
            $(".reader .title p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        } else {
            $(".reader .title h3").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
            $(".reader .title p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }
    });


});