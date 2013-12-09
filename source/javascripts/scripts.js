$(document).ready(function() {
  // Toggle menu visibility for smaller screens
  $('.nav-toggle, .nav-close').click(function() {
    $('.site-nav').toggleClass("active");
  });

  // Fade in color image as user scrolls
  $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
        opacityVal = (s / 150.0);

    $('.color').css('opacity', opacityVal); 
  });
});