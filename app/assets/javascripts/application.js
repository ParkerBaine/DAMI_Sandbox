// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $('#navigation').affix({
    offset: {
      top: $(".highlight").height()-25
    }
  })


  $("#close_button").on("click", function(){
    console.log("close button")
    $(".dami_logo").css("top","-74px")
  })

  video_width = parseInt($(".why_pic_block").width());
  video_height = video_width * 0.75;
  $("video").attr("width",video_width)
  $("video").attr("height",video_height)
  $("#next").css("height",video_height+"px")
  $("#next").css("line-height",video_height+"px")
  $("#previous").css("height",video_height+"px")
  $("#previous").css("line-height",video_height+"px")


  videoIDs = ["BillVonHoene", "JohnRogersJr", "KeithMestrich", "RobertGreen", "RobertRaben"]
  video_index = 0;
  $("#JohnRogersJr").hide();
  $("#KeithMestrich").hide();
  $("#RobertGreen").hide();
  $("#RobertRaben").hide();

  $(window).resize(function() {
    video_width = parseInt($(".why_pic_block").width());
    video_height = video_width * 0.75;
    $("video").attr("width",video_width)
    $("video").attr("height",video_height)
    $("#next").css("height",video_height+"px")
    $("#next").css("line-height",video_height+"px")
    $("#previous").css("height",video_height+"px")
    $("#previous").css("line-height",video_height+"px")
  });

  $("#next").on("click", function(){
    $("#"+videoIDs[video_index]).hide();
    if (video_index == 4){
      video_index = 0;
    }
    else{
      video_index++;
    }
    $("#"+videoIDs[video_index]).show();
  })

  $("#previous").on("click", function(){
    $("#"+videoIDs[video_index]).hide();
    if (video_index == 0){
      video_index = 4;
    }
    else{
      video_index--;
    }
    $("#"+videoIDs[video_index]).show();

  })
  // This block of code must be run _after_ the DOM is ready
  // This will capture the frame at the 10th second and create a poster
  // var $BillVonHoene = Popcorn( "#BillVonHoene" ), poster1;
  // var $JohnRogersJr = Popcorn( "#JohnRogersJr" ), poster2;
  // var $KeithMestrich = Popcorn( "#KeithMestrich" ), poster3;
  // var $RobertGreen = Popcorn( "#RobertGreen" ), poster4;
  // var $RobertRaben = Popcorn( "#RobertRaben" ), poster5;


  // Jump to the frame we want to capture and create a poster!
  // poster1 = $BillVonHoene.currentTime( 10 ).capture();
  // poster2 = $JohnRogersJr.currentTime( 10 ).capture();
  // poster3 = $KeithMestrich.currentTime( 10 ).capture();
  // poster4 = $RobertGreen.currentTime( 10 ).capture();
  // poster5 = $RobertRaben.currentTime( 10 ).capture();

  // $BillVonHoene.capture({ at:10 });
  // $JohnRogersJr.capture({ at:10 });

  // $BillVonHoene.listen( "canplayall", function(){
  //   this.currentTime(10).capture();
  // })


})

$(document).on('page:load', function(){
  $('#navigation').affix({
    offset: {
      top: $(".highlight").height()-25
    }
  })

  $("#close_button").on("click", function(){
    console.log("close button")
    $(".dami_logo").css("top","-74px")
  })



})
