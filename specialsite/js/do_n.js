$(function() {
    var position1 = $("#g1_1").offset().top;
    var position2 = $("#g2_2").offset().top;
    var position3 = $("#g3_3").offset().top;
    var position4 = $("#g4_4").offset().top;


    $('#g1').click(function () {
        $("html,body").animate({
            scrollTop: position1
        }, 500);
        queue : false
    });

    $('#g2').click(function () {
        $("html,body").animate({
            scrollTop: position2
        }, 500);
        queue : false
    });

    $('#g3').click(function () {
        $("html,body").animate({
            scrollTop: position3
        }, 500);
        queue : false
    });

    $('.g4').click(function () {
        $("html,body").animate({
            scrollTop: position4
        }, 500);
        queue : false
    });



});