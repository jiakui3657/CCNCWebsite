$(function () {
    /*发展历程单双切换*/
    for( var i = 0;i<$(".development_path ul li").length;i++){
        if(i%2 ==1){
            var deveUrl = $(".development_path ul li").eq(i).children("img").attr("tsrc");
            $(".development_path ul li").eq(i).children("img").attr("src",deveUrl)
        }
    }
    /*社会责任新闻轮播*/
    function scroll(){
        $(".social_respon_news ol").animate({"margin-top":"-0.6rem"},function(){
            $(".social_respon_news ol li:eq(0)").appendTo($(".social_respon_news ol"))
            $(".social_respon_news ol").css({"margin-top":0})
        })
    }
    setInterval(scroll,3000);
    /*页面左右滑动*/
    var initialSlide = 0 ;
    var incomingTitle = '中北集团设计院-公司简介';
    var incomingDesc = '基础设施建设领域全领域解决方案的大型咨询和工程设计机构';
    var url = encodeURIComponent(location.href.split('#')[0]);
    var history = window.location.href;
    if(history.indexOf("index=3") > 0 ){
        initialSlide = 1;
        for(var i = 0;i<$("#swiper-container1 .swiper-wrapper .swiper-slide").length;i++){
            $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(i).removeClass("curr")
        }
        $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(initialSlide).addClass("curr");
        $("#swiper-container2").height($("#swiper-container2 .swiper-slide").eq(initialSlide).height());
        incomingTitle = '中北集团设计院-合伙人体系';
        incomingDesc = '中北核心战略，实现人才价值与梦想，打造开放、生态型平台企业';
        getWeixinParame(url,incomingTitle,incomingDesc,initialSlide);
    }else if(history.indexOf("index=4") > 0){
        initialSlide = 2;
        for(var i = 0;i<$("#swiper-container1 .swiper-wrapper .swiper-slide").length;i++){
            $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(i).removeClass("curr")
        }
        $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(initialSlide).addClass("curr");
        $("#swiper-container2").height($("#swiper-container2 .swiper-slide").eq(initialSlide).height());
        incomingTitle = '中北集团设计院-社会责任';
        incomingDesc = '致力于推动经济、社会和环境可持续发展，服务国计民生';
        getWeixinParame(url,incomingTitle,incomingDesc,initialSlide);
    }else{
        initialSlide = 0;
        for(var i = 0;i<$("#swiper-container1 .swiper-wrapper .swiper-slide").length;i++){
            $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(i).removeClass("curr")
        }
        $("#swiper-container1 .swiper-wrapper .swiper-slide").eq(initialSlide).addClass("curr");
        $("#swiper-container2").height($("#swiper-container2 .swiper-slide").eq(initialSlide).height())
        incomingTitle = '中北集团设计院-公司简介';
        incomingDesc = '基础设施建设领域全领域解决方案的大型咨询和工程设计机构';
        getWeixinParame(url,incomingTitle,incomingDesc,3);
    }

//  $("#swiper-container2").height($("#swiper-container2 .swiper-slide:eq(0)").height());
   // console.log(initialSlide)
    var mySwiper = new Swiper('#swiper-container1', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        initialSlide :initialSlide
    });
    var mySwiper2 = new Swiper('#swiper-container2',{
        direction : 'horizontal',
        onSlideChangeStart: function(swiper){
            var swiperHeight = $("#swiper-container2 .swiper-slide:eq("+swiper.activeIndex+")").height();
            $("#swiper-container2").height(swiperHeight);
            $("#swiper-container1 .swiper-slide").removeClass('curr');
            $("#swiper-container1 .swiper-slide:eq("+swiper.activeIndex+")").addClass("curr");
             $(window).scrollTop(0);
            initialSlide = swiper.activeIndex;
            if(initialSlide == 1){
                incomingTitle = '中北集团设计院-合伙人体系';
                incomingDesc = '中北核心战略，实现人才价值与梦想，打造开放、生态型平台企业';
            }else if(initialSlide == 2){
                incomingTitle = '中北集团设计院-社会责任';
                incomingDesc = '致力于推动经济、社会和环境可持续发展，服务国计民生';
            }else{
                initialSlide = 3;
                incomingTitle = '中北集团设计院-公司简介';
                incomingDesc = '基础设施建设领域全领域解决方案的大型咨询和工程设计机构';
            }
            getWeixinParame(url,incomingTitle,incomingDesc,initialSlide);
        }
    });
    swiperWidth = mySwiper.container[0].clientWidth;
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
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
        $(window).scrollTop(0);
        initialSlide = swiper.clickedIndex;
        if(initialSlide == 1){
            incomingTitle = '中北集团设计院-合伙人体系';
            incomingDesc = '中北核心战略，实现人才价值与梦想，打造开放、生态型平台企业';
        }else if(initialSlide == 2){
            incomingTitle = '中北集团设计院-社会责任';
            incomingDesc = '致力于推动经济、社会和环境可持续发展，服务国计民生';
        }else{
            initialSlide = 3;
            incomingTitle = '中北集团设计院-公司简介';
            incomingDesc = '基础设施建设领域全领域解决方案的大型咨询和工程设计机构';
        }
        getWeixinParame(url,incomingTitle,incomingDesc,initialSlide);
    });
    mySwiper2.slideTo(initialSlide, 1000, false);
});