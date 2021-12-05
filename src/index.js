$(document).ready(function(){
    $("#hover_init").mouseenter(function(){
      $("#dim1").css("opacity", "0.1");
      $("#dim2").css("opacity", "0.1");
    });
    $("#hover_init").mouseleave(function(){
      $("#dim1").css("opacity", "1");
        $("#dim2").css("opacity", "1");
      });
  });