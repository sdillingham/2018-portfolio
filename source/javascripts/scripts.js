$(document).ready(function() {

  //
  // Toggle menu visibility for smaller screens
  //
  $('.nav-toggle, .nav-close').click(function() {
    $('.site-nav').toggleClass("active");
  });


  //
  // Initialize Swipe.js for galleries
  //

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
  
  
  //
  // Blurry Image Scrolling
  //

  // Cache
  var $content          = $('.img-src')           
    , $crossFade        = $('.img-src.color')
    , $blackFade        = $('.no-touch .marquee-overlay')
    , $productShot      = $('.no-touch .product-shot')
    , $marqueeHeading   = $('.no-touch .single-project header')
    , wHeight       = $(window).height();     

  $(window).on('resize', function(){
    wHeight = $(window).height();
  });

  // requestAnimationFrame Shim 
  window.requestAnimFrame = (function()
  {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  // Scroller
  function Scroller()
  {
    this.latestKnownScrollY = 0;
    this.ticking            = false;
  }

  Scroller.prototype = {
    // Initialize
    init: function() {
      window.addEventListener('scroll', this.onScroll.bind(this), false);
    },

    // Capture Scroll
    onScroll: function() {
      this.latestKnownScrollY = window.scrollY;
      this.requestTick();
    },

    // Request a Tick
    requestTick: function() {
      if( !this.ticking ) {
        window.requestAnimFrame(this.update.bind(this));
      }
      this.ticking = true;
    },

    // Update
    update: function() {
      var currentScrollY = this.latestKnownScrollY;
      this.ticking       = false;
      
      // Do The Dirty Work Here
      var crossFadeScroll = currentScrollY * 4
        , blackScroll = currentScrollY * 0.95
        , imgScroll = currentScrollY / 3
        , marqueeScroll = currentScrollY * 2;
      
      // Cross-fade for Homepage
      $crossFade.css({
        'opacity' : crossFadeScroll / wHeight
      });

      // Fade marquee to black and parallax scroll product shot for project pages
      $blackFade.css({
        'opacity' : blackScroll / wHeight
      });
      if (imgScroll < 120) {
        $productShot.css({
          'transform'         : 'translateY(' + imgScroll + 'px)',
          '-moz-transform'    : 'translateY(' + imgScroll + 'px)',
          '-webkit-transform' : 'translateY(' + imgScroll + 'px)'
        });
        $marqueeHeading.css({
          'opacity' : 1 - (marqueeScroll / wHeight),
          'transform'         : 'translateY(' + imgScroll + 'px)',
          '-moz-transform'    : 'translateY(' + imgScroll + 'px)',
          '-webkit-transform' : 'translateY(' + imgScroll + 'px)'
        });
      }
    }
  };

  // Attach
  var scroller = new Scroller();  
  scroller.init();

});

