/**
 * Created by mrzhang on 2017/12/20.
 */
 //swiper轮播图初始化设置
 var mySwiper1 = new Swiper('.swiper-container1',{
     loop: true,
     pagination: '.swiper-pagination',
     autoplay : 3000,
     calculateHeight : true,
     mode : 'vertical',
 })

//悬浮停止swiper轮播图
 $(".swiper1").hover(function(){
  mySwiper1.stopAutoplay();
},function(){
  mySwiper1.startAutoplay();
})

//悬浮项目分类
$(".classification .ul .li").hover(function(){
    $(this).animate({top:'-10px'},400);
},function(){
    $(".classification .ul .li").animate({top:'0px'},50);
})

//悬浮停止swiper轮播图
 $(".swiper").hover(function(){
  mySwiper.stopAutoplay();
},function(){
  mySwiper.startAutoplay();
})

//swiper轮播图初始化设置
var mySwiper = new Swiper('.swiper-container',{
    loop: true,
    pagination: '.swiper-pagination',
    autoplay : 3000,
    paginationClickable :true,
    calculateHeight : true,
})

//点击出现遮罩
var id=$(".swiper .swiper-wrapper ul li:eq("+0+")").attr("index");
findprojectdetail(id);
$(".swiper .swiper-wrapper ul li").on("click",function(){
    id=$(this).attr("index");
    findprojectdetail(id);
})
function findprojectdetail(pid) {
        $.ajax({
            type: "post",
            url: "findprojectdetail",
            async: true,
            data: {"pid": pid},
            success: function (data) {
                console.log(data);
                var str="";
                for(var i=0;i<data.files.length;i++){
                    if(i==0){
                        str+="<div class='item active'>" +
                            "<img src='"+siteurl+data.files[i]+"' alt='"+siteurl+data.files[i]+"'>" +
                        "</div>";
                    }else{
                        str+="<div class='item'>" +
                        "<img src='"+siteurl+data.files[i]+"' alt='"+siteurl+data.files[i]+"'>" +
                        "</div>";
                    }
                }
                console.log(str);
                $(".carousel-inner").html(str);
                $(".modal-content .text p:eq("+0+") span").html(data.address);
                $(".modal-content .text p:eq("+1+") span").html(data.content);
            },
            error: function () {
                console.log("请求错误!!!")
            }
        });
    }

//悬浮个体项目添加class
$(".swiper .swiper-wrapper ul li").hover(function(){
    $(this).animate({top:'-10px'},400);
},function(){
    $(".swiper .swiper-wrapper ul li").animate({top:'0px'},50);
})