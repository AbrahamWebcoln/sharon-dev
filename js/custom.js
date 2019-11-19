(function($) {

  // for filter
  $(document).ready(function() {
      var $container = $('.portfolioContainer');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      $('.portfolioFilter a').click(function() {
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({
              filter: selector,
              animationOptions: {
                  duration: 750,
                  easing: 'linear',
                  queue: false
              }
          });
          return false;
      });
  });
  // Nav bar
  $(document).ready(function(e) {
      $(document).on("click", ".navbar .menuItem", function(t) {
          t.preventDefault();
          var $href = $(this).find('a').attr('href');
          $('html, body').animate({
                  scrollTop: $($href).offset().top,
              },
              500,
              'linear'
          )
      });
  });

  //Creds and Evals
  $(document).ready(function(e) {
      $(document).on("click", ".lightCon .hoverBox", function(t) {
          t.preventDefault();
          var $href = $(this).find('a').attr('href');

          if ($href.indexOf('#') > -1) {
              $('html, body').animate({
                      scrollTop: $($href).offset().top,
                  },
                  500,
                  'linear'
              )
          } else {
              window.location = $href;
          }
      });
  });
}(jQuery));
