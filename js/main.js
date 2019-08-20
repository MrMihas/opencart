$(function() {
  // Preloader
  var $preloader = $("#page-preloader"),
    $spinner = $preloader.find(".preloader-box");
  $spinner.fadeOut();
  $preloader.delay(550).fadeOut("slow");

  // Header-background-slider
  var slideNow = 1;
  var slideCount = $("#slidewrapper").children().length;
  var slideInterval = 7000;
  var navBtnId = 0;
  var translateWidth = 0;

  $(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $("#viewport").hover(
      function() {
        clearInterval(switchInterval);
      },
      function() {
        switchInterval = setInterval(nextSlide, slideInterval);
      }
    );

    $("#next-btn").click(function() {
      nextSlide();
    });

    $("#prev-btn").click(function() {
      prevSlide();
    });

    $(".slide-nav-btn").click(function() {
      navBtnId = $(this).index();

      if (navBtnId + 1 != slideNow) {
        translateWidth = -$("#viewport").width() * navBtnId;
        $("#slidewrapper").css({
          transform: "translate(" + translateWidth + "px, 0)",
          "-webkit-transform": "translate(" + translateWidth + "px, 0)",
          "-ms-transform": "translate(" + translateWidth + "px, 0)"
        });
        slideNow = navBtnId + 1;
      }
    });
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $("#slidewrapper").css("transform", "translate(0, 0)");
      slideNow = 1;
    } else {
      translateWidth = -$("#viewport").width() * slideNow;
      $("#slidewrapper").css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
      slideNow++;
    }
  }

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$("#viewport").width() * (slideCount - 1);
      $("#slidewrapper").css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
      slideNow = slideCount;
    } else {
      translateWidth = -$("#viewport").width() * (slideNow - 2);
      $("#slidewrapper").css({
        transform: "translate(" + translateWidth + "px, 0)",
        "-webkit-transform": "translate(" + translateWidth + "px, 0)",
        "-ms-transform": "translate(" + translateWidth + "px, 0)"
      });
      slideNow--;
    }
  }

  // Fixed navigation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 720) {
      $(".nav-wrap").addClass("sticky");
    } else {
      $(".nav-wrap").removeClass("sticky");
    }
  });

  // Opening menu
  $(".menu-open").click(function() {
    $(".menu-collaps")
      .toggleClass("d-none")
      .css("order", "1");
    $(".nav-wrap .menu").addClass("menu-opened");
  });

  $(".nav-wrap .menu__link").click(function() {
    $(".menu-collaps").toggleClass("d-none");
  });

  $(".header-content").click(function() {
    $(".menu-collaps").addClass("d-none");
  });

  // Hits-slider
  $(".hits-slider").slick({
    // setting-name: setting-value
    dots: false,
    autoplay: 6000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="catalog/view/theme/bravo/image/left-b.png" alt="previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="catalog/view/theme/bravo/image/right-b.png" alt="next"></button>'
  });

  // Feedback-slider
  $(".feed-slider").slick({
    centerMode: true,
    autoplay: 5000,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="catalog/view/theme/bravo/image/left-b.png" alt="previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="catalog/view/theme/bravo/image/right-b.png" alt="next"></button>',
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1
        }
      }
    ]
  });

  // Go to section slowly
  $("a.go-to").click(function(e) {
    e.preventDefault();
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("body,html").animate({ scrollTop: destination }, 780);
  });

  // Fade in
  $(document).ready(function() {
    $(window).scroll(function() {
      $(".fadeinleft").each(function(i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: "1", "margin-left": "0px" }, 1000);
        }
      });
      $(".fadeinright").each(function(i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_element) {
          $(this).animate({ opacity: "1", "margin-right": "0px" }, 1000);
        }
      });
    });
  });
});
