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

  videoIDs = ["BillVonHoene", "JohnRogersJr", "MaryKayHenry", "KeithMestrich", "RobertGreene", "RobertRaben"]
  video_index = 0;
  total_videos = videoIDs.length;
  $("#JohnRogersJr").hide();
  $("#KeithMestrich").hide();
  $("#RobertGreene").hide();
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



  /*********** Sending email address to Google Form **********/

  $("#email_address_form").one("submit", function(event){
    event.preventDefault();
    var inputq1 = encodeURIComponent($("#email_address").val());
    var q1ID = "entry.868851441";

    var inputq2 = encodeURIComponent($("#name").val());
    var q2ID = "entry.1399079316";

    var inputq3 = encodeURIComponent($("#organization").val());
    var q3ID = "entry.2058677074";


    var baseURL = "//docs.google.com/a/dupontstudios.com/forms/d/18ZEavDDQdQSZuo8ORI7tWXDErB-tOsOxYRoLUc1wJ_U/formResponse?";
    var submitRef = "submit=Submit";
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + submitRef);

    $(this)[0].action=submitURL;
    $(this).submit();
    $("input").each(function(){
      $(this).val("");
      // $(this).attr("disabled","true");
    });
    $(".email_status").text("Your information has been received")
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
