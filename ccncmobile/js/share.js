function getWeixinParame(url,incomingTitle,incomingDesc,initialSlide){
    //console.log(initialSlide)
    // 生成签名的时间戳
    var timeStamp;
    // 生成签名的随机串
    var noncestr;
    // 签名
    var sigNature;
    // 获取动态url
    $.ajax({
        url :  'http://2017.ccnc.cc/wxVerify?url='+url+'&accountItem=ccnc',
        dataType : 'json',
        success : function(data) {
            //console.log(data);
            if(data.code == '-1'){
                alert(data.msg);
                return;
            }
            data = data.data;
            timeStamp = parseInt(data.timestamp);
            noncestr = data.nonceStr;
            sigNature = data.signature;
            //console.log(timeStamp);
            //console.log(noncestr);
            //console.log(sigNature);
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: 'wx33c9c51363caf101', // 必填，公众号的唯一标识（中北控股公众号）
                timestamp: timeStamp, // 必填，生成签名的时间戳
                nonceStr: noncestr, // 必填，生成签名的随机串
                signature: sigNature,// 必填，签名，见附录1
                jsApiList: [
                    'onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        },
        error:function(jqXHR){
            // 隐藏加载动画
            alert('请求发生错误：'+jqXHR.status);
        }
    });
    // 通过ready接口处理成功验证
    wx.ready(function () {
        var imgUrl = 'http://ccnc.cc/views/ccncmobile/images/share_photo.jpg';
        var linkUrl = window.location.href;
        if(initialSlide == 1){
            linkUrl = "http://ccnc.cc/history.htm?dicts=companyIntroduction&index=3"
        }else if(initialSlide == 2){
            linkUrl = "http://ccnc.cc/history.htm?dicts=companyIntroduction&index=4"
        }else if(initialSlide == 3){
            linkUrl = "http://ccnc.cc/history.htm?dicts=companyIntroduction"
        }
        console.log(linkUrl)
        var title = incomingTitle;
        var desc = incomingDesc;
        // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
        wx.checkJsApi({
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ]
        });
        // 2. 分享接口
        // 2.1 “分享给朋友”
        wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: linkUrl,
            imgUrl: imgUrl
        });
        // 2.2 “分享到朋友圈”
        wx.onMenuShareTimeline({
            title: desc,
            desc: title,
            link: linkUrl,
            imgUrl: imgUrl
        });
        // 2.3 “分享到QQ”
        wx.onMenuShareQQ({
            title: title,
            desc: desc,
            link: linkUrl,
            imgUrl: imgUrl
        });
        // 2.4 “分享到微博”
        wx.onMenuShareWeibo({
            title: title,
            desc: desc,
            link: linkUrl,
            imgUrl: imgUrl
        });
        // 2.5 “分享到QZone”
        wx.onMenuShareQZone({
            title: title,
            desc: desc,
            link: linkUrl,
            imgUrl: imgUrl
        });
    });
    // 错误信息
    wx.error(function (res) {
        alert(res.errMsg);
    });
}

