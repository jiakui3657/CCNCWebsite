/**
 * Created by mrzhang on 2017/12/22.
 */
 window.onload = function() {
      var r = window.location.search;
      r = r.substring(r.indexOf("1"));
      if(r=="0"){
              $(".swiper-container1 .swiper-wrapper .swiper-slide").children("a").removeClass("active");
              $(".swiper-container1 .swiper-wrapper .swiper-slide:eq("+0+")").children("a").addClass("active");
          return;
      }else{
        $(".swiper-container1 .swiper-wrapper .swiper-slide").children("a").removeClass("active");
        $(".swiper-container1 .swiper-wrapper .swiper-slide:eq("+r+")").children("a").addClass("active");

      }
     /*页面左右滑动*/
     var mySwiper = new Swiper('.swiper-container1', {
         slidesPerView: 'auto',
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
     mySwiper2.slideTo(r, 1, false);
 }
