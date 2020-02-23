// mobile-nav
$('.mobile-nav .nav__item a').on('click', function () {
  $('.mobile-menu').hide();
  $('body').removeClass('body-scroll');
  $('.hamburglar').removeClass('is-open');
  $('.hamburglar').addClass('is-closed');
});
// mobile-nav end

// sticky header
jQuery(window).scroll(function () {
  var stickyHeader = jQuery('.entry').offset().top;
  if (jQuery(this).scrollTop() > stickyHeader) {
    $(".sticky-header").css('transform', 'translateY(0)');
  } else {
    $(".sticky-header").css('transform', 'translateY(-200%)');
  }
});
// sticky header end