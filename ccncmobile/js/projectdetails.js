$(function(){
    /*项目案列详情tu轮播*/
    function scroll(){

        $(".list").animate({"margin-left":"-100%"},function(){
            $(".list li:eq(0)").appendTo($(".list"))
            $(".list").css({"margin-left":0})
        })
         clearInterval(cc);

    }
    var cc=3000
$(".small_banner img").on("click",function(){
        scroll();
         clearInterval(timer);

})
    var timer=setInterval(scroll,3000);
//    if($(".list li").length<=1){
//        clearInterval(timer);
//        $(".small_banner").css("display","none");
//    }
});
