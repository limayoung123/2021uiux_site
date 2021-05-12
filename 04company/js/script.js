$(document).ready(function(){
  $(".slider").bxSlider({
    auto:true
  });


$(".toggleMenu").click(function(){
const menu = $(".toggleMenu").attr("class");
if(menu == "toggleMenu"){
$(".toggleMenu").addClass("change");
$("#main_menu").stop().animate({top:0});
 }else{
$(".toggleMenu").removeClass("change");
$("#main_menu").stop().animate({top:"-100%"});
}
});
$(window).resize(function(){
      $("#main_menu").removeAttr("style");
      $(".toggleMenu").removeClass("change");
});

// toggle2영역하기
});
