/**
 * Created by mrzhang on 2017/7/18.
 */

(function () {
    $(function () {
        var cc=0;
        var jj=1;
        $(".index").on("click", function () {
            var flag = $(this).index();
            flag = flag - 1;
            $(".cont").hide();
            if (flag==1) {
            }
            if (flag==2) {
            }
            if (flag==3) {
            }
            $(".cont:eq(" + flag + ")").show();
            var text = $(this).text();
            for(var i=1;i<6;i++){
                $(".index:eq("+i+")").slideUp();
            }
            $(".tab_li:eq(0)").text(text);
            $(".index:eq(0)").slideUp();
            cc+=180
            $(".img").css("transform","rotateX("+cc+"deg)");
            jj=1;
            if(jj==1){
                $(".tab_ul .tab_li").last().css("backgroundColor","rgba(0,51,204,.5)");
            }
        })
        $(".tab_li:last-child").on("click",function () {
            for(var i=1;i<6;i++){
                $(".index:eq("+i+")").slideToggle();
            }
            $(".index:eq(0)").slideToggle();
            cc+=180;
            jj+=1;
            $(".img").css("transform","rotateX("+cc+"deg)");
            if(jj%2==0){
                $(".tab_ul .tab_li").last().css("backgroundColor","rgba(0,51,204,.8)");
            }else{
                $(".tab_ul .tab_li").last().css("backgroundColor","rgba(0,51,204,.5)");
            }
        })
        /*根据当前页面url所传参数，展示页面相应部分*/
        var history = window.location.search;
        var indexHref;
        var tag="index";
        if(history.indexOf(tag)!=-1){
           indexHref = history.match(/index=(\S*)/)[1];
        }
        if(indexHref==1){
            $(".tab .tab_ul li").eq(2).click();
        }else if(indexHref==4){
            $(".tab .tab_ul li").eq(5).click();
        }else if(indexHref==3){
            console.log(1)
            $(".tab .tab_ul li").eq(4).click();
        }else if(indexHref=="3-1"){
            $(".tab .tab_ul li").eq(4).click();
            $("html, body").scrollTop(0).animate({scrollTop: $(".cont_five").offset().top},500);
        }
        /*根据当前页面url所传参数，展示页面相应部分*/
    });
    /*发展历程*/
    $(function () {
        var twoTopWidth = $(".twoTop_block ul li").length*180;
        console.log(twoTopWidth)
        $(".twoTop_block ul").css("width",twoTopWidth+"px");
        var dataBlockWidth = $(".twoTop_block ul li").length*180+60;
        $(".data_block ul").css("width",dataBlockWidth+"px");
        /*鼠标移入移除效果*/
        var flag;
        $(".cont_twoTop_img li").on("mouseover",function () {
            flag = $(this).index();
            var imgUrl= $(this).children("img").attr("tsrc");
            var imgUrl1= $(this).children("img").attr("src");
            $(this).css("border-color","#5778dd");
            $(this).children("img").attr("src",imgUrl);
            $(this).children("img").attr("tsrc",imgUrl1);
            $(".li2:eq("+flag+")").css("border","2px solid #5778dd");
            $(".li2_span:eq("+flag+")").css("backgroundColor","#5778dd");
        });
        $(".cont_twoTop_img li").on("mouseout",function () {
            var imgUrl= $(this).children("img").attr("tsrc");
            var imgUrl1= $(this).children("img").attr("src");
            $(this).children("img").attr("src",imgUrl);
            $(this).children("img").attr("tsrc",imgUrl1);
            $(this).css("border-color","#d2d2d2");
            $(".li2").css("border","2px solid #dcdcdc");
            $(".li2_span").css("backgroundColor","#dcdcdc");
        })
        /*左右点击切换效果*/
        var num = 5;
        $(".slide_ll").on("mouseover",function(){
            if(num <= 5 && $(this).index() ==3 ){
                return false;
            }else if(num>=$(".twoTop_block ul li").length+1 && $(this).index() == 4 ){
                return false;
            }
            $(this).css({
                "opacity":"0.6",
                "filter":"Alpha(opacity=60)"
            })
        });
        $(".slide_ll").on("mouseout",function(){
            console.log($(this).index());
            console.log(num);
            if(num <= 5 && $(this).index() == 3 ){
                return false;
            }else if(num>=$(".twoTop_block ul li").length+1&& $(this).index() == 4 ){
                return false;
            }
            $(this).css({
                "opacity":"0.3",
                "filter":"Alpha(opacity=30)"
            })
        });
        $(".slide_left").on("click",function () {
            if(num<=5){
                return false;
            }else if (num === 6) {
                $(".twoTop_block ul").css("margin-left","12px");
                $(".data_block ul").css("margin-left","0");
                $(this).css("opacity","0");
                $(this).css("filter","Alpha(opacity=0)");
                num -=1;
                return false;
            }else if (num == $(".twoTop_block ul li").length){
                $(".slide_right").css("opacity","0.3");
                $(".slide_right").css("filter","Alpha(opacity=30)");
            }
            num -=1;
            var rightMargin = -(num-5)*174;
            var dataRightMargin = -(num-5)*176;
            $(".twoTop_block ul").css("margin-left",rightMargin+"px");
            $(".data_block ul").css("margin-left",dataRightMargin+"px");
        });
        $(".slide_right").on("click",function () {
            if(num>=$(".twoTop_block ul li").length+1){
                return false;
            }else if(num === 5){
                $(".slide_left").css("opacity","0.3");
                $(".slide_left").css("filter","Alpha(opacity=30)");
            }
            num +=1;
            var rightMargin = -(num-5)*176;
            var dataRightMargin = -(num-5)*180;
            $(".twoTop_block ul").css("margin-left",rightMargin+"px");
            $(".data_block ul").css("margin-left",dataRightMargin+"px");
            if(num>=$(".twoTop_block ul li").length+1){
                $(this).css("opacity","0");
                $(this).css("filter","Alpha(opacity=0)");
            }
        });
});
    $(function () {
        $(".cont4_center_li").on("click",function () {
            var flag4=$(this).index();
            console.log(flag4);
            $(".cont4_center_center").css("display","none");
            $(".cont4_center_center:eq("+flag4+")").css("display","block");
            $(".cont4_center_li").css({
                "color" : "#666",
                "backgroundColor" : "#fff"
            })
            $(this).css({
                "color" : "#fff",
                "backgroundColor" : "#2f59d6"
            })
        })
    })
    $(function () {
        $('.carousel').carousel({
            interval: 3000,
            pause:"hover",
            wrap : true,
            keyboard : true
        })
    })
    $(function () {
        /*社会责任切换*/
        $(".cont6 ul li").on("mouseover",function(){
            $(this).css({
                "background":"#2f59d6",
                "color":"#fff"
            });
            $(this).children("div").children("h3").css("border-color","#fff");
            if($(this).index()==0){
                $(this).children("div").children("img").attr("src","views/ccnc/images/ccnc1.png")
            }else{
                $(this).children("div").children("img").attr("src","views/ccnc/images/love.png")
            }
        })
        $(".cont6 ul li").on("mouseout",function(){
            $(this).css({
                "background":"#fff",
                "color":"#666"
            });
            $(this).children("div").children("h3").css("border-color","#bfbfbf");
            if($(this).index()==0){
                $(this).children("div").children("img").attr("src","views/ccnc/images/ccnc.png")
            }else{
                $(this).children("div").children("img").attr("src","views/ccnc/images/love1.png")
            }
        })
        /*社会责任切换*/
        /*社会责任新闻轮播*/
        function scroll(){
            $(".social_respon_news ol").animate({"margin-top":"-38px"},function(){
                $(".social_respon_news ol li:eq(0)").appendTo($(".social_respon_news ol"))
                $(".social_respon_news ol").css({"margin-top":0})
            })
        }
        setInterval(scroll,3000)
    })
})()
