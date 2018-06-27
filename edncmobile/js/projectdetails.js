/**
 * Created by mrzhang on 2017/12/22.
 */
window.onload = function() {
    var height=$(".content").height();
    height=height/100*2;
    height=Math.floor(height);
    height=height+"rem";
    $(".content .swiper-button-next").css({"top":height});
    $(".content .swiper-button-prev").css({"top":height});
    var mySwiper1 = new Swiper('.swiper-container1',{
        loop : true,
        spaceBetween: 10,
        initialSlide:0,
        slidesPerView: 1.1,
        centeredSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
    })
    var mySwiper = new Swiper('.swiper-container',{
        onlyExternal : true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    })

}
var flag=0;
$(".content .swiper-container .a2").on("click",function(){

    if($(".content .swiper-container .a2").hasClass("curr")){
        console.log(true);
        $(".content .swiper-container .a2").css("opacity",".7");
    }
})
$(".content .swiper-container .a1").on("click",function(){
    if($(".content .swiper-container .a1").hasClass("curr")){
        $(".content .swiper-container .a1").css("opacity",".7");
        console.log(true);
    }
})


