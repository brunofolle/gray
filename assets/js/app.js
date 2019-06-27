$(document).ready(function() {
    // 1 - foundation starts
    $(document).foundation();
    // 2 - button back to top
    $("#back-top").hide();
    $(function () {
        $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
        });

        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    $(function() {
        $(window).scroll(function() {
          var winTop = $(window).scrollTop();
          if (winTop >= 30) {
            $("body").addClass("sticky-shrinknav-wrapper");
          } else{
            $("body").removeClass("sticky-shrinknav-wrapper");
          }
        });
      });
      
      
});
// loading div
$(window).on("load", function (e) {
    $( ".overlay" ).fadeOut( 'slow' );
});