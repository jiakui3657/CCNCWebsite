/**
 * Created by mrzhang on 2017/12/22.
 */
// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(108.91055,34.2125);
	map.centerAndZoom(point, 15);

	//创建小狐狸
	var pt = new BMap.Point(108.91055,34.2125);
	var myIcon = new BMap.Icon("http://www.ednc.cc/views/ednc/img/pentagram.png", new BMap.Size(24,24));
	var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
	map.addOverlay(marker);   // 将标注添加到地图中

