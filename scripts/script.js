$(document).ready(function(){
    if (localStorage.viewed != 0)
    {
      $("#check").click(function(){
          $("#check").attr("html", "run_away.html");
      });
    }
    localStorage.viewed ++;

    $("#done").click(function(){
        $("#video").hide();
        $("#bugs-leaving").css("display", "initial");
        $("#done").hide();
    });

});
