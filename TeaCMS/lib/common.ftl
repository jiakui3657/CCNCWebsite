<div class="navbar navbar-ct-blue navbar-fixed-top">
    <div class="container">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="${webConfig.domainName}">
                <div class="logo-container">
                    <div class="logo">
                        <img src="/assets/get-shit-done/img/new_logo.png">
                    </div>
                    <div class="brand" style="line-height: 60px;margin-top: -5px;">
                        TeaCMS
                    </div>
                </div>
            </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="javascript:void(0);" data-toggle="search" class="hidden-xs"><i
                            class="fa fa-search"></i></a>
                </li>
                <form class="navbar-form navbar-left navbar-search-form" role="search">
                    <div class="form-group">
                        <input type="text" value="" class="form-control" placeholder="搜索">
                    </div>
                </form>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li>
                    <a href="/index.html">首页</a>
                </li>
                <li class="dropdown">
                    <a href="#gsdk" class="dropdown-toggle" data-toggle="dropdown">文章分类<b class="caret"></b></a>
                    <ul class="dropdown-menu" style="border-radius: 0;">
                    <#list allCategory as item>
                        <li><a href="${webConfig.domainName}/category/${item.alias}">${item.name}</a></li>
                    </#list>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>