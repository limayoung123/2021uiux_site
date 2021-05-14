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
       winWidth = $(window).innerWidth()
       menuOver();
});

//menuOVer라는 함수를 만들어준다
//innerWidth로 길이값을 if문으로 해주고 widWidth라는 변수로 지정해서 적용
//resize는 화면의 크기를 바꿔도 계속 적용되게하는것!

let winWidth = $(window).innerWidth();
menuOver();


function menuOver(){
$("#main_menu > ul > li").mouseover(function(){
  if(winWidth < 700){ return false }else{
  $(this).find(".sub1").stop().slideDown(500);}
});
$("#main_menu > ul > li").mouseout(function(){
  $(this).find(".sub1" ).stop().slideUp(500);
});
}

$(".nav_submenu").mouseover(function(){
  $(this).stop().animate({height:300},300)
});
$(".nav_submenu").mouseout(function(){
  $(this).stop().animate({height:60},300)
});


});
