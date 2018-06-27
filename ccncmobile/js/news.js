
$(function () {
    for (var i = 0;i<$(".news_name").length;i++){
        var projectNameId = $(".news_name").eq(i).attr("id");
        retrieveData(1,5,projectNameId,i);
    }
    /*页面左右滑动*/
    var mySwiper = new Swiper('#swiper-container1', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        direction : 'horizontal',
    });
    var mySwiper2 = new Swiper('#swiper-container2',{
        onSlideChangeStart: function(swiper){
            $(window).scrollTop(0);
            $("#swiper-container1 .swiper-slide").removeClass('curr');
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
        var swiperHeight = $("#swiper-container2 .swiper-slide:eq("+swiper.clickedIndex+")").height();
        $("#swiper-container2").height(swiperHeight);
        $("#swiper-container1 .swiper-slide").removeClass('curr');
        $(window).scrollTop(0);
        $("#swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+")").addClass("curr");
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
    /*加载更多*/
    $(".content").on('touchstart',function(e){
        e=e.originalEvent.touches[0];//获取对应触摸对象
        var sx=0,sy=0;
        sx=e.pageX;
        sy=e.pageY;
        var projectIndex = $(this).index();
        $(this).on("touchmove",function(e){
            e=e.originalEvent.changedTouches[0];
            var sx1 = e.pageX;
            if((sy-e.pageY)>50 && $(".release").eq(projectIndex).text() == "上拉加载更多"){
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
                var incomingId  = $(".news_name").eq(projectIndex).attr("id");
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
        url:"loadMoreNews",
        async:true,
        data :{ "page": page,"size":size,"catalogId":catalogId},
        success : function(data){
            if($(".content").eq(projectIndex).children("ul").children("li").length == data.total){
                $(".content").eq(projectIndex).children("i").text("暂无更多新闻");
            }else if($(".content").eq(projectIndex).children("ul").children("li").length < data.total && $(".release").eq(projectIndex).attr("page") !=1){
                var html = "";
                for (var i = 0;i < data.list.length;i++){
                    var item = data.list[i];
                    var detailUrl = 'newsdetails.htm?id=';
                    if(item.interview != null && item.interview == true){
                        detailUrl = 'interview.htm?id=';
                    }
                    var newsIntro = data.list[i].intro.slice(0,35)+"...";
                    html += '<li class="pin"><a href="'+siteurl+detailUrl+data.list[i].id+'">'+
                        '<p class="text">'+data.list[i].title+'</p><div class="bottom">'+
                        '<img src="'+siteurl+data.list[i].iconUrl+'" alt="" />'+
                        '<p class="demo">'+newsIntro+'</p><p><span>发布时间 ：'+data.list[i].publishDate+'</span></p></div></a></li>'
                }
                setTimeout(function(){
                    $(".content").eq(projectIndex).children("ul").append(html);
                    var swiperHeight = $("#swiper-container2 .swiper-slide:eq("+projectIndex+")").height();
                    var downHeight = $("#swiper-container2 .swiper-slide .down_refresh:eq("+projectIndex+")").height();
                    $("#swiper-container2").height(swiperHeight-downHeight);
                    $(".down_refresh").eq(projectIndex).css("display", "none");
                    //console.log($(".content").eq(projectIndex).children("ul").children("li").length);
                    if($(".content").eq(projectIndex).children("ul").children("li").length == data.total){
                        $(".release").eq(projectIndex).text("暂无更多新闻");
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
};

