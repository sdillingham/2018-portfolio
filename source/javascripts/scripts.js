$(document).ready(function() {

  // Let's see if we're working with a touchscreen device
  function is_touch_device() {
  return 'ontouchstart' in window
    || 'onmsgesturechange' in window; // for ie10
  };

  // Toggle menu visibility for smaller screens
  $('.nav-toggle, .nav-close').click(function() {
    $('.site-nav').toggleClass("active");
  });

  // Fade in color image as user scrolls
  $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
        opacityVal = (s / 150.0);

    $('.color').css('opacity', opacityVal); 

    // Add fixed position hero image if we're not on a touchscreen device
    if (!is_touch_device()) {
      $('.index .img-src').css('-webkit-transform', 'translateY(' + s + 'px)');
    }
  });

  // Init Swipe for galleries
  window.mySwipe = Swipe(document.getElementById('slider'));
});