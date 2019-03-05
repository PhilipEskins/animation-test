function newBubble() {
  var randomNum = Math.floor(Math.random() * 91);
  var randomSpeed = Math.floor(Math.random() * 6 + 3);
  $("ul").append("<li class='bubble'></li>");
  $(".bubble-container li").last().css({"margin-left": randomNum + "vw", "animation-duration": randomSpeed + "s"}).addClass("moreBubbles");
}

$('document').ready(function() {
  $("ul").on("click", "li", function(){
    $(this).removeClass("bubble");
    $(this).addClass("pop");
  });

  $('button').click(function(){
    newBubble();
  });



});
