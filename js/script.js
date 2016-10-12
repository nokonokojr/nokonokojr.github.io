//navの色変化----------------------------------
function nav1(){
 var profile = document.getElementById('1');
 var portfolio = document.getElementById('2');
 var contact = document.getElementById('3');
 profile.classList.add("now");
 portfolio.classList.remove("now");
 contact.classList.remove("now");
}

function nav2(){
 var profile = document.getElementById('1');
 var portfolio = document.getElementById('2');
 var contact = document.getElementById('3');
 portfolio.classList.add("now");
 profile.classList.remove("now");
 contact.classList.remove("now");
}

function nav3(){
 var profile = document.getElementById('1');
 var portfolio = document.getElementById('2');
 var contact = document.getElementById('3');
 contact.classList.add("now");
 portfolio.classList.remove("now");
 profile.classList.remove("now");
}
//navの色変化----------------------------------

//ポートフォリオ--------------------------------



$(document).on("click", "#sakuhin1", function() {
  $("#moresakuhin1").fadeIn("slow");
  return false;
});
$(document).on("click", "#sakuhin2", function() {
  $("#moresakuhin2").fadeIn("slow");
  return false;
});
$(document).on("click", "#sakuhin3", function() {
  $("#moresakuhin3").fadeIn("slow");
  return false;
});
$(document).on("click", "#sakuhin4", function() {
  $("#moresakuhin4").fadeIn("slow");
  return false;
});
$(document).on("click", "#sakuhin5", function() {
  $("#moresakuhin5").fadeIn("slow");
  return false;
});


$(document).on("click", ".close", function() {
  $("#moresakuhin1").fadeOut("slow");
  $("#moresakuhin2").fadeOut("slow");
  $("#moresakuhin3").fadeOut("slow");  
  $("#moresakuhin4").fadeOut("slow");  
  $("#moresakuhin5").fadeOut("slow");
});


//ポートフォリオ--------------------------------