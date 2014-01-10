$(document).ready(function() {

  // Toggle menu visibility for smaller screens
  $('.nav-toggle, .nav-close').click(function() {
    $('.site-nav').toggleClass("active");
  });

  // Fade in color image and fix position of hero image as user scrolls
  $(window).scroll(function(e) {
    var s = $(window).scrollTop(),
        opacityVal = (s / 150.0);

    // increase opacity for overlay image to create transition effect
    $('.color').css('opacity', opacityVal); 

    // Add fixed position hero image if we're not on a touchscreen device
    $('.no-touch .index .img-src').css('-webkit-transform', 'translateY(' + s + 'px)');
  });

  // Initialize Swipe.js for galleries

    // Set vars
    var bullets = $('#position').children('li');

    window.mySwipe = Swipe(document.getElementById('slider'), {
      continuous: true,
      callback: function(pos) {

        var i = bullets.length;

        while (i--) {
          bullets[i].className = ' ';
        }
        
        bullets[pos].className = 'on';
      }
    });

});