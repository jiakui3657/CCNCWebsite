/**
 * Created by mrzhang on 2017/12/21.
 */
    /*页面左右滑动*/
    var mySwiper = new Swiper('.swiper-container1', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        direction : 'horizontal',
        autoHeight: true,
    });
    var mySwiper2 = new Swiper('.swiper-container2',{
        slidesPerView: 'auto',
        autoHeight: true,
        onSlideChangeStart: function(swiper){
            $(".swiper-container1 .swiper-slide a").removeClass('active');
            $(".swiper-container1 .swiper-slide:eq("+swiper.activeIndex+") a").addClass("active");
        }
    });
    mySwiper.on('tap', function(swiper) {
        $(".swiper-container1 .swiper-slide a").removeClass('active');
        $(".swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+") a").addClass("active");
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
// 限制字符集
limit(0,6);
limit(1,6);
function limit(index,length){
    for(var i=0;i<length;i++){
            var p1=$(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(1)").text().length;
            var p2=$(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(2)").text().length;
            if (p1>=22){
            var text1=$(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(1)").text().substring(0,20);
                $(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(1)").html(text1+"...");
            }
            if (p2>=25){
            var text2=$(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(2)").text().substring(0,25);
                $(".swiper-container2 .swiper-wrapper .swiper-slide:eq("+index+") ul li:eq("+i+") .instruction a:nth-child(2)").html(text2+"...");
            }
    }
}
//上拉刷新
       $(".content .cont .swiper-container2 .swiper-wrapper").height('auto');
       $(".content .cont .swiper-container2 .swiper-wrapper .swiper-slide").on('touchstart',function(e){
               var index=$(this).index();
               e=e.originalEvent.touches[0];//获取对应触摸对象
               var sx=0,sy=0;
               sx=e.pageX;
               sy=e.pageY;
               $(this).on("touchmove",function(e){
                   var content=$(".content").height();
                   var text=$(".text").height();
                   var header=$("header").height();
                   var win=$(window).height();
                   var scrollTop=$(document).scrollTop();
                   var h=win+scrollTop;
                   var ih=header+text+content;
                   e=e.originalEvent.changedTouches[0];
                   var sx1 = e.pageX;
                       if((sx-e.pageX)>50||(e.pageX-sx)>50){
                           $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").hide();
                           return
                       }else{
                           if(h>ih&&$(".curr:eq("+index+") .down_refresh .release").text()=="上拉加载更多"){
                               $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").show();
                               $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).innerHeight()+"px");
                           }else if(h>ih&&$(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").text()=="暂无更多新闻"){
                               $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").show();
                               $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").show();
                               $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).innerHeight()+"px");
                           }
                       }
               })
               $(this).on('touchend',function(e){
                var content=$(".content").height();
                   var text=$(".text").height();
                   var header=$("header").height();
                   var win=$(window).height();
                   var scrollTop=$(document).scrollTop();
                   var h=win+scrollTop;
                   var ih=header+text+content;
                   var ective=$(this).attr("index");
                   e=e.originalEvent.changedTouches[0];//获取对应触摸对象
                   var sx1 = e.pageX;
                   if((sx-sx1)>50||(sx1-sx)>50){//如果滑动距离大于50px就认为是要触发左滑动事件了
                       $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").hide();
                       return
                   }else{
                       if(h>ih){
                           ective++;
                           $(this).attr("index",ective);
                           console.log(index);
                           var value=$(".curr:eq("+index+") .down_refresh .release").attr("page");
                           console.log(ective);
                           console.log(value);
                           $.ajax({
                               type: 'POST',
                               url: 'loadMoreNews',
                               dataType: 'json',
                               data :{"catalogId":value,"page": ective,"size":6},
                               success: function(data){
                               console.log(data);
                               if(ective>data.totalPage){
                                   $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh img").remove();
                                   $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").text("暂无更多新闻");
                                   setInterval(function () {
                                        $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").hide();
                                        $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").hide();
                                        $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).innerHeight()+"px");
                                   },1000);
                                   return
                               }else{
                                   var result = '';
                                   for(var i = 0; i < data.list.length; i++){
                                       var img=data.list[i].iconUrl;
                                       var text=data.list[i].name;
                                       var id=data.list[i].id;
                                       var text1=data.list[i].intro;
                                       var text2=data.list[i].title;
                                       var detailUrl="newsdetails.htm?id=";
                                       result +="<li>" +
                                                 "<img src='"+siteurl+img+"' alt=''>" +
                                                 "<div class='instruction'>" +
                                                       "<a href='"+siteurl+detailUrl+data.list[i].id+"'>"+text2+"</a>" +
                                                       "<a href='"+siteurl+detailUrl+data.list[i].id+"'>"+text1+"</a>" +
                                                 "</div>" +
                                                 "</li>";
                                   }
                                   // 为了测试，延迟1秒加载
                                   setTimeout(function(){
                                       $(".curr").eq(index).children("ul").append(result);
                                       limit(index,ective*6);
                                       $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").hide();
                                       $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).innerHeight()+"px");
                                   },1000);
                                   }
                               },
                                   error: function(xhr, type){
                           }
                        });
                    }
                }
                $(this).unbind('touchend');
                });
           })