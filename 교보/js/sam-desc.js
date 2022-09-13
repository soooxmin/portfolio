$(function () {
   
    $(".tab-menu div").click(function () {
       
        $(this).addClass("tab").siblings().removeClass("tab");

        if($(this).hasClass("basic")){
            $("section.basic").addClass("tab").siblings().removeClass("tab");
        }else{
            $("section.infinite").addClass("tab").siblings().removeClass("tab");
        }

    });

    let mainbox_offset = parseInt($(".mainbox").offset().top);
    let desc_offset = parseInt($(".desc").offset().top);
    let reading_offset = parseInt($(".reading").offset().top);
    let many_offset = parseInt($(".manybooks").offset().top);
    let pay_offset = parseInt($(".pay").offset().top);
    let anywhere_offset = parseInt($(".anywhere").offset().top);

    const winHeight = $(window).innerHeight();

    $(window).scroll(function () {
        
        const pos = $(this).scrollTop();
        // $(".pos").text(pos);

        if(pos + (winHeight * 0.3) > desc_offset ){
            $(".desc .left").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        }else{
            $(".desc .left").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if(pos + (winHeight * 0.4) > reading_offset){
            $(".reading h3, .reading p, .infinite .reading h3, .infinite .reading p").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        }else{
            $(".reading h3, .reading p, .infinite .reading h3, .infinite .reading p").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if(pos + (winHeight *0.4) > many_offset){
            $(".manybooks .inner > div").css({
                opacity: "1",
                visibility: "visible",
                transform: "translate(-50%,-50%)",
            });
        }else{
            $(".manybooks .inner > div").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if( pos + (winHeight * 0.4) > pay_offset){
            $(".pay .left").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        }else{
            $(".pay .left").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

        if(pos + (winHeight * 0.4 ) > anywhere_offset){
            $(".anywhere .title").css({
                opacity: "1",
                visibility: "visible",
                transform: "translateY(0)",
            });
        }else{
            $(".anywhere .title").css({
                opacity: "",
                visibility: "",
                transform: "",
            });
        }

    });



});