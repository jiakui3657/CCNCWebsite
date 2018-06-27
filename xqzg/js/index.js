/**
 * Created by mrzhang on 2017/12/20.
 */
//banner轮播图
  var mySwiper = new Swiper('.banner .swiper-container',{
    loop: true,
    paginationClickable :true,
    autoplayDisableOnInteraction : false,
    pagination: '.swiper-pagination',
    autoplay : 3000,
    calculateHeight : true,
  });
//解决方案轮播图
  var mySwiper = new Swiper('.product .swiper-container',{
    loop: false,
//    pagination : '.pagination',
    paginationClickable :false,
    autoplayDisableOnInteraction : false,
//    pagination: '.product .swiper-pagination',
    autoplay : 3000,
    calculateHeight : false,
    momentumBounce : false,
    momentumBounceRatio : 0,
  });
  //项目案例轮播图
    var mySwiper = new Swiper('.projectCase .swiper-container',{
      loop: true,
      pagination : '.pagination',
      paginationClickable :true,
      autoplayDisableOnInteraction : false,
      pagination: '.projectCase .swiper-pagination',
      autoplay : 500000,
      calculateHeight : true
    });

$(".projectCase .swiper-slide ul li").hover(function(){
    $(".projectCase .swiper-slide ul li .mask").hide(500);
    $(this).children(".mask").show(500,function(){
        $(this).find("p").fadeIn(100);
        $(this).find(".title").fadeIn(100);
    });
    $(this).children("a").children("i").css("transform","rotate(-90deg)");
    $(this).children("a").css("background-color","rgba(37,109,215,.0)");
    $(this).find("i").css("color","rgba(255,255,255,1)");
},function(){
    $(this).children(".mask").hide(0,function(){
        $(this).find("p").fadeOut(0);
        $(this).find(".title").fadeOut(0);
    });
    $(this).children("a").children("i").css("transform","rotate(0deg)");
    $(this).children("a").css("background-color","rgba(255,255,255,1)");
    $(this).find("i").css("color","rgba(0,0,0,1)");
})
//$(".projectCase .swiper-slide ul li .mask").hover(function(){
//    $(this).find("p").show();
//    $(this).find(".title").show();
//},function(){
//    $(this).find("p").hide();
//    $(this).find(".title").hide();
//})
var length=$(".news .content ul li").length;
for(var i=0;i<length;i++){
    console.log($(".news .content ul li:eq("+i+") .text i").text())
    if($(".news .content ul li:eq("+i+") .text i").text().length>55){
        $(".news .content ul li:eq("+i+") .text i").text($(".news .content ul li:eq("+i+") .text i").text().substring(0,55)+"...")
    }else{
        $(".news .content ul li:eq("+i+") .text i").text($(".news .content ul li:eq("+i+") .text i").text())
    }
}


//$(".swiper-container").
$(".swiper-slide").bind("contextmenu", function(){
    return false;
})

//顶部导航
$(".navigation li:eq("+1+")").on("click",function(){
//    $(".navigation li").removeClass("active");
//    $(this).addClass("active");
})
$(".navigation li:eq("+2+")").on("click",function(){
//    $(".navigation li").removeClass("active");
//    $(this).addClass("active");
    $('body,html').animate({'scrollTop':$(".company").offset().top-40},500)
})
$(".navigation li:eq("+5+")").on("click",function(){
//    $(".navigation li").removeClass("active");
//    $(this).addClass("active");
    $('body,html').animate({'scrollTop':$(".address").offset().top-40},500)
})

//底部导航
$(".midden li:eq("+0+")").on("click",function(){
    $('body,html').animate({'scrollTop':0},500)
})
$(".midden li:eq("+1+")").on("click",function(){
    $('body,html').animate({'scrollTop':$(".company").offset().top-40},500)
})
$(".midden li:eq("+4+")").on("click",function(){
    $('body,html').animate({'scrollTop':$(".address").offset().top-40},500)
})

//地图定位
map()
function map(){
    var map = new BMap.Map("map1");
    var point = new BMap.Point(109.212214,34.651057);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);// 创建标注
    map.addOverlay(marker);             // 将标注添加到地图中
    marker.disableDragging();           // 不可拖拽
}

var url = location.search;
var num=url.split('=')[1];
switch(num) {
        case "1":
            break;
        case "2":
            $('body,html').animate({'scrollTop':$(".company").offset().top-40},0)
            break;
        case "5":
            $('body,html').animate({'scrollTop':$(".address").offset().top-40},0)
    };
