$(function() {

    productCount_func()
    
    
    $(".chk-all input").click(function () {
       
        if($(this).prop("checked")){
            $(".item").find("input[type=checkbox]").prop("checked",true);
        }else{
            $(".item").find("input[type=checkbox]").prop("checked",false);
        }
        productCount_func();
        // totalPrice_func($am1, $am2, $am3); 
        amountPrice_func();      
    });

    $(".item input[type=checkbox]").click(function () {
        
        
        if ($(".item input[type=checkbox]:checked").length == $(".item input[type=checkbox]").length) {
            $("#chk-all").prop("checked", true);
        } else {
            $("#chk-all").prop("checked", false);
        }
        productCount_func();
        amountPrice_func(); 

    });
    
    $(".item .box .countBox input[type=button]").click(function () {
       
        const $this = $(this);
        const $quantity = $this.siblings("input[type=text]");
        let $value = $quantity.val();
              
        if($this.val() === "-"){
            if($value>1) $quantity.val( --$value );
        }else{
            if($value<10)$quantity.val( ++$value );
        }
        amountPrice_func();
    });
    
    amountPrice_func()

//---------------------------------------------------------------------------------------------
    
    function productCount_func() {
        let $product = $(".cartlist ul").find("input[type=checkbox]:checked");
        $(".total-cart .calc-area .counting").text($product.length);
    }
    
    function amountPrice_func() {
        const $price1 = $(".item1").find(".price").text().replace(/[^0-9]/g, "");
        const $val1 = $(".item1").find("input[type=text]").val();
        const $am1 = $price1 * $val1;
        const $price2 = $(".item2").find(".price").text().replace(/[^0-9]/g, "");
        const $val2 = $(".item2").find("input[type=text]").val();
        const $am2 = $price2 * $val2;
        const $price3 = $(".item3").find(".price").text().replace(/[^0-9]/g, "");
        const $val3 = $(".item3").find("input[type=text]").val();
        const $am3 = $price3 * $val3;

        $(".item1").find(".amPrice1").text($am1.toLocaleString());
        $(".item2").find(".amPrice2").text($am2.toLocaleString());
        $(".item3").find(".amPrice3").text($am3.toLocaleString());
              
        totalPrice_func($am1, $am2, $am3);       
    }

    function totalPrice_func(a,b,c) {

        let $totalsum;
        // let $delivery = $(".calc-area .deli-price").text().replace(/[^0-9]/g,"");
        let $delivery;
        let $sale;

        if($(".item1 input[type=checkbox]").is(":checked") == false){
            a = 0;
        }else{
            a > 0;
        }
        if($(".item2 input[type=checkbox]").is(":checked") == false){
            b = 0;
        }
        else{
            b > 0;
        }
        if($(".item3 input[type=checkbox]").is(":checked") == false){
            c = 0;
        }else{
            c > 0;
        }

        if($("input[type=checkbox]").is(":checked") == true){
            $delivery = 3000;
        }else{
            $delivery = 0;
        }

        $totalsum = a + b + c;
        $sale = $totalsum * 0.1;

        $(".calc-area").find(".item-price").text($totalsum.toLocaleString());
        $(".calc-area").find(".sale-price").text(($totalsum*0.1).toLocaleString());
        $(".calc-area").find(".deli-price").text(($delivery).toLocaleString());

        let $totalPrice = $totalsum - parseInt($sale) + $delivery ;

        $(".totalPrice-sum").find(".totalPrice").text($totalPrice.toLocaleString());
    }

});


// if( $(".item input[type=checkbox]").is(":checked") == true){
//     amountPrice_func();
// }else{  - parseInt($sale) + parseInt($delivery)

//     const chk1 = $(".item1 input[type=checkbox]");
//     const chk2 = $(".item2 input[type=checkbox]");
//     const chk3 = $(".item3 input[type=checkbox]");

//     if($(this) == chk1){
//         $(this).val(0);
//     }
// }




// function chk_func() {
        
//     if($("#chk").is(":checked") == false){
//         $(".item").find("input[type=text]").val(0);
//     }else{
//         $(".item").find("input[type=text]").val();
//     }


//     // const chkCount = $(".item input[type=checkbox]").length;
//     // var sum = 0;
    
//     // for (var i = 0; i < chkCount ; i++) {
//     //     if ($(".item input[type=checkbox]")[i].checked == true) {
//     //         sum += parseInt($(".item input[type=checkbox]")[i].value);
//     //     }
//     // }
// }