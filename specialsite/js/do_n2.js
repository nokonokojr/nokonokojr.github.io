$(function() {
    var position1 = $(".g5_5").offset().top;



    $('.g5').click(function () {
        $("html,body").animate({
            scrollTop: position1
        }, 500);
        queue : false
    });




});