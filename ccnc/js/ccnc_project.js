/**
 * Created by mrzhang on 2017/7/25.
 */
/**
 * Created by mrzhang on 2017/7/24.
 */
(function () {
    $(function () {
        /*左部分二级菜单切换*/
        $(".tab_ul li .img").css("transform","rotateX("+0+"deg)");
        var switchingCond = true;
         $(".tab_li").on("click",function () {
             if($(this).hasClass("active")){
                 return false;
             }
             if($(this).hasClass("curr")){
                 if(switchingCond){
                     $(".tab_ul li .img").css("transform","rotateX("+180+"deg)");
                     for(var i=0;i<2;i++){
                         $(".index:eq("+i+")").slideUp();
                     }
                     switchingCond = false;
                 }else {
                     $(".tab_ul li .img").css("transform","rotateX("+0+"deg)");
                     for(var i=0;i<2;i++){
                         $(".index:eq("+i+")").slideDown();
                     }
                     switchingCond = true;
                 }
                 return false;
             }
             for(var i=0;i<2;i++){
                 $(".index:eq("+i+")").slideUp();
             }
             $(".tab_ul li").eq(0).html($(this).html());
             var flag = $(this).index()-1;
             $(".cont").css("display","none");
             $(".cont:eq("+flag+")").css("display","block");
             $(".tab_ul li .img").css("transform","rotateX("+180+"deg)");
             switchingCond = false;
             })
    });
    /*左部分二级菜单切换*/
    $(function () {
         $(".cont_li").on("click",function () {
                 var flag=$(this).index();
                 $(".cont_li").removeClass("cont_active");
                 $(this).addClass("cont_active");
                 $(".cont1_case").removeClass("cont1_case_active");;
                 $(".cont1_case:eq("+flag+")").addClass("cont1_case_active");
         })
     })
     $(function () {
          $(".cont_li2").on("click",function () {
              var flag=$(this).index();
              $(".cont_li2").removeClass("cont2_active");
              $(this).addClass("cont2_active");
              $(".cont2_case").removeClass("cont2_case_active");
              $(".cont2_case:eq("+flag+")").addClass("cont2_case_active");
          })
      });
    /*/!*项目一览中每个li与上方的li距离相同*!/
    $(function () {
        console.log($(".cont2_case").eq(0).children("ul").children("li").eq(2).height())
        var oddTop = 20;
        var doubleTop = 20;
        for( var i = 0;i<$(".cont2_case").length;i++ ){
            for( var j = 0;j<$(".cont2_case").eq(i).children("ul").children("li").length;j++ ){
                if(j==0){
                    $(".cont2_case").eq(i).children("ul").children("li").eq(j).css({
                        "top":oddTop+"px",
                        "left":0
                    });
                }else if(j==1){
                    $(".cont2_case").eq(i).children("ul").children("li").eq(j).css({
                        "top":oddTop+"px",
                        "right":0
                    });
                }else if(j%2 == 0&&j>1){
                    console.log(j)
                    console.log($(".cont2_case").eq(i).children("ul").children("li").eq(j).height());
                    var previousHeight = $(".cont2_case").eq(i).children("ul").children("li").eq(j-2).height()+20;
                    console.log(previousHeight)
                    oddTop += previousHeight;
                    console.log(oddTop)
                    $(".cont2_case").eq(i).children("ul").children("li").eq(j).css({
                        "top":oddTop+"px",
                        "left":0
                    });
                }else if(j%2 == 1&&j>1){
                    var previousHeight = $(".cont2_case").eq(i).children("ul").children("li").eq(j-2).height()+20;
                    doubleTop += previousHeight;
                    $(".cont2_case").eq(i).children("ul").children("li").eq(j).css({
                        "top":doubleTop+"px",
                        "right":0
                    });
                }
            }
        }
    })*/
})(window);