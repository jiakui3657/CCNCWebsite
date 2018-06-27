/**
 * Created by mrzhang on 2017/7/24.
 */
(function () {
    $(function () {
            function onWidthChange(){
            if( $(window).width() < 1100 ) {
            var flag=$(".cont_bottom").find("li").length;
                 for(var i=1;i<flag;i++){
                     if(i%2!==0){
                     $(".cont_bottom li:eq("+i+")").css("margin-right","0px");
                     console.log(i)
                     }else if (i==2){
                         $(".cont_bottom li:eq("+i+")").css("margin-right","30px");
                         console.log(i);
                         }
                     }
             };
             }
             setInterval(onWidthChange,1)

       })
    $(function (){
        var index = $(".container-fluid .tab_li").index($(".tab_li_active"));
        /*解决方案子菜单切换页面内容*/
        $(".container-fluid .tab_li").on("click",function(){
            var cc = $(this).index();
            index = cc;
            $(".container-fluid .tab_li").removeClass("tab_li_active condition");
            $(this).addClass("tab_li_active condition");
            $(".container-fluid .tab_li").css("background","none")
            $(this).css("background","#0033cc")
            $(".container-fluid .cont").removeClass("cont_active");
            $(".container-fluid .cont:eq("+index+")").addClass("cont_active");
        });
        $(".container-fluid .tab_li").on("mouseover",function(){
            if($(this).hasClass("condition")){
                return false;
            }
            $(this).css("background","#effafa")
        });
        $(".container-fluid .tab_li").on("mouseout",function(){
            if($(this).hasClass("condition")){
                return false;
            }
            $(this).css("background","none")
        })
    })
})(window);