<#assign url = "http://127.0.0.1:8080">
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TeaCMS</title>

    <!-- pace -->
    <script src="${webConfig.domainName}/static/plugins/pace-0.7.5/pace.js"></script>
    <link href="${webConfig.domainName}/static/plugins/pace-0.7.5/themes/blue/pace-theme-center-circle.css"
          rel="stylesheet"/>

    <!-- Bootstrap -->
    <link href="${webConfig.domainName}/views/TeaCMS/assets/bootstrap3/css/bootstrap.css" rel="stylesheet"/>

    <link rel="stylesheet" href="${webConfig.domainName}/views/TeaCMS/assets/get-shit-done/css/gsdk.css"/>
    <link rel="stylesheet" href="${webConfig.domainName}/views/TeaCMS/assets/get-shit-done/css/demo.css"/>
    <link rel="stylesheet" href="${webConfig.domainName}/views/TeaCMS/css/new-style.css"/>

    <!--     Font Awesome     -->
    <link href="/views/TeaCMS/assets/bootstrap3/css/font-awesome.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'>

    <style>
        .teacms-article-post img {
            width: 100%;
        }
        .teacms-article-post img{
            display: block;
            max-width: 100%;
            height: auto;
            padding: 8px 0 8px 0;
        }
    </style>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<#include "lib/header.ftl">

<div class="container teacms-article-main" style="margin-top: 83px;">
    <div class="col-md-8">

        <article class="teacms-box teacms-article">
            <div class="teacms-article-header">
                <h1 class="text-center">
                    <a href="#">${articleAllVo.articleTitle}</a>
                </h1>
                <div class="teacms-article-meta text-center">
							<span>
								<i class="fa fa-calendar"></i> ${articleAllVo.updateDate?date}
								<i class="fa fa-eye"></i>  ${articleAllVo.pageView} Views
								<i class="fa fa-thumbs-o-up"></i> <span id="praise">${articleAllVo.praise}</span> Times
							</span>
                </div>
            </div>
            <div class="teacms-article-post">
            ${articleAllVo.articleContent}
            </div>

            <div class="text-center">
                <#--<button class="btn btn-info" data-toggle="modal" data-target="#myModal">打赏： 【TeaCMS】</button>-->
                <button class="btn btn-danger" id="btn">点赞：【TeaCMS:发】</button>
            </div>

        </article>

        <div class="teacms-box teacms-comment">
            <h3>评论</h3>
            <!-- 多说评论框 start -->
            <div class="ds-thread" data-thread-key="${articleAllVo.id}" data-title="${articleAllVo.articleTitle}"
                 data-url="${webConfig.domainName}/${articleAllVo.id}.html"></div>
            <!-- 多说评论框 end -->
            <!-- 多说公共JS代码 start (一个网页只需插入一次) -->
            <script type="text/javascript">
                var duoshuoQuery = {short_name: "${webConfig.shortName}"};
                (function () {
                    var ds = document.createElement('script');
                    ds.type = 'text/javascript';
                    ds.async = true;
                    ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.unstable.js';
                    ds.charset = 'UTF-8';
                    (document.getElementsByTagName('head')[0]
                    || document.getElementsByTagName('body')[0]).appendChild(ds);
                })();
            </script>
            <!-- 多说公共JS代码 end -->
        </div>

    </div>

    <!-- 模态框（Modal） -->
    <div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="modal-title" id="myModalLabel">
                        打赏
                    </h4>
                </div>
                <div class="modal-body">
                    在这里添加一些文本
                </div>

            </div><!-- /.modal-content -->
        </div><!-- /.modal -->
    </div>

    <div id="sidebar" class="col-md-4 visible-md visible-lg">

        <div class="teacms-box">
            <!-- 导航标签 -->
            <ul class="nav nav-pills nav-justified" style="border-bottom: 5px solid #2ca8ff;">
                <li><a href="#top-article" data-toggle="tab">最热文章</a></li>
                <li class="active"><a href="#new-article" data-toggle="tab">最新文章</a></li>
                <li><a href="#new-comment" data-toggle="tab">最新评论</a></li>
            </ul>

            <!-- 选项卡窗格 -->
            <div class="tab-content teacms-tab-content">
                <div class="tab-pane fade" id="top-article">
                    <ul class="list-group">
                    <#list viewArticleTop6 as item>
                        <li class="list-group-item"><a href="${webConfig.domainName}/${item.id}.html"><i
                                class="fa fa-fire"></i> ${item.articleTitle}</a></li></#list>
                    </ul>
                </div>

                <div class="tab-pane fade in active" id="new-article">
                    <ul class="list-group border-radius-0">
                    <#list newArticleTop6 as item>
                        <li class="list-group-item"><a href="${webConfig.domainName}/${item.id}.html"><i
                                class="fa fa-book"></i> ${item.articleTitle}</a></li>
                    </#list>
                    </ul>
                </div>

                <div class="tab-pane fade comments" id="new-comment">
                    <!-- 多说最新评论 start -->
                    <div class="ds-recent-comments" data-num-items="3" data-show-avatars="1" data-show-time="1" data-show-title="1" data-show-admin="1" data-excerpt-length="70"></div>
                    <!-- 多说最新评论 end -->
                </div>
            </div>
        </div>

        <div class="panel panel-default teacms-panel-box">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-location-arrow"></i> 分类目录</h3>
            </div>
            <div class="panel-body">
                <form action="/so" method="post">
                    <div class="input-group input-group-md">

                        <input type="text" name="name" class="form-control pull-right" placeholder="搜索文章">

                        <div class="input-group-btn">
                            <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="panel panel-default teacms-panel-box teacms-common">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-location-arrow"></i> 分类目录</h3>
            </div>
            <div class="panel-body">
                <ul class="teacms-list-common">
                <#list allCategory as item>
                    <li><a href="${webConfig.domainName}/category/${item.alias}">${item.name}</a></li>
                </#list>
                </ul>
            </div>
        </div>

        <div class="panel panel-default teacms-panel-box">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-tags"></i> 标签</h3>
            </div>
            <div class="panel-body">
                <div class="teacms-tags">
                <#list allTag as item>
                    <a href="${webConfig.domainName}/tag/${item.alias}">${item.name}</a>
                </#list>
                </div>
            </div>
        </div>

        <div class="panel panel-default teacms-panel-box">
            <div class="panel-heading">
                <h3 class="panel-title"><i class="fa fa-adn"></i> 腾讯云强力驱动</h3>
            </div>
            <div class="panel-body">
                <a href="">
                    <img src="https://ooo.0o0.ooo/2017/03/14/58c79b8aba931.jpg" alt="" class="img-responsive"/>
                </a>
            </div>
        </div>

    </div>

