$(function(){

    /*根据所传参数展示页面相应部分*/
    var initialSlide;
    for(var i = 0;i<$("#swiper-container1 .swiper-wrapper .swiper-slide").length;i++){
        if($("#swiper-container1 .swiper-wrapper .swiper-slide").eq(i).children("a").hasClass("tab_active")){
            initialSlide = i;
        }
    }

	/*页面左右滑动*/
	var mySwiper = new Swiper('#swiper-container1', {
		freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        initialSlide :initialSlide
	});
	var mySwiper2 = new Swiper('#swiper-container2',{
	    autoHeight: true,
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
			$("#swiper-container1 a").removeClass('tab_active');
			$("#swiper-container1 .swiper-slide:eq("+swiper.activeIndex+") a").addClass('tab_active');
            $(window).scrollTop(0);
//          $("#swiper-container2").height($(".swiper-slide-active ul").height());
		}
	});
	swiperWidth = mySwiper.container[0].clientWidth
	maxTranslate = mySwiper.maxTranslate();
	maxWidth = -maxTranslate + swiperWidth / 2;
	mySwiper.on('tap', function(swiper, e) {
//		e.preventDefault();
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
//        $(window).scrollTop(0);
		$("#swiper-container1 a").removeClass('tab_active');
		$("#swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+") a").addClass('tab_active');
		mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
	});
    mySwiper2.slideTo(initialSlide, 1000, false);
});
$(function(){
 function show(){
      var scrollHeight=$(window).scrollTop();
      var headerHeight=$('header').height();
      var height=$('#swiper-container1').offset().top;
      var aptitudeHeight=$(".aptitude_bg").height();
      var tt=$('#swiper-container1').height();
      if(scrollHeight+headerHeight>=height) {
           $(".jk").remove();
           $('#swiper-container1').addClass("tabActive");
           $('.aptitude_bg').after('<div class="jk"></div>');
      }
      if(scrollHeight<=headerHeight+tt) {
           $(".jk").remove();
           $('#swiper-container1').removeClass("tabActive");
      }
      if(scrollHeight==0) {
           $(".jk").remove();
           $('#swiper-container1').removeClass("tabActive");
      }
}
var timer=setInterval(show,1);
});
