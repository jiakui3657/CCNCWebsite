 $(function(){
     var indexActive = 0;
     /*首页资质与荣誉右侧鼠标滑过效果和新闻活动右侧鼠标划过效果*/
     /*新闻活动*/
    $(".newsActivity").mouseenter(
        function(){
            $(this).find(".newsContent").slideDown("fast");
            $(this).find("p").hide();
            $(this).find(".layout_div").hide();
        }).mouseleave( function(){
            $(this).find(".newsContent").fadeOut("fast");
            $(this).find("p").show();
            $(this).find(".layout_div").show();
        }
    );
    /*资质与荣誉*/
    /*资质与荣誉新闻*/
    var being = false;
     $(".Qualification_right a").on("mouseenter",function(){
         if(being == true) {
             return false;
         }
         $(this).children("div").animate({
             height: "100%",
             paddingTop:"60px"
         }, 300);
         $(this).children("div").children("i.curr").css("display","block");
         $(this).children("div").children("em").css("margin-bottom","15px");
         being = true;
     });
     $(".Qualification_right a").on("mouseleave",function(){
         if(being == false) {
             return false;
         }
         $(this).children("div").animate({
             height: "120px",
             paddingTop:"10px"
         }, 300);
         $(this).children("div").children("i.curr").css("display","none");
         $(this).children("div").children("em").css("margin-bottom","10px");
         being = false;
     });
     /*资质与荣誉专访*/
     var being1 = false;
     $(".interview a").on("mouseenter",function(){
         if(being1 == true) {
             return false;
         }
         $(this).children("div").animate({
             height: "100%",
             paddingTop:"60px"
         }, 300);
         $(this).children("div").children("i.curr").css("display","block");
         $(this).children("div").children("em").css("margin-bottom","15px");
         being1 = true;
     });
     $(".interview a").on("mouseleave",function(){
         if(being1 == false) {
             return false;
         }
         $(this).children("div").animate({
             height: "120px",
             paddingTop:"10px"
         }, 300);
         $(this).children("div").children("i.curr").css("display","none");
         $(this).children("div").children("em").css("margin-bottom","10px");
         being1 = false;
     });
     /*首页资质与荣誉右侧鼠标滑过效果和新闻活动右侧鼠标划过效果*/
    //资质荣誉 新闻活动 经典案例 服务产品  选项卡切换效果
    $(".nav-tabs li").click(function(){
        indexActive=$(this).index();
        $(this).children("a").children(".activeIcon").show();
        $(this).children("a").children(".defaultIcon").hide();
        $(this).siblings("li").children("a").children(".activeIcon").hide();
        $(this).siblings("li").children("a").children(".defaultIcon").show();
        $(this).addClass("active conditions1").siblings("li").removeClass("active conditions1");
        $(this).css("opacity","1");
        $('.tab-content').find('.tab-pane').eq($(this).index()).addClass("active").siblings(".tab-pane").removeClass("active");
    });
     $(".nav-tabs li").on("mouseover",function(){
         indexActive=$(this).index();
         if($(this).hasClass("active")){
             return false;
         }
         $(this).children("a").children(".activeIcon").show();
         $(this).children("a").children(".defaultIcon").hide();
         $(this).addClass("active conditions");
         $(this).css("opacity","0.7");
         $(this).css("filter","Alpha(opacity=80)")
     })
     ;$(".nav-tabs li").on("mouseout",function(){
         indexActive=$(this).index();
         if(!$(this).hasClass("conditions1")){
             $(this).children("a").children(".activeIcon").hide();
             $(this).children("a").children(".defaultIcon").show();
             $(this).removeClass("active conditions");
             $(this).css("opacity","1");
         }
     });
    //默认选中第一项的并显示为白色图标
    hasActive(indexActive);
     //资质荣誉 新闻活动 经典案例 服务产品随机切换tab选项卡加载
      function random(){
         var  arr =[0,1,2,3];
         var index_1 = Math.floor((Math.random()*arr.length));
         $(".showItems li").each(function(index,elem){
            if(arr[index_1]==index){
                $(this).addClass("active conditions1").siblings("li").removeClass("active")
                $('.tab-content').find('.tab-pane').eq($(this).index()).addClass("active").siblings(".tab-pane").removeClass("active");
            }
        })
        hasActive(index_1)
     }

    random()
   //资质荣誉 新闻活动 经典案例   服务产品 选项卡点击并且切换默认图标
    function hasActive(indexActive){
        $(".nav-tabs li").each(function(index,elem){
            if(index==indexActive){
                $(this).find(".activeIcon").show();
                $(this).find(".defaultIcon").hide();
                $(this).siblings("li").find(".activeIcon").hide()
                $(this).siblings("li").find(".defaultIcon").show()
            }
        })
     }
       //资质与荣誉 图标对应区域显示内容
       $(".icon_collection .Qualification_item").mouseenter(function(){
          var s=  $(this).index();
          $(".item_collection .Quali_item").each(function(index,elem){
            if(s==index){
               $(this).show();
               $(this).mouseleave(function(){
                    $(this).hide()
               })
            }
          })
       })
       //初始化banner轮播图
        $('#northCarousel').carousel({
          interval: 3000
        })
})