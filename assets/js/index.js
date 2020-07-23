$(document).ready(function () {
  //after window is loaded completely
  window.onload = function () {
    //hide the preloader
    document.querySelector("#preloader").style.display = "none";
  };

  // $('.counter').counterUp({
  //   delay: 10,
  //   time: 2000
  // });
  // $('.counter').addClass('animated fadeInDownBig');
  // $('h3').addClass('animated fadeIn');

  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  // $(".testimonials-carousel").owlCarousel({
  //   autoplay: true,
  //   dots: true,
  //   loop: true,
  //   items: 1,
  // });

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var galleryIsotope = $(".gallery-container").isotope({
      itemSelector: ".gallery-item",
    });

    $("#gallery-flters li").on("click", function () {
      $("#gallery-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      galleryIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox();
    });
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
      // easing: "ease-out-back",
      // duration: 800,
      // delay: 300,
      // once: true,
      // disable: "mobile",
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
});
