$(document).ready(function () {

  (function ($) {
    $('.tabs-js').addClass('active').find('> li:eq(0)').addClass('current');

    $('.tabs-js li a').click(function (g) {
      var tab = $(this).closest('.blocks'),
        index = $(this).closest('li').index();

      tab.find('.tabs-js > li').removeClass('current');
      $(this).closest('li').addClass('current');

      tab.find('.tab_content-js').find('.blocks__item').not('.blocks__item:eq(' + index + ')').slideUp();
      tab.find('.tab_content-js').find('.blocks__item:eq(' + index + ')').slideDown();

      g.preventDefault();
    });
  })(jQuery);

});