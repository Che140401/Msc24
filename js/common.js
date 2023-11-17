$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
      //clearHeader, not clearheader - caps H
      $(".nav-head").addClass("active");
    }
    else {
      $(".nav-head").removeClass("active");
    }
  });

  if (window.screen.width <= 767) {
    $('.menu-btn').click(function () {
      $(this).toggleClass('active');
      $('.navlist').toggleClass('active');
      var currentOverflow = $('body').css('overflow');
      if (currentOverflow === 'hidden') {
        $('body').css('overflow', 'auto');
      } else {
        $('body').css('overflow', 'hidden');
      }
    })
  }

  if (window.screen.width <= 767) {
    $('.navlist a').click(function () {
      $('.navlist').removeClass('active');
      $('.menu-btn').removeClass('active');
      var currentOverflow = $('body').css('overflow');
      if (currentOverflow === 'hidden') {
        $('body').css('overflow', 'auto');
      } else {
        $('body').css('overflow', 'hidden');
      }
    })
  }

  $(".prev").click(function () {
    $(".section-what-clients-say .slick-prev").trigger("click")
  })

  $(".next").click(function () {
    $(".section-what-clients-say .slick-next").trigger("click")
  })

  $(".section-gallery .prev").click(function () {
    $(".section-gallery .slick-prev").trigger("click")
  })

  $(".section-gallery .next").click(function () {
    $(".section-gallery .slick-next").trigger("click")
  })

  $('.banner-slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.gallery-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: false
  });

  $(document).on('click', '[data-tab]', function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var dataTab = $(this).attr('data-tab');
    $('#' + dataTab).siblings().removeClass("active");
    $('#' + dataTab).addClass('active');
  });

  $('.courses-box .left-box').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });

  $('.box-wrappper-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: false
  });

  try {
    const scrollContain = document.querySelector(".scroll-images .scroll-contain");
    const images = scrollContain.querySelector("img");
    // Your code that relies on the result
    console.log(images);
    for (const image of images) {
      const copyImage = image.cloneNode(true);
      scrollContain.appendChild(copyImage);
    }
  } catch (error) {
    // Handle the error
    // Shows error in console
    console.error('An error occurred:', error.message);
  }
  // Code here will continue to execute even if there was an error in the try block
  // console.log('Execution continues...');

  $(function ($, win) {
    $.fn.inViewport = function (cb) {
      return this.each(function (i, el) {
        function visPx() {
          var H = $(this).height(),
            r = el.getBoundingClientRect(),
            t = r.top,
            b = r.bottom;
          return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
        }

        visPx();
        $(win).on("resize scroll", visPx);

      });
    };
  }(jQuery, window));

  jQuery(function ($) {
    $(".counter").inViewport(function (px) {
      if (px > 0 && !this.initNumAnim) {
        this.initNumAnim = true;
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 1000,
          step: function (now) {
            $(this).text(Math.ceil(now));

          }
        });

      }

    });
  });


  $(function () {
    var $elems = $('.circle-chart__circle');
    var winheight = $(window).height();
    var fullheight = $(document).height();
    $(window).scroll(function () {
      animate_elems();
      // onScroll();
    });

    function animate_elems() {
      wintop = $(window).scrollTop();
      $elems.each(function () {
        $elm = $(this);
        if ($elm.hasClass('active')) { return true; }
        topcoords = $elm.offset().top;
        if (wintop > (topcoords - (winheight))) {
          $elm.addClass('active');
        }
      });
    }
  });





  $(document).click(function () {
    $(".close-enq").trigger("click");
  });

  $('.left-enq-form').click(function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".register-now", function (e) {
    $(".left-enq-form").toggleClass("active");
    e.stopPropagation();
  });

  $(".close-enq").click(function () {
    $(".left-enq-form").removeClass("active");

  });

  $(".next-btn").click(function () {
    $(".shedule-inner-wrap").toggleClass("active");
  });

  // if ($(window).width() <= 1023) {
  //   $(document).on("click", ".register-now", function (e) {
  //     $(".left-enq-form").css("width", "40.0rem");
  //     e.stopPropagation();
  //   });

  //   $(".close-enq").click(function () {
  //     $(".left-enq-form").css("width", "0");
  //   });
  // }

});

$(document).ready(function () {
  AOS.init({
    duration: 900,
    easing: 'ease-in',
    mirror: true,
  });
  AOS.refresh();
})

Fancybox.bind('[data-fancybox="client-video"]', {
  Thumbs: {
    type: "modern"
  }
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: {
    type: "modern"
  }
});