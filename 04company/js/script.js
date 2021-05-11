$(document).ready(function(){
  $(".slider").bxSlider({
    auto:true
  });


$(".toggle").click(function(){
const tog = $(".toggle").attr("class");
if(tog == "toggle"){
$(".toggle").addClass("change");
$("#main_menu").stop().animate({top:0});
 }else{
$(".toggle").removeClass("change");
$("#main_menu").stop().animate({top:"-100%"});
}
});
});
 // 토클메뉴 클릭시 바뀌게 하는것
