/**
 * Created by mrzhang on 2017/12/21.
 */
//底部悬浮显示二维码
$("footer .link .footer-icon span").hover(function(){
    $("footer .link img").show();
},function(){
    $("footer .link img").hide();
})

//悬浮顶部导航栏移动边框
var left=$("header .container .list ul li:eq("+0+") a").position().left;
var width=$("header .container .list ul li:eq("+0+") a").width();
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
    only();
})

//顶部显示导航栏底部边框
only();
function only(){
    var num=location.search.substring(7);
    switch(num) {
        case "1":
             var left=$("header .container .list ul li:eq("+0+") a").position().left;
             var width=$("header .container .list ul li:eq("+0+") a").width();
             $("header .container .list span").css({"width":width,"left":left});
            break;
        case "2":
            var left=$("header .container .list ul li:eq("+1+") a").position().left;
            var width=$("header .container .list ul li:eq("+1+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
            break;
        case "3":
            var left=$("header .container .list ul li:eq("+2+") a").position().left;
            var width=$("header .container .list ul li:eq("+2+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
            break;
        case "4":
            var left=$("header .container .list ul li:eq("+3+") a").position().left;
            var width=$("header .container .list ul li:eq("+3+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
            break;
        case "5":
            var left=$("header .container .list ul li:eq("+4+") a").position().left;
            var width=$("header .container .list ul li:eq("+4+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
            break;
        case "6":
            var left=$("header .container .list ul li:eq("+5+") a").position().left;
            var width=$("header .container .list ul li:eq("+5+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
            break;
        default:
            var left=$("header .container .list ul li:eq("+0+") a").position().left;
            var width=$("header .container .list ul li:eq("+0+") a").width();
            $("header .container .list span").css({"width":width,"left":left});
    };
};

//显示返回顶部按钮
$(window).scroll(function(){
    if ($(document).scrollTop() + $(window).height()+1 >= $(document).height()) {
        $(".back-top").show();
    } else {
        $(".back-top").hide();
    }
});

//点击返回顶部
$(".back-top").on("click",function(){
    $('body,html').animate({'scrollTop':0},500)
})