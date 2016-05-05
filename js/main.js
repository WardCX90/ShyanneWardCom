// HELPER FUNCTION THAT CLOSES MOBILE NAV AFTER CLICKING ANCHOR LINK

$(function(){ 
     var navMain = $("#nav-main");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
});