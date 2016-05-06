// HELPER FUNCTION THAT CLOSES MOBILE NAV AFTER CLICKING ANCHOR LINK

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});