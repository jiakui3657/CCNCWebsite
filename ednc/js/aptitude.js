//资质列表切换与悬浮
$(".content .container .aptitude .tab ul li:eq("+0+")").css("color","#0771c2");
var left=$(".content .container .aptitude .tab ul li:eq("+0+")").position().left;
var width=$(".content .container .aptitude .tab ul li:eq("+0+")").width();
$(".content .container .aptitude .tab span").css({"width":width,"left":left});
var tid = 0;
var flag=0;
$(".content .container .aptitude .tab ul li").on("click",function(){
    flag=$(this).index();
    $(".content .container .aptitude .cen").hide();
    $(".content .container .aptitude .cen:eq("+flag+")").show();
})
$(".content .container .aptitude .tab ul li").hover( function() {
    var index=$(this).index();
    tid = setTimeout( function() {
           obly(index);
       }, 60 );
}, function() {
    clearTimeout( tid );//当在1秒内退出了hover事件就取消计时代码
} );
$(".content .container .aptitude .tab").on("mouseleave",function(){
    obly(flag);
})
function obly(flag){
    $(".content .container .aptitude .tab ul li").css("color","#999");
    $(".content .container .aptitude .tab ul li:eq("+flag+")").css("color","#0771c2");
    left=$(".content .container .aptitude .tab ul li:eq("+flag+")").position().left;
    width=$(".content .container .aptitude .tab ul li:eq("+flag+")").width();
    left=left+"px";
    width=width+"px";
    $(".content .container .aptitude .tab span").animate({left:left,width:width},200);
}

//放大资质证书
$(".content .container .aptitude .cen img").on("click",function(){
    $(".mask").show();
    var src=$(this).attr("src");
    $(".mask img").attr("src",src);
    unScroll();
})
$(".mask").on("click",function(){
    $(this).hide();
    removeUnScroll();
})

//禁止滚动条滚动
function unScroll() {
    var top = $(document).scrollTop();
    $(document).on('scroll.unable',function (e) {
        $(document).scrollTop(top);
    })
}

//移除禁止滚动条滚动
function removeUnScroll() {
    $(document).unbind("scroll.unable");
}






