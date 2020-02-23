  $('document').ready(function () {
    var trigger = $('#hamburger'),
      isClosed = false;

    trigger.click(function () {
      burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
      $('.mobile-menu').fadeToggle(400);
      $('body').toggleClass('body-scroll');
    }

  });

  $('.mobile-menu ul').toggleClass('mobile-nav');
  $('.social ul').removeClass('mobile-nav');