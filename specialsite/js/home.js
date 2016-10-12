$(function() {
    var homeBtn = $('#top-page');    
    homeBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            homeBtn.fadeIn();
        } else {
            homeBtn.fadeOut();
        }
    });
});