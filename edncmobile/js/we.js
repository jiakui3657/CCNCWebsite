/*加载更多*/
        var page=1;
        $(".content").on('touchstart',function(e){
            e=e.originalEvent.touches[0];//获取对应触摸对象
            var sx=0,sy=0;
            sx=e.pageX;
            sy=e.pageY;
            var projectIndex = $(this).index();
            $(this).on("touchmove",function(e){
                var content=$(".content").height();
                var text=$(".text").height();
                var header=$("header").height();
                var win=$(window).height();
                var scrollTop=$(document).scrollTop();
                var h=win+scrollTop;
                var ih=header+text+content;
                e=e.originalEvent.changedTouches[0];
                var sx1 = e.pageX;
                if(h>ih&&$(".release").text() == "上拉加载更多"){
                    var newPage = parseInt($(".release").attr("page"));
                    newPage +=1;
                    $(".release").attr("page",newPage);
                    $(".down_refresh").children("img").css("display","inline-block");
                }
                $(".down_refresh").css("display","block");
            })
            $(this).on('touchend',function(e){
                var content=$(".content").height();
                var text=$(".text").height();
                var header=$("header").height();
                var win=$(window).height();
                var scrollTop=$(document).scrollTop();
                var h=win+scrollTop;
                var ih=header+text+content;
                e=e.originalEvent.changedTouches[0];//获取对应触摸对象
                var sx1 = e.pageX;
                if(h>ih){//如果滑动距离大于50px就认为是要触发左滑动事件了
                    page++;
                    retrieveData(-1,page,10);
                    setTimeout(function() {
                        $(".down_refresh").css("display", "none");
                    },1000)
                }
                $(this).unbind('touchend');

            });
        })
        /*加载更多*/
    function retrieveData(areaId,page,size){
        $.ajax({
            type:"post",
            url:"loadMoreRecruits",
            async:true,
            data :{ "areaId":areaId,"page": page,"size":size},
            success : function(data){
                if($(".content ul li").length-1 == data.total){
                    $(".down_refresh img").hide();
                    $(".down_refresh").children("i").text("暂无更多招聘信息");
                }else if($(".content ul li").length-1<data.total&& page !=1 ){
                  console.log('11111');
                    var html = "";
                    for (var i=0;i<data.list.length;i++){
                    var id=data.list[i].id;
                    var persionNum=data.list[i].persionNum;
                    var name=data.list[i].name;
                    var companyName=data.list[i].companyName;
                        html+="<li>" +
                        "<a href='${siteurl}wedetails.htm?id='+data.list[i].id+'>" +
                            "<span>"+name+"</span>" +
                            "<span>"+persionNum+"</span>" +
                            "<span>"+companyName+"</span>" +
                            "</a>" +
                            "</li>"
                    }
                    setTimeout(function(){
                        $(".content ul").append(html);
                        $(".down_refresh").css("display","none");
                        if( $(".content ul li").length == data.total){
                            $(".release").text("暂无更多招聘信息");
                        }else {
                            $(".release").text("上拉加载更多");
                        }
                        $(".down_refresh img").removeClass("curr");
                        $(".down_refresh img").css("display","none");
                    },1000);
                }
            },
            error : function(){
                console.log("请求错误!!!")
            }
        });
    }