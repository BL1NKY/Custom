'use strict';
/*var myInterval = setInterval(function () {
    console.log(new Date());
}, 1009);*/
$(function () {

  var width = 720;
  var animationSpeed = 1000;
  var currentSlide = 1;

  var $main = $("#main-slider");
  var $slider = $main.find("#slider")
  var $slideContainer = $slider.find(".slides");
  var $slides = $slideContainer.find(".slide");
  var $btnPrev = $main.find("#Prev");
  var $btnNext = $main.find("#Next");

  $btnNext.on("click", function () {
    console.log("NEXT");
    $slideContainer.animate({"margin-left": "-=" + width}, animationSpeed, function () {
      currentSlide++;
      console.log(currentSlide);
      if (currentSlide === $slides.length){
        currentSlide = 1;
        console.log("FIRST");
        $slideContainer.css("margin-left", 0);
      }
    });
  });

  $btnPrev.on("click", function () {
    console.log("PREV");
    if (currentSlide != 1) {
      $slideContainer.animate({"margin-left": "+=" + width}, animationSpeed, function () {
        currentSlide--;
        console.log(currentSlide);
      });
    } else{
      currentSlide = $slides.length;
      console.log(currentSlide);
      $slideContainer.css("margin-left", -3600);
      $slideContainer.animate({"margin-left": "+=" + width}, animationSpeed, function () {
        currentSlide--;
        console.log(currentSlide);
      });
    }
  });

});
