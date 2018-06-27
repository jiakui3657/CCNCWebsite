//显示返回顶部按钮
$(window).scroll(function(){
    console.log($(document).scrollTop());
    console.log($(window).height());
    console.log($(document).height());
    if ($(document).scrollTop() + $(window).height()+1 >= $(document).height()) {
        $(".back-top").show();
    } else {
        $(".back-top").hide();
    }
});

//点击返回顶部
$(".back-top").on("click",function(){
    $(window).scrollTop(0,300);
})

//底部悬浮显示二维码
$("footer .link .footer-icon span").hover(function(){
    $("footer .link img").show();
},function(){
    $("footer .link img").hide();
})

//悬浮顶部导航栏移动边框
var left=$("header .container .list ul li:eq("+2+") a").position().left;
var width=$("header .container .list ul li:eq("+2+") a").width();
$("header .container .list span").css({"width":width,"left":left});
var tid = 0;
$("header .container .list ul li").hover( function() {
var index=$(this).index();
   tid = setTimeout( function() {
           left=$("header .container .list ul li:eq("+index+")").children("a").position().left;
           width=$("header .container .list ul li:eq("+index+")").children("a").width();
           left=left+"px";
           width=width+"px";
           $("header .container .list span").animate({left:left,width:width},200);
       }, 60 );
}, function() {
    clearTimeout( tid );//当在1秒内退出了hover事件就取消计时代码
} );
$("header .container .list").on("mouseleave",function(){
    left=$("header .container .list ul li:eq("+2+")").children("a").position().left;
    width=$("header .container .list ul li:eq("+2+")").children("a").width();
    left=left+"px";
    width=width+"px";
    $("header .container .list span").animate({left:left,width:width},200);
})

