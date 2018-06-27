/**
 * Created by mrzhang on 2017/12/22.
 */
//切换分公司信息与位置
$(".content .container .aptitude .tab ul li").hover(function(){
    var longitude=$(this).attr("longitude");
    var latitude=$(this).attr("latitude");
    var flag=$(this).index();
    $(".content .container .aptitude .tab ul li").removeClass("current");
    $(this).addClass("current");
    $(".content .container .aptitude .cen").hide();
    $(".content .container .aptitude .cen:eq("+flag+")").show();
    map(longitude,latitude);
})
map(108.910154,34.21229);
function map(longitude,latitude){
    // 百度地图API功能
    var map = new BMap.Map("l-map");
    var point = new BMap.Point(longitude,latitude);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);// 创建标注
    map.addOverlay(marker);             // 将标注添加到地图中
    marker.disableDragging();           // 不可拖拽
}