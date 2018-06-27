$(function () {
    /*相关项目轮播方法*/
    var times = 3000;//相关项目轮播时间间隔
    function scroll(oDiv){
        $("#"+oDiv).children("ul").animate({"margin-left":"-100%"},function(){
            $("#"+oDiv).children("ul").children("li").eq(0).appendTo($("#"+oDiv).children("ul"))
            $("#"+oDiv).children("ul").css({"margin-left":0})
        })
    }
    /*返回不带参数的方法*/
    function scrolls(oDiv){
        return function(){
            scroll(oDiv);
        }
    }
    /*相关项目轮播方法*/
    setInterval(scrolls("related_items1"),times);
    setInterval(scrolls("related_items2"),times);
    setInterval(scrolls("related_items3"),times);
    setInterval(scrolls("related_items4"),times);
    setInterval(scrolls("related_items5"),times);
    setInterval(scrolls("related_items6"),times);
    setInterval(scrolls("related_items7"),times);
    setInterval(scrolls("related_items8"),times);
    setInterval(scrolls("related_items9"),times);
    /*页面左右滑动*/
    var initialSlide;
    for(var i = 0;i<$("#swiper-container1 .swiper-wrapper .swiper-slide").length;i++){
        if($("#swiper-container1 .swiper-wrapper .swiper-slide").eq(i).hasClass("curr")){
            initialSlide = i;
        }
    }
    var mySwiper = new Swiper('#swiper-container1', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        initialSlide :initialSlide
    });
    var mySwiper2 = new Swiper('#swiper-container2',{
        direction : 'horizontal',
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
            $("#swiper-container1 .swiper-slide:eq("+swiper.activeIndex+")").addClass("curr");
            $(window).scrollTop(0);
        }
    });
    swiperWidth = mySwiper.container[0].clientWidth
    maxTranslate = mySwiper.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2

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
        //console.log(swiperHeight);
        $("#swiper-container2").height(swiperHeight);
        $("#swiper-container1 .swiper-slide").removeClass('curr');
        $("#swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+")").addClass("curr");
        $(window).scrollTop(0);
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
    mySwiper2.slideTo(initialSlide, 1000, false);
    setTimeout(function () {
        //console.log(initialSlide)
        var swiperHeight1 = $("#swiper-container2 .swiper-wrapper .swiper-slide").eq(initialSlide).height();
        //console.log(swiperHeight1)
        $("#swiper-container2").height(swiperHeight1);
    },1000)
});