//新闻列表切换与悬浮
$(".content .container .aptitude .tab ul li:eq("+0+")").css("color","#0771c2");
var left=$(".content .container .aptitude .tab ul li:eq("+0+")").position().left;
var width=$(".content .container .aptitude .tab ul li:eq("+0+")").width();
$(".content .container .aptitude .tab span").css({"width":width,"left":left});
var tid = 0;
var flag=0;
$(".content .container .aptitude .tab ul li").on("click",function(){
    flag=$(this).index();
    $(".content .container .aptitude .cen").hide();
    $(".content .container .aptitude .cen:eq("+flag+")").show();
})
$(".content .container .aptitude .tab ul li").hover( function() {
    var index=$(this).index();
    tid = setTimeout( function() {
           obly(index);
       }, 60 );
}, function() {
    clearTimeout( tid );//当在1秒内退出了hover事件就取消计时代码
} );
$(".content .container .aptitude .tab").on("mouseleave",function(){
    obly(flag);
})
function obly(flag){
    $(".content .container .aptitude .tab ul li").css("color","#999");
    $(".content .container .aptitude .tab ul li:eq("+flag+")").css("color","#0771c2");
    left=$(".content .container .aptitude .tab ul li:eq("+flag+")").position().left;
    width=$(".content .container .aptitude .tab ul li:eq("+flag+")").width();
    left=left+"px";
    width=width+"px";
    $(".content .container .aptitude .tab span").animate({left:left,width:width},200);
}

//ajax请求更新新闻


$(".content .container .aptitude .cen .page span:nth-child(2)").on("click",function(){
    var index=$(this).parent().parent(".cen").attr("index");
    var page=$(this).parent().parent(".cen").attr("page");
    var flag=$(this).parent().parent(".cen").index();
    flag-=1;
    page++;
    $.ajax({
        type: 'POST',
        url: 'loadMoreNews',
        dataType: 'json',
        data :{"catalogId":index,"page": page,"size":5},
        async : false,
        success: function(data){
            console.log(data);
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("clickActive");
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("Active");
            var str="";
            var detailUrl="newsdetails.htm?id=";
            if(page<=data.totalPage){
                for(var i=0;i<data.list.length;i++){
                    str+="<li>" +
                         "<div class='box'>"+
                        "<img src='"+siteurl+data.list[i].iconUrl+"' alt=''>" +
                        "</div>"+
                        "<div class='Introduction'>" +
                        "<div class='title'>" +
                        "<h4><a href='"+siteurl+detailUrl+data.list[i].id+"'>"+data.list[i].title+"</a></h4>" +
                        "<span>"+data.list[i].publishDate+"</span>" +
                        "</div>" +
                        "<p><a href='"+siteurl+detailUrl+data.list[i].id+"'>"+data.list[i].intro+"</a></p>" +
                        "</div>" +
                        "</li>";
                    }
                    $(".content .container .aptitude .cen:eq("+flag+") ul").html(str);
                    $(".content .container .aptitude .cen:eq("+flag+")").attr("page",page);
                    $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("Active");
                    $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("Active");
                    if(page==data.totalPage) {
                        $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("clickActive");
                    }
            }else{
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("clickActive");
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("Active");
            }
        },
        error: function(xhr, type){

        }
    });
})
$(".content .container .aptitude .cen .page span:nth-child(1)").on("click",function(){
    var index=$(this).parent().parent(".cen").attr("index");
    var page=$(this).parent().parent(".cen").attr("page");
    var flag=$(this).parent().parent(".cen").index();
    flag-=1;
    page--;
    $.ajax({
        type: 'POST',
        url: 'loadMoreNews',
        dataType: 'json',
        data :{"catalogId":index,"page": page,"size":5},
        success: function(data){
            console.log(data);
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("clickActive");
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("Active");
            var str="";
            var detailUrl="newsdetails.htm?id=";
            if(page>=1){
                for(var i=0;i<data.list.length;i++){
                    str+="<li>" +
                         "<div class='box'>"+
                         "<img src='"+siteurl+data.list[i].iconUrl+"' alt=''>" +
                         "</div>"+
                        "<div class='Introduction'>" +
                        "<div class='title'>" +
                        "<h4><a href='"+siteurl+detailUrl+data.list[i].id+"'>"+data.list[i].title+"</a></h4>" +
                        "<span>"+data.list[i].publishDate+"</span>" +
                        "</div>" +
                        "<p><a href='"+siteurl+detailUrl+data.list[i].id+"'>"+data.list[i].intro+"</a></p>" +
                        "</div>" +
                        "</li>";
                }
                console.log(flag);
                $(".content .container .aptitude .cen:eq("+flag+") ul").html(str);
                $(".content .container .aptitude .cen:eq("+flag+")").attr("page",page);
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("Active");
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("Active");
                if(page==1){
                    $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("clickActive");
                }
            }else{
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("clickActive");
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("Active");
            }
        },
        error: function(xhr, type){

        }
    });
})
$(".content .container .aptitude .cen .page span").hover(function(){
    var color=$(this).css("background-color");
    console.log(color);
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    /*RGB颜色转换为16进制*/
    String.prototype.colorHex = function(){
        var that = this;
        if(/^(rgb|RGB)/.test(that)){
            var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
            var strHex = "#";
            for(var i=0; i<aColor.length; i++){
                var hex = Number(aColor[i]).toString(16);
                if(hex === "0"){
                    hex += hex;
                }
                strHex += hex;
            }
            if(strHex.length !== 7){
                strHex = that;
            }
            return strHex;
        }else if(reg.test(that)){
            var aNum = that.replace(/#/,"").split("");
            if(aNum.length === 6){
                return that;
            }else if(aNum.length === 3){
                var numHex = "#";
                for(var i=0; i<aNum.length; i+=1){
                    numHex += (aNum[i]+aNum[i]);
                }
                return numHex;
            }
        }else{
            return that;
        }
    };
    var sHexColor = color.colorHex();
    if(sHexColor=='#eeeeee'){
        console.log(true);
        $(this).addClass("hoverActive");
    }else{
        console.log(false);
    }
},function(){
    $(this).removeClass("hoverActive");
})