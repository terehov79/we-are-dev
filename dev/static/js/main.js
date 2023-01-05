(function ($) {

  $(document).ready(function () {
    svg4everybody({});
  });

  $('.play').on("click", function () {
    if($(this).next().get(0).paused) {
      $(this).next().get(0).play();
      $(this).children(".fa-play").hide();
      $(this).children(".fa-pause").show();
      } else {
        $(this).next().get(0).pause();
        $(this).children(".fa-play").show();
        $(this).children(".fa-pause").hide();
      }
  });

  $('.burger').on('click', function () {
    $('.header-nav-wrap').toggleClass('active');
    $(this).toggleClass('active');
  })

})(jQuery);