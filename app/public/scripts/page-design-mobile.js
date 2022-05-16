(function($) {
  $('#nav .btn-navbar').on('click', function() {
    $('#nav .nav-collapse').toggleClass('collapse');
    $(this).parents('.nav-button-wrapper').toggleClass('open');
  });
})(jQuery);