$(function() {
    /*资质图片切换*/
   for(var i = 0;i<$(".certificate").length;i++){
        var certifWidth = $(".certificate").eq(i).children("ul").children("li").length*400;
        $(".certificate").eq(i).width(certifWidth);
   }
   $(".carousel-indicators li").on("click",function(){
       //console.log($(this).parent("ol").index())
       $(this).addClass("active").siblings("li").removeClass("active");
       var marginLeftUl = $(this).index()*(-$(".carousel-inner").width())+"px";
       //console.log(marginLeftUl)
       //console.log( $(".certificate").eq($(this).parent("ol").index()).children("ul").html())
       $(".certificate").eq($(this).parent("ol").index()-1).children("ul").animate({
           marginLeft: marginLeftUl
       },500);
   });
    /*资质图片查看大图*/
    $(".certificate ul li img").on("click",function(){
        var imgSrc = $(this).attr("src");
        $(".layoutImg img").attr("src",imgSrc);
        $(".layout").css("display","block");
        $(".layoutImg").css("display","block");
    })
    $(".layoutImg").on("click",function(){
        $(".layout").css("display","none");
        $(".layoutImg").css("display","none");
    })
   $(".list-unstyle .li").on("click",function() {
        var index= $(this).index();

        $(".p").hide();
        $(".p").eq(index).show();
        $(".carousel-indicators").hide();
        if($(".certificate").eq(index).children("ul").children("li").length>3){
            $(".carousel-indicators").eq(index).show();
        }
        $(".carousel-indicators").eq(index).children("li").eq(0).addClass("active");
        $(".certificate").removeClass("curr");
        $(".certificate").eq(index).addClass("curr");
        $(".li").css({"backgroundColor":"#fff","color":"#666","font-weight":"100"});
        $(this).css({"backgroundColor":"#2f59d6","color":"#fff","font-weight":"100"});
        for(var i=0;i<$(".certificate").eq(index).children("ul").children("li").length;i++){
            if(!$(".certificate").eq(index).children("ul").children("li").eq(i).hasClass("alreadyHave")){
                if($(".certificate").eq(index).children("ul").children("li").eq(i).children("img").height()>300){
                    $(".certificate").eq(index).children("ul").children("li").eq(i).append("<i></i>");
                }
            }
        }
   });
    /*资质图片给每个显示不完的图片添加背景提示未显示完*/
    var disCertificate ;
    for(var k = 0;k<$(".certificate").length;k++){
       if($(".certificate").eq(k).hasClass("curr")){
           disCertificate = k;
       }
    }
    for(var j = 0;j<$(".certificate").eq(disCertificate).children("ul").children("li").length;j++){
        if($(".certificate").eq(disCertificate).children("ul").children("li").eq(j).children("img").height()>300){
            $(".certificate").eq(disCertificate).children("ul").children("li").eq(j).addClass("alreadyHave")
            $(".certificate").eq(disCertificate).children("ul").children("li").eq(j).append("<i></i>")
        }
    }
});