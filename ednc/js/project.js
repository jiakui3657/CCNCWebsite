/**
 * Created by mrzhang on 2017/12/21.
 */
//项目 * 项目切换
var num=location.search.substring(15);
console.log(num);
switch(num) {
    case "2":
         $(".content .container .aptitude .tab ul li").removeClass("current");
         $(".content .container .aptitude .tab ul li:eq("+1+")").addClass("current");
         $(".content .container .aptitude .cen").hide();
         $(".content .container .aptitude .cen:eq("+1+")").show();
        break;
    case "3":
        $(".content .container .aptitude .tab ul li").removeClass("current");
        $(".content .container .aptitude .tab ul li:eq("+2+")").addClass("current");
        $(".content .container .aptitude .cen").hide();
        $(".content .container .aptitude .cen:eq("+2+")").show();
        break;
    case "4":
        $(".content .container .aptitude .tab ul li").removeClass("current");
        $(".content .container .aptitude .tab ul li:eq("+3+")").addClass("current");
        $(".content .container .aptitude .cen").hide();
        $(".content .container .aptitude .cen:eq("+3+")").show();
        break;
    case "5":
        $(".content .container .aptitude .tab ul li").removeClass("current");
        $(".content .container .aptitude .tab ul li:eq("+4+")").addClass("current");
        $(".content .container .aptitude .cen").hide();
        $(".content .container .aptitude .cen:eq("+4+")").show();
        break;
    case "6":
        $(".content .container .aptitude .tab ul li").removeClass("current");
        $(".content .container .aptitude .tab ul li:eq("+5+")").addClass("current");
        $(".content .container .aptitude .cen").hide();
        $(".content .container .aptitude .cen:eq("+5+")").show();
        break;
    default:
        $(".content .container .aptitude .tab ul li").removeClass("current");
        $(".content .container .aptitude .tab ul li:eq("+0+")").addClass("current");
        $(".content .container .aptitude .cen").hide();
        $(".content .container .aptitude .cen:eq("+0+")").show();
};
 var index=0;
$(".content .container .aptitude .tab ul li").on("click",function(){
    index=$(this).index();
    $(".content .container .aptitude .tab ul li").removeClass("current");
    $(this).addClass("current");
    $(".content .container .aptitude .cen").hide();
    $(".content .container .aptitude .cen:eq("+index+")").show();
})
$(".content .container .aptitude .tab ul li").hover(function(){
    $(this).addClass("curr");
    $(".content .container .aptitude .tab ul li:eq("+index+")").addClass("current");
},function(){
    $(".content .container .aptitude .tab ul li").removeClass("curr");
    $(".content .container .aptitude .tab ul li:eq("+index+")").addClass("current");
})
//点击项目翻页
$(".content .container .aptitude .cen .page span:nth-child(2)").on("click",function(){
    var index=$(this).parent().parent(".cen").attr("index");
    var page=$(this).parent().parent(".cen").attr("page");
    var flag=$(this).parent().parent(".cen").index();
    flag-=1;
    page++;
    $.ajax({
        type: 'POST',
        url: 'loadMoreProject',
        dataType: 'json',
        data :{"catalogId":index,"page": page,"size":9},
        success: function(data){
            console.log(data);
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("clickActive");
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("Active");
            var str="";
            var detailUrl="newsdetails.htm?id=";
            if(page<=data.totalPage){
                for(var i=0;i<data.list.length;i++){
                    str+="<li index='"+data.list[i].id+"'  data-toggle='modal' data-target='.bs-example-modal-lg'>" +
                        "<img src='"+siteurl+data.list[i].iconUrl+"' alt=''>" +
                        "<p>"+data.list[i].name+"</p>" +
                        "</li>";
                    }
                    $(".content .container .aptitude .cen:eq("+flag+") ul").html(str);
                    $(".content .container .aptitude .cen:eq("+flag+")").attr("page",page);
                    $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("Active");
                    $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("Active");
                    if(page==data.totalPage){
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
        url: 'loadMoreProject',
        dataType: 'json',
        data :{"catalogId":index,"page": page,"size":9},
        success: function(data){
            console.log(data);
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("clickActive");
            $(".content .container .aptitude .cen:eq("+flag+") .page span").removeClass("Active");
            var str="";
            var detailUrl="newsdetails.htm?id=";
            if(page>=1){
                for(var i=0;i<data.list.length;i++){
                    str+="<li index='"+data.list[i].id+"' data-toggle='modal' data-target='.bs-example-modal-lg'>" +
                         "<img src='"+siteurl+data.list[i].iconUrl+"' alt=''>" +
                         "<p>"+data.list[i].name+"</p>" +
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
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(2)").addClass("Active");
                $(".content .container .aptitude .cen:eq("+flag+") .page span:nth-child(1)").addClass("clickActive");
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
//点击出现遮罩
var id=$(".content .container .aptitude .cen ul li:eq("+0+")").attr("index");
findprojectdetail(id);
$(".content .container .aptitude .cen ul li").on("click",function(){
        id=$(this).attr("index");
        findprojectdetail(id);
    })
function findprojectdetail(pid) {
        $.ajax({
            type: "post",
            url: "findprojectdetail",
            async: true,
            data: {"pid": pid},
            success: function (data) {
                console.log(data);
                var str="";
                for(var i=0;i<data.files.length;i++){
                    if(i==0){
                        str+="<div class='item active'>" +
                        "<img src='"+siteurl+data.files[i]+"' alt='"+siteurl+data.files[i]+"'>" +
                        "</div>";
                    }else{
                        str+="<div class='item'>" +
                        "<img src='"+siteurl+data.files[i]+"' alt='"+siteurl+data.files[i]+"'>" +
                        "</div>";
                    }
                }
                console.log(str);
                $(".carousel-inner").html(str);
                $(".modal-content .text p:eq("+0+") span").html(data.address);
                $(".modal-content .text p:eq("+1+") span").html(data.content);
                var num=$(".carousel-inner .item").length;
                if(num<=1){
                    $(".carousel-control").hide();
                }
            },
            error: function () {
                console.log("请求错误!!!")
            }
        });
    }