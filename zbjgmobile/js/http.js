$(function() {
    //使用rem单位
    /*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
    var html = document.getElementsByTagName('html')[0];
    //console.log(html);
    /*取到屏幕的宽度*/
    var width = window.innerWidth;
    //console.log(width);
    /* 640 100  320 50 */
    var fontSize = 100 / 640 * width;
    //console.log(fontSize);
    /*设置fontsize*/
    html.style.fontSize = fontSize + 'px';
    window.onresize = function () {
        var html = document.getElementsByTagName('html')[0];
        //console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        //console.log(width);
        /* 640 100  320 50 */
        var fontSize = 100 / 640 * width;
        //console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize + 'px';
    };

    var flag = true;
    $("#navMenu").on("click",function(){
        if(flag){
            stop()
            $(".header-menu").slideDown("fast");
            flag = false;
            $("#navMenu").css("transform","rotateZ(-45deg)");
        }else {
            move()
            $(".header-menu").slideUp("fast");
            flag = true;
            $("#navMenu").css("transform","rotateZ(0)");
        }
    });
    $(".header-menu").on("click",function(){
        move()
        $(".header-menu").slideUp("fast");
        flag = true;
        $("#navMenu").css("transform","rotateZ(0)");
    })

    $(window).scroll(function () {
        if($(window).scrollTop()>=$(".header-menu-background").height()) {
            $("header").css({
                "position":"fixed",
                "backgroundColor":"rgba(5,86,148,0.9)",
                "display":"none"
            });
            $("header").slideDown("fast");
        }else {
            $("header").css({
                "position":"absolute",
                "backgroundColor":"none"
            })
        }
    });
    $(".header-menu").on('touchstart',function(e){
        e=e.originalEvent.touches[0];//获取对应触摸对象
        var sx=0,sy=0;
        sx=e.pageX;
        sy=e.pageY;
        $(this).on('touchend',function(e){
            e=e.originalEvent.changedTouches[0];//获取对应触摸对象
            var sx1 = e.pageX;
            if((sy-e.pageY)>20) {//如果滑动距离大于50px就认为是要触发左滑动事件了
                $(".header-menu").slideUp("fast");
                flag = true;
                $("#navMenu").css("transform","rotateZ(0)");
                move()
            }
            $(this).unbind('touchend');
        });
    })
    //实现滚动条无法滚动
    var mo=function(e){e.preventDefault();};

    /***禁止滑动***/
    function stop(){
        document.body.style.overflow='hidden';
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
    }

    /***取消滑动限制***/
    function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);
    }

})
// //输入关键字搜索员工接口
// function searchEmployee(worker,name,no,size,callback){
//     $.ajax({
//         type:"post",
//         url:"http://123.206.23.130/icontact_web/rest/worker/search.htm",
//         async:true,
//         data :{ "worker": worker , "name": name , "no": no , "size": size },
//         success : function(data){
//             callback(data)
//         },
//         error : function(){
//             console.log("请求错误!!!")
//         }
//     });
// }




