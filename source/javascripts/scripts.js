$(document).ready(function() {

  // Toggle menu visibility for smaller screens
  $('.nav-toggle, .nav-close').click(function() {
    $('.site-nav').toggleClass("active");
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
  
  /**
   * Cache
   */
  var $content = $('.img-src')
    , $blur    = $('.img-src.color')
    , wHeight  = $(window).height();

  $(window).on('resize', function(){
    wHeight = $(window).height();
  });

  /**
   * requestAnimationFrame Shim 
   */
  window.requestAnimFrame = (function()
  {
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  /**
   * Scroller
   */
  function Scroller()
  {
    this.latestKnownScrollY = 0;
    this.ticking            = false;
  }

  Scroller.prototype = {
    /**
     * Initialize
     */
    init: function() {
      window.addEventListener('scroll', this.onScroll.bind(this), false);
    },

    /**
     * Capture Scroll
     */
    onScroll: function() {
      this.latestKnownScrollY = window.scrollY;
      this.requestTick();
    },

    /**
     * Request a Tick
     */
    requestTick: function() {
      if( !this.ticking ) {
        window.requestAnimFrame(this.update.bind(this));
      }
      this.ticking = true;
    },

    /**
     * Update.
     */
    update: function() {
      var currentScrollY = this.latestKnownScrollY;
      this.ticking       = false;
      
      /**
       * Do The Dirty Work Here
       */
      var blurScroll = currentScrollY * 4;
      
      $blur.css({
        'opacity' : blurScroll / wHeight
      });
    }
  };

  /**
   * Attach!
   */
  var scroller = new Scroller();  
  scroller.init();

});

