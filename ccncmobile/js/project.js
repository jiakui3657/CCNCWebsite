$(function () {
    for (var i = 0;i<$(".project_name").length;i++){
        var projectNameId =$(".project_name").eq(i).attr("id");
        retrieveData(1,5,projectNameId,i);
    }
    /*页面左右滑动*/
    var mySwiper = new Swiper('#swiper-container1', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
    });
    var mySwiper2 = new Swiper('#swiper-container2',{
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
            var swiperHeight = $("#swiper-container2 .swiper-slide:eq("+swiper.activeIndex+")").height();
            $("#swiper-container2").height(swiperHeight);
            $("#swiper-container1 .swiper-slide").removeClass('curr');
            $(window).scrollTop(0);
            $("#swiper-container1 .swiper-slide:eq("+swiper.activeIndex+")").addClass("curr");
        }
    });
    swiperWidth = mySwiper.container[0].clientWidth;
    maxTranslate = mySwiper.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2;

    $(".swiper-container").on('touchstart', function(e) {
        <!--e.preventDefault();-->
    })
    mySwiper.on('tap', function(swiper) {
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
        var swiperHeight = $("#swiper-container2 .swiper-slide:eq("+swiper.clickedIndex+")").height();
        $("#swiper-container2").height(swiperHeight);
        $("#swiper-container1 .swiper-slide").removeClass('curr');
        $(window).scrollTop(0);
        $("#swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+")").addClass("curr");
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
    /*加载更多*/
    $(".project_det").on('touchstart',function(e){
        e=e.originalEvent.touches[0];//获取对应触摸对象
        var sx=0,sy=0;
        sx=e.pageX;
        sy=e.pageY;
        var projectIndex = $(this).index();
        $(this).on("touchmove",function(e){
            e=e.originalEvent.changedTouches[0];
            var sx1 = e.pageX;
            if((sy-e.pageY)>50&&$(".release").eq(projectIndex).text() == "上拉加载更多"){
                var newPage = parseInt($(".release").eq(projectIndex).attr("page"));
                newPage +=1;
                $(".release").eq(projectIndex).attr("page",newPage);
                $(".down_refresh").eq(projectIndex).children("img").css("display","inline-block")
                $(".release").eq(projectIndex).text("松开立即刷新");
            }
            $(".down_refresh").eq(projectIndex).css("display","block");
            var swiperHeight2 = $("#swiper-container2 .swiper-slide:eq("+projectIndex+")").height();
            var downHeight = $("#swiper-container2 .swiper-slide .down_refresh:eq("+projectIndex+")").height();
            $("#swiper-container2").height(swiperHeight2+downHeight);
        })
        $(this).on('touchend',function(e){
            e=e.originalEvent.changedTouches[0];//获取对应触摸对象
            var sx1 = e.pageX;
            if((sy-e.pageY)>50){//如果滑动距离大于50px就认为是要触发左滑动事件了
                //console.log(projectIndex);
                var incomingPage = parseInt($(".release").eq(projectIndex).attr("page"));
                var incomingId  = $(".project_name").eq(projectIndex).attr("id");
                var swiperHeight3 = $("#swiper-container2 .swiper-slide:eq("+projectIndex+")").height();
                var downHeight = $("#swiper-container2 .swiper-slide .down_refresh:eq("+projectIndex+")").height();
                if($(".release").eq(projectIndex).text() == "松开立即刷新"){
                    $(".down_refresh").eq(projectIndex).children("img").addClass("curr");
                    $(".release").eq(projectIndex).text("正在加载中");
                    retrieveData(incomingPage,5,incomingId,projectIndex);
                    setTimeout(function() {
                        $(".down_refresh").eq(projectIndex).css("display", "none");
                    },5000)
                }else {
                    $("#swiper-container2").height(swiperHeight3-downHeight);
                    $(".down_refresh").eq(projectIndex).css("display", "none");
                }
            }
            $(this).unbind('touchend');
        });
    })
    /*加载更多*/
});
/*加载更多方法*/
function retrieveData(page,size,catalogId,projectIndex){
    $.ajax({
        type:"post",
        url:"loadMoreProject",
        async:true,
        data :{ "page": page,"size":size,"catalogId":catalogId},
        success : function(data){
            if($(".project_det").eq(projectIndex).children("ul").children("li").length == data.total){
                $(".down_refresh").eq(projectIndex).children("i").text("暂无更多案列");
                if($(".project_det").eq(projectIndex).children("ul").children("li").length == 0){
                    $(".down_refresh").eq(projectIndex).css("display","block")
                }
            }else if($(".project_det").eq(projectIndex).children("ul").children("li").length < data.total && $(".release").eq(projectIndex).attr("page") !=1){
                var html = "";
                for (var i=0;i<data.list.length;i++){
                    html +='<li><a href="'+siteurl+'projectdetails.htm?id='+data.list[i].id+'">'+
                        '<b><img src="'+siteurl+data.list[i].iconUrl+'" alt="" /></b><i>'+data.list[i].name+'</i></a></li>';
                }
                setTimeout(function(){
                    $(".project_det").eq(projectIndex).children("ul").append(html);
                    $("#swiper-container2").css("height","auto");
                    $(".down_refresh").eq(projectIndex).css("display", "none");
                    //console.log($(".project_det").eq(projectIndex).children("ul").children("li").length);
                    if($(".project_det").eq(projectIndex).children("ul").children("li").length == data.total){
                        $(".release").eq(projectIndex).text("暂无更多案列");
                    }else {
                        $(".release").eq(projectIndex).text("上拉加载更多");
                    }
                    $(".down_refresh").eq(projectIndex).children("img").removeClass("curr");
                    $(".down_refresh").eq(projectIndex).children("img").css("display","none")
                },2000);
            }
        },
        error : function(){
            console.log("请求错误!!!")
        }
    });
}