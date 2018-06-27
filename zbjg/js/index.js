$(function(){
	//经典案列轮播图
    var times = 2500;//相关项目轮播时间间隔
    var caseLiwidth = $("#case-rotation ul li").width()+2*parseInt($("#case-rotation ul li").css("paddingLeft"));
    $("#case-rotation ul").width( $("#case-rotation ul li").length * caseLiwidth);
    $(window).resize(function(){
        caseLiwidth = $("#case-rotation ul li").width()+2*parseInt($("#case-rotation ul li").css("paddingLeft"));
		$("#case-rotation ul").width( $("#case-rotation ul li").length * caseLiwidth);
    });
    function scroll(oDiv){
        $("#"+oDiv).children("ul").animate({"margin-left":-caseLiwidth+"px"},function(){
            $("#"+oDiv).children("ul").children("li").eq(0).appendTo($("#"+oDiv).children("ul"))
            $("#"+oDiv).children("ul").css({"margin-left":0})
        })
    }
    /*返回不带参数的方法*/
    function scrolls(oDiv){
        return function(){
            scroll(oDiv);
        }
    }

    var timer;
    //timer = setInterval(scrolls("case-rotation"),times);

    //鼠标划入划出清除开启定时器
    // $("#case-rotation").on("mouseover",function () {
    //     clearInterval(timer);
    // });
    // $("#case-rotation").on("mouseout",function () {
    //     timer = setInterval(scrolls("case-rotation"),times);
    // });
});
