$(function (){
   $(function (){
        $(function(){
                 var container = $("#container")
                 var list =  $("#list");//获取存大图的列表
                 // var prev =  $("#prev");// 获取点击前进按钮
                 // var next  =  $("#next")//获取点击后退按钮
                 var index = 1;//保存当前是哪个小圆点的index属性默认则为1
                 var timer = null ;// 设置定时器
                 var interval = 3000; //设置定时器的间隔时间
                 var liIndex = $("#smallList li").length;
                 console.log(liIndex);
                 //逻辑-1： 向list容器中末尾追加第一个附属图，向list  容器中头部追加最后一个附属图解决切换时出现的空白部分
                 var first = $("#list img:first").clone()
                 $("#list").append(first);
                 var last = $("#list img").eq(2).clone()
                 $("#list").prepend(last);
                 //逻辑-2： 轮播图动画函数
                 function Animate (offset,delay){
                     var left = parseInt($("#list").css("left"))+offset;
                     list.animate({'left':left}, delay, function () {
                         //判断是否走到第一张附属图迅速切换到最后一幅图
                         if(left > -900){
                             list.css('left',-3600);
                         }
                         //判断是否走到最后一张图迅速切换到第一张图
                         if(left < -(liIndex*900)) {
                             list.css('left', -900);
                         }
                     })
                 }
                 //逻辑-6：自动播放函数
                 function autoPlay (){
                    clearInterval(timer);
                    timer = setInterval(function(){
                         if (list.is(':animated')) {
                             return;
                         }
                         //调用轮播动画 参数-分别为每次位移的图片宽度 参数2 为缓动动画所需要的时间
                         Animate(-900,300)
                         if (index ==liIndex) {
                             index = 1;
                         }
                         else {
                             index += 1;
                         }
                           $("#smallList li").removeClass("on");
                           $("#smallList li").eq(index-1).addClass("on");
                         //  显示对应按钮高亮
                         // iconActive ();
                        //使用函数的递归实现自己无限自调
                        autoPlay ();
                    },interval )
                 }
                 autoPlay ()
                 //逻辑-7：自动播放停止
                function stopPlay(){
                    clearInterval(timer);
                }
                /*如果只有一张图则不轮播*/
                if($("#smallList li").length==1){
                    stopPlay();
                    $("#smallContainer").css("display","none");
                    $(".max").css("height","auto")
                }
                 //逻辑-8：小图悬浮切换对应大图
                 $("#smallList li").click(function(){
                    $("#smallList li").removeClass("on");
                   $(this).addClass("on");
                   console.log($(this).children());
                     clearInterval(timer);
                     if (list.is(':animated')) {
                         return;
                     }
                     //停止自动播放
                     stopPlay();
                     var imgIndex = parseInt($(this).attr('index'));
                     // 获取点击之后对应的偏移量
                     var  offset = -900*( imgIndex -index);
                     Animate(offset,100)
                     //   充值当前index属性
                     index=imgIndex ;
                     //  显示对应按钮高亮
                     // iconActive ()
                 }).mouseout(function(){
                     autoPlay ()
                 });
                //逻辑-9 大图容器鼠标悬浮清空定时器移除开始自动轮播
                 container.mouseover(
                     function(){
                         clearInterval(timer);
                         if (list.is(':animated')) {
                             return;
                         }
                         stopPlay();
                     }
                 ).mouseout(
                    function () {
                        if($("#smallList li").length==1){
                           return false;
                        }
                        autoPlay()
                    }
                 )
        })

   })
})