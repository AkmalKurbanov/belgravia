$(document).ready(function () {
  $(function () {
    $(".blocks").tabs();
    $("#child, #child, #child, #child").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#child li").removeClass("ui-corner-top").addClass("ui-corner-left");
  });


  $(".phone-js").inputmask({
    "mask": "0 (999) 999-999"
  });



  // animation
  if ($(window).width() > 575) {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      callback: function (box) {

      },
      scrollContainer: null
    });
    wow.init();
  }
  if ($('.header__wrap').hasClass('sticky-header')) {
    $('.header__masterbar').removeClass('wow fadeInUp');
  } else {
    $('.header__masterbar').addClass('wow fadeInUp');
  }
  // animation end

  var stickyHeader = $('.sticky-header').outerHeight();
  console.log(stickyHeader);
  // scroll button
  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top - stickyHeader
    }, 700);

  }
  $('[data-scroll]').on('click', scrollToSection);
  // scroll button end





  // thanks message
  //E-mail Ajax Send
  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      $('.popup-wrap').fadeIn();
      $('body').addClass('body-scroll');
    });
    return false;
  });
  // thanks message end

  $('.popup-wrap').on('click', function () {
    $('body').removeClass('body-scroll');
    $(this).hide();
  });




});