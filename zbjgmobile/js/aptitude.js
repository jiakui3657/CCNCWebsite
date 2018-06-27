$(function(){
    $(".certificate-img").waterfall({
        itemClass: ".certificate-list",
        spacingHeight: 10,
        resizeable: true,
        spacingWidth: -10 // the brick element horizontal spacing
    });

    setTimeout(function () {
        $(".certificate-list").css("marginLeft", "5px");
    }, 300)
});