$(function () {
    $(".tab_ul li .img").css("transform","rotateX("+0+"deg)");
    $(".tab_ul a li.curr").html($(".tab_ul a li.active").html());
    /*左部分二级菜单切换*/
    var switchingCond ;
    if(window.location.search){
        for(var i=0;i<2;i++){
            $(".one:eq("+i+")").slideUp();
        }
        $(".tab_ul li .img").css("transform","rotateX("+180+"deg)");
        switchingCond = false;
    }else{
        for(var i=0;i<2;i++){
            $(".one:eq("+i+")").slideDown();
        }
        $(".tab_ul li .img").css("transform","rotateX("+0+"deg)");
        switchingCond = true;
    }

    $(".tab_li").on("click",function () {
        if($(this).hasClass("curr")){
            return false;
        }
        if($(this).hasClass("last")){
            if(switchingCond){
                $(".tab_ul li .img").css("transform","rotateX("+180+"deg)");
                for(var i=0;i<2;i++){
                    $(".one:eq("+i+")").slideUp();
                }
                switchingCond = false;
            }else {
                $(".tab_ul li .img").css("transform","rotateX("+0+"deg)");
                for(var i=0;i<2;i++){
                    $(".one:eq("+i+")").slideDown();
                }
                switchingCond = true;
            }
            return false;
        }
        switchingCond = false;
    })
    /*左部分二级菜单切换*/
})

