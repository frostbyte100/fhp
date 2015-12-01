localStorage.setItem("viewed", 1);

$(document).ready(function(){


    if (localStorage.setItem("view") != 1)
    {
      $("#check").click(function(){
          $("#check").attr("html", "run_away.html");
      });
    }
    localStorage.setItem("view") ++;


});
