$(function () {
    /*资质能力高宽相等*/
    $(".qualifying_ability ul li").height($(".qualifying_ability ul li").width());
    /*解决方案高宽相等*/
    $(".solution div a").height($(".solution div a").width());
    /*首页菜单切换*/
    $(".index_menu ul li").on("click",function () {
        $(this).addClass("curr").siblings("li").removeClass("curr");
        switch ($(this).index())
        {
            case 0:
                $('html, body').scrollTop(0);
                break;
            case 1:
                $('html, body').scrollTop($(".news").offset().top-60);
                break;
            case 2:
                $('html, body').scrollTop($(".classic_case").offset().top-60);
                break;
            case 3:
                $('html, body').scrollTop($(".solution").offset().top-60);
                break;
        }
    });
    /*页面滚动时*/
    $(window).scroll(function () {
    //console.log($(window).scrollTop());
    //console.log($(".qualifying_ability").offset().top);
        if($(window).scrollTop()<=$(".qualifying_ability").offset().top) {
            $(".index_menu ul li").removeClass("curr");
            $(".index_menu ul li").eq(0).addClass("curr");
        }else if ($(window).scrollTop() >= $(".news").offset().top-60 && $(window).scrollTop() < $(".classic_case").offset().top-60) {
            $(".index_menu ul li").removeClass("curr");
            $(".index_menu ul li").eq(1).addClass("curr");
        }else if ($(window).scrollTop() >= $(".classic_case").offset().top-60 && $(window).scrollTop() < $(".solution").offset().top-60) {
            $(".index_menu ul li").removeClass("curr");
            $(".index_menu ul li").eq(2).addClass("curr");
        }else if($(window).scrollTop() >= $(".solution").offset().top-60){
            $(".index_menu ul li").removeClass("curr");
            $(".index_menu ul li").eq(3).addClass("curr");
        }
    })
});
function handleTouchEvent(event){
      //只跟踪一次触摸
      var flag=true;
      var time;
      if (flag){
      switch(event.type){
      case "touchend":
         this.time=setTimeout(function (){
         $(".index_menu").slideDown();
         this.time && clearTimeout(this.time);
      },1000);
       break;
       case "touchstart":
//                $(".index_menu").slideUp();
         this.time && clearTimeout(this.time);
         break;
      case "touchmove":
        $(".index_menu").slideUp();
        break;
            }
      }
}
       document.addEventListener("touchstart", handleTouchEvent, false);
       document.addEventListener("touchend", handleTouchEvent, false);
       document.addEventListener("touchmove", handleTouchEvent, false);