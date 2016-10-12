$(function(){
  var menu = $('#menu')
      menuWidth = menu.outerWidth();

  $('#btn-fadein').click(function(){
    menu.animate({'left' : 0 }, 300);
  });

  $('#btn-fadeout').click(function(){
    menu.animate({'left' : -240 }, 300);
  });
});
