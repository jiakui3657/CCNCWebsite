$(function(){
    /*资质图片查看大图*/
    $(".certificate-img img").on("click",function(){
        var imgSrc = $(this).attr("src");
        $(".layoutImg img").attr("src",imgSrc);
        $(".layout").css("display","block");
        $(".layoutImg").css("display","block");
    });
    $(".layoutImg").on("click",function(){
        $(".layout").css("display","none");
        $(".layoutImg").css("display","none");
    })
});