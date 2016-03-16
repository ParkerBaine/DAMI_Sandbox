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
    $(".dami_logo").css("top","-74px")
  })


  /* Video Controls & Size */

  video_width = parseInt($(".why_pic_block").width());
  video_height = video_width * 0.6;
  $("video").attr("width",video_width)
  $("video").attr("height",video_height)
  $("#next").css("height",video_height+"px")
  $("#next").css("line-height",video_height+"px")
  $("#previous").css("height",video_height+"px")
  $("#previous").css("line-height",video_height+"px")


  youtubeIDS= ["-r5sYM2QiLc", "x5M847mtztQ", "TSKMBKC6v4g", "D7H5drWbJEU", "ANASaTvVA-k", "kakK4GzMR90"]
  total_videos = youtubeIDS.length;
  video_index = 0;
   $(window).resize(function() {
    video_width = parseInt($(".video_block").width());
    video_height = video_width * 0.5625;
    $("iframe").attr("width",video_width)
    $("iframe").attr("height",video_height)
    $("#next").css("height",video_height+"px")
    $("#next").css("line-height",video_height+"px")
    $("#previous").css("height",video_height+"px")
    $("#previous").css("line-height",video_height+"px")
  });

  $("#next").on("click", function(){
    if (video_index == (total_videos-1)){
      video_index = 0;
    }
    else{
      video_index++;
    }
    $(".video_block iframe").attr("src","http://www.youtube.com/v/"+youtubeIDS[video_index]+"?autohide=1");
  })

  $("#previous").on("click", function(){
    if (video_index == 0){
      video_index = total_videos - 1;
    }
    else{
      video_index--;
    }
    $(".video_block iframe").attr("src","http://www.youtube.com/v/"+youtubeIDS[video_index]+"?autohide=1");
  })

})

$(document).on('page:load', function(){
  $('#navigation').affix({
    offset: {
      top: $(".highlight").height()-25
    }
  })

  $("#close_button").on("click", function(){
    $(".dami_logo").css("top","-74px")
  })



})
