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

  videoIDs = ["BillVonHoene", "JohnRogersJr", "MaryKayHenry", "KeithMestrich", "RobertGreen", "RobertRaben"]
  video_index = 0;
  total_videos = videoIDs.length;
  $("#JohnRogersJr").hide();
  $("#KeithMestrich").hide();
  $("#RobertGreen").hide();
  $("#RobertRaben").hide();
  $("#MaryKayHenry").hide();

  video_width = parseInt($(".video_block").width());
  video_height = video_width * 0.5625;
  $("#next").css("height",video_height+"px")
  $("#next").css("line-height",video_height+"px")
  $("#previous").css("height",video_height+"px")
  $("#previous").css("line-height",video_height+"px")

  $(window).resize(function() {
    video_width = parseInt($(".video_block").width());
    video_height = video_width * 0.5625;
    // $("iframe").attr("width",video_width)
    // $("iframe").attr("height",video_height)
    $("#next").css("height",video_height+"px")
    $("#next").css("line-height",video_height+"px")
    $("#previous").css("height",video_height+"px")
    $("#previous").css("line-height",video_height+"px")
  });

  $("#next").on("click", function(){
    $("#"+videoIDs[video_index]).hide();
    if (video_index == (total_videos-1)){
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
      video_index = total_videos - 1;
    }
    else{
      video_index--;
    }
    $("#"+videoIDs[video_index]).show();
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

/*********** Sending email address to Google Form **********/

$(".inquiry_form").one("submit", function(event){
  event.preventDefault();

  var inputq1 = encodeURIComponent($("#inquiry_first_name").val());

  var q1ID = "entry.75592072";

  var baseURL = "https://docs.google.com/a/dupontstudios.com/forms/d/17RLSXep_GPWN12E4dMvyPGya5UoIlvkfYROizQCMK6U/formResponse?";
  var submitRef = "submit=Submit";
  var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + submitRef);
  console.log(submitURL);
  $(this)[0].action=submitURL;
  $(this).submit();
  $(".form-control").each(function(){
    $(this).val("");
  });
  // $(".inquiry_title").text("Information Received");
  // $(".inquiry_subtitle").text("Thank you!");

  $(".inquiry_title").fadeOut("slow", function(){
    $(this).text("Information Received")
    $(this).fadeIn("slow")
  });
  $(".inquiry_subtitle").fadeOut("slow", function(){
    $(this).text("Thank you!")
    $(this).fadeIn("slow")
  });
  // $(".inquiry_subtitle").fadeout(500);
})



})