</div>

<div class="teacms-footer container-fluid">
    <div class="container">
        <p>© 2017 <a href="#">TeaCMS</a> &nbsp; GitHub <a href="#" target="_blank"></a></p>
    </div>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="${webConfig.domainName}/views/TeaCMS/assets/jquery/jquery-1.10.2.js"></script>
<script src="${webConfig.domainName}/views/TeaCMS/assets/jquery/jquery-ui.custom.min.js"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="${webConfig.domainName}/views/TeaCMS/assets/bootstrap3/js/bootstrap.js" type="text/javascript"></script>
<script src="${webConfig.domainName}/views/TeaCMS/assets/get-shit-done/js/gsdk-bootstrapswitch.js"></script>
<script src="${webConfig.domainName}/views/TeaCMS/assets/get-shit-done/js/get-shit-done.js"></script>
<script>
(function ($) {
    $.extend({
        tipsBox: function (options) {
            options = $.extend({
                obj: null,  //jq对象，要在那个html标签上显示
                str: "+1",  //字符串，要显示的内容;也可以传一段html，如: "<b style='font-family:Microsoft YaHei;'>+1</b>"
                startSize: "12px",  //动画开始的文字大小
                endSize: "30px",    //动画结束的文字大小
                interval: 600,  //动画时间间隔
                color: "red",    //文字颜色
                callback: function () { }    //回调函数
            }, options);
            $("body").append("<span class='num'>" + options.str + "</span>");
            var box = $(".num");
            var left = options.obj.offset().left + options.obj.width() / 2;
            var top = options.obj.offset().top - options.obj.height();
            box.css({
                "position": "absolute",
                "left": left + "px",
                "top": top + "px",
                "z-index": 9999,
                "font-size": options.startSize,
                "line-height": options.endSize,
                "color": options.color
            });
            box.animate({
                "font-size": options.endSize,
                "opacity": "0",
                "top": top - parseInt(options.endSize) + "px"
            }, options.interval, function () {
                box.remove();
                options.callback();
            });
        }
    });
})(jQuery);

function niceIn(prop){
    prop.find('i').addClass('niceIn');
    setTimeout(function(){
        prop.find('i').removeClass('niceIn');
    },1000);
}

$(function () {
    $("#btn").click(function () {
        $.tipsBox({
            obj: $(this),
            str: "+1",
            callback: function () {
                $.ajax({
                    type:"POST",
                    url:"/praise/updatearticlepraise",
                    contentType: 'application/json;charset=UTF-8',
                    data:JSON.stringify(${articleAllVo.id}),
                    datatype: "jsonp",
                    success:function(data){
                        var item = $("#praise").text();
                        $("#praise").text(parseInt(item)+1);
                    },
                    error: function(){
                    }
                });
            }
        });
        niceIn($(this));
    });
});
</script>
</body>
</html>