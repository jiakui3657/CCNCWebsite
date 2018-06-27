/**
 * Created by mrzhang on 2017/12/21.
 */
    /*页面左右滑动*/
//ectave加载更多
cc();
function cc(){
    $(".content .cont .swiper-container2 .swiper-wrapper").height('auto');
        $(".ective").on('touchstart',function(e){
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
                                console.log(333);
                                $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").show();
                                $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).innerHeight()+"px");
                            }else if(h>ih&&$(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").text()=="暂无更多项目"){
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
                            console.log(444);
                            ective++;
                            $(this).attr("index",ective);
                            var value=$(this).children("input").attr("value");
                            $.ajax({
                                type: 'POST',
                                url: 'loadMoreProject',
                                dataType: 'json',
                                data :{"catalogId":value,"page": ective,"size":6},
                                success: function(data){
                                if(ective>data.totalPage){
                                    $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh img").remove();
                                    $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").text("暂无更多项目");
                                    setInterval(function () {
                                        $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh").hide();
                                        $(".content .cont .swiper-container2 .swiper-wrapper .curr:eq("+index+") .down_refresh .release").hide();
//                                        $(".content .cont .swiper-container2 .swiper-wrapper").height($(".curr").eq(index).height()+"px");
                                    },1000);
                                    return
                                }else{
                                    var result = '';
                                    for(var i = 0; i < data.list.length; i++){
                                        var img=data.list[i].iconUrl;
                                        var text=data.list[i].name;
                                        var id=data.list[i].id;
                                        var detailUrl="projectdetails.htm?id="
                                        result +="<li>" +
                                            "<a href='"+siteurl+detailUrl+id+"'>" +
                                            "<img src='"+siteurl+img+"' alt=''>" +
                                            "<p>"+text+"</p>" +
                                            "</a>" +
                                            "</li>";
                                    }
                                    // 为了测试，延迟1秒加载
                                    setTimeout(function(){
                                        $(".curr").eq(index).children("ul").append(result);
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
}

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
            slide = mySwiper.slides[swiper.activeIndex];
            slideLeft = slide.offsetLeft;
            slideWidth = slide.clientWidth;
            slideCenter = slideLeft + slideWidth / 2;
            // 被点击slide的中心点
            mySwiper.setWrapperTransition(300);
            if (slideCenter < swiperWidth / 2) {
                mySwiper.setWrapperTranslate(0);
            } else if (slideCenter > maxWidth) {
                mySwiper.setWrapperTranslate(maxTranslate);
            } else {
                nowTlanslate = slideCenter - swiperWidth / 2;
                mySwiper.setWrapperTranslate(-nowTlanslate);
            }
            $(".swiper-container1 .swiper-slide").removeClass('active');
            $(".swiper-container1 .swiper-slide:eq("+swiper.activeIndex+")").addClass('active');
        }
    });
    swiperWidth = mySwiper.container[0].clientWidth
    maxTranslate = mySwiper.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2;
    mySwiper.on('tap', function(swiper, e) {
        slide = swiper.slides[swiper.clickedIndex];
        slideLeft = slide.offsetLeft;
        slideWidth = slide.clientWidth;
        slideCenter = slideLeft + slideWidth / 2;
        // 被点击slide的中心点
        mySwiper.setWrapperTransition(300);
        if (slideCenter < swiperWidth / 2) {
            mySwiper.setWrapperTranslate(0);
        } else if (slideCenter > maxWidth) {
            mySwiper.setWrapperTranslate(maxTranslate);
        } else {
            nowTlanslate = slideCenter - swiperWidth / 2;
            mySwiper.setWrapperTranslate(-nowTlanslate);
        }
        $(".swiper-container1 .swiper-slide").removeClass('active');
        $(".swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+")").addClass('active');
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
