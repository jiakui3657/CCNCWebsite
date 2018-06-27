//使用rem单位
/*让文字和标签的大小随着屏幕的尺寸做变话 等比缩放*/
var html = document.getElementsByTagName('html')[0];
//console.log(html);
/*取到屏幕的宽度*/
var width = window.innerWidth;
//console.log(width);
/* 640 100  320 50 */
var fontSize = 100/640*width;
//console.log(fontSize);
/*设置fontsize*/
html.style.fontSize = fontSize +'px';
window.onresize = function(){
        var html = document.getElementsByTagName('html')[0];
        //console.log(html);
        /*取到屏幕的宽度*/
        var width = window.innerWidth;
        //console.log(width);
        /* 640 100  320 50 */
        var fontSize = 100/640 * width;
        //console.log(fontSize);
        /*设置fontsize*/
        html.style.fontSize = fontSize +'px';
};

//输入关键字搜索员工接口
function searchEmployee(worker,name,no,size,callback){
    $.ajax({
        type:"post",
        url:"http://123.206.23.130/icontact_web/rest/worker/search.htm",
        async:true,
        data :{ "worker": worker , "name": name , "no": no , "size": size },
        success : function(data){
            callback(data)
        },
        error : function(){
            console.log("请求错误!!!")
        }
    });
}
