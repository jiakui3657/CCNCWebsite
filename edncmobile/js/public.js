/**
 * Created by mrzhang on 2017/12/21.
 */
// 点击隐藏侧边栏
$(".slidDown i").on("click",function () {
    $(".slidDown").css({"left":"-50%"});
    $("html,body").css({"overflow":"hiddle"});
})
var flag=false;
    $("header i").on("click",function () {
        $(".slidDown").css({"left":"0%"});
        $("html,body").css({"overflow":"hidden"});
        flag=true;
    })
    $(".coo").on("touchstart",function () {
        if (flag){
            $(".slidDown").css({"left":"-50%"});
            $("html,body").css({"overflow":"hiddle"});
            flag=false;
        }else{
            return
     }
})
