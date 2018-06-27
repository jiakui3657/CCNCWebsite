window.onload = function() {
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
            // $(".swiper-container2 .swiper-slide").height($(".swiper-container2 .swiper-slide:eq("+swiper.activeIndex+") ul").height()
            // );
        }
    });
    mySwiper.on('tap', function(swiper) {
        $(".swiper-container1 .swiper-slide a").removeClass('active');
        $(".swiper-container1 .swiper-slide:eq("+swiper.clickedIndex+") a").addClass("active");
        // $(".swiper-container2 .swiper-slide").height($(".swiper-container2 .swiper-slide:eq("+swiper.clickedIndex+") ul").height()
        // );
        mySwiper2.slideTo(swiper.clickedIndex, 1000, false);
    });
}
//资质瀑布流
function waterFall() {
       var widthNum=parseInt($(window).width()/$(".swiper-container2 .swiper-wrapper .swiper-slide:nth-child(1) ul li").outerWidth(true)),
                allHeight=[];
        for (var i=0;i<widthNum;i++){
            allHeight.push(0)
        }
        console.log(111111);
        console.log(allHeight.length);//[0,0]//2
        var height=0;
        $(".swiper-container2 .swiper-wrapper .swiper-slide:nth-child(1) ul li").each(function () {
            var $cur=$(this),
                    indx=0,
             minAllHeight=allHeight[0];
             console.log($cur);//li
             console.log(minAllHeight);//0
            for (var j=0;j<allHeight.length;j++){
                if (allHeight[j]<minAllHeight){
                    minAllHeight=allHeight[j];
                    indx=j;
                }
            }

           console.log(2222);
           console.log(height);
          $cur.css({
                "left":indx*$cur.outerWidth(true),
                "top":minAllHeight
            });

            allHeight[indx]=minAllHeight+$cur.outerHeight(true);
            height=allHeight[indx];
        })
        console.log(height);
          $(".swiper-container2 .swiper-wrapper .swiper-slide:nth-child(1) ul").height(height);
          $(".swiper-container2 .swiper-wrapper").height(height);
        }
        waterFall();
$(window).on("resize",function () {
    waterFall()
})