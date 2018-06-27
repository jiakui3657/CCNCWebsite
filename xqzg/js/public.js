/**
 * Created by mrzhang on 2017/12/21.
 */
//var url = location.search;
//var num=url.split('=')[1];
//switch(num) {
//        case "1":
//            $("header .navigation li:eq("+0+")").css({"color":"#000","font-weight":"600"});
//            break;
//        case "2":
//            $("header .navigation li:eq("+1+")").css({"color":"#000","font-weight":"600"});
//            break;
//        case "3":
//            $("header .navigation li:eq("+2+")").css({"color":"#000","font-weight":"600"});
//            break;
//        case "4":
//            $("header .navigation li:eq("+3+")").css({"color":"#000","font-weight":"600"});
//            break;
//        case "5":
//            $("header .navigation li:eq("+4+")").css({"color":"#000","font-weight":"600"});
//            break;
//        case "6":
//            $("header .navigation li:eq("+5+")").css({"color":"#000","font-weight":"600"});
//            break;
//        default:
//            $("header .navigation li:eq("+0+")").css({"color":"#000","font-weight":"600"});
//    };
$(".back-top").on("click",function(){
    $('body,html').animate({'scrollTop':0},500)
})

$(window).scroll(function(){
    if($(window).scrollTop()>$(document).height()/4){
        $(".back-top").show()
    }else{
        $(".back-top").hide()
    }
});