<div class="container" style="margin-top: 83px;">
    <!-- banner 展示区域 -->
    <div class="col-md-8">
        <div id="carousel-example-generic" class="carousel slide teacms-carousel-box" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
            <#list blogroll as item>
                <li data-target="#carousel-example-generic" data-slide-to="${item_index}"
                    <#if item_index = 0>class="active"</#if>></li>
            </#list>
            </ol>

            <!-- 轮播内容 -->
            <div class="carousel-inner teacms-carousel-inner">
            <#list blogroll as item>
                <div class="item <#if item_index = 0>active</#if>">
                    <a href="${webConfig.domainName}/${item.id}.html">
                        <img src="${item.articleImg}" alt="${item.articleTitle}" class="img-responsive">
                        <div class="carousel-caption">
                            <h3>${item.articleTitle}</h3>
                            <#assign content = item.articleContent?replace("<[^>]*>", "", "r")?replace(" ", "")>
                            <p>
                                <#if content?length &gt; 30>
                                ${content?substring(0, 30)}
                                <#else>
                                ${content}
                                </#if>
                            </p>
                        </div>
                    </a>
                </div>
            </#list>
            </div>

            <!-- 左右选项按钮 -->
            <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                <span class="fa fa-angle-left"></span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                <span class="fa fa-angle-right"></span>
            </a>
        </div>
    </div>

    <!-- 最新消息展示区域 -->
    <div class="col-md-4 teacms-tab-box">
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
    </div>

</div>
<!-- 多说公共JS代码 start (一个网页只需插入一次) -->
<script type="text/javascript">
    var duoshuoQuery = {short_name:"teacms"};
    (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(ds);
    })();
</script>
<!-- 多说公共JS代码 end -->
