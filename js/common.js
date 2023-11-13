$(document).ready(function () {
  $(".prev").click(function(){
    $(".section-what-clients-say .slick-prev,.section-gallery .slick-prev").trigger("click")
  })

  $(".next").click(function(){
    $(".section-what-clients-say .slick-next,.section-gallery .slick-next").trigger("click")
  })

  $('.banner-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
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
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    autoplay:true
  });

  $('.gallery-slider').slick({
    infinite:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    autoplay:false
  });

  const scrollContain = document.querySelector(".scroll-images .scroll-contain");
  const images = scrollContain.querySelectorAll("img");

  for (const image of images) {
    const copyImage = image.cloneNode(true);
    scrollContain.appendChild(copyImage);
  }

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

  $(document).click(function () {
    $(".close-enq").trigger("click");
  });

  $('.left-enq-form').click(function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".register-now", function (e) {
    $(".left-enq-form").css("width", "30.0rem");
    e.stopPropagation();
  });

  $(".close-enq").click(function () {
    $(".left-enq-form").css("width", "0");
  });

  $(".next-btn").click(function () {
    $(".shedule-inner-wrap").toggleClass("active");
  });

  if ($(window).width() <= 1023) {
    $(document).on("click", ".register-now", function (e) {
      $(".left-enq-form").css("width", "40.0rem");
      e.stopPropagation();
    });

    $(".close-enq").click(function () {
      $(".left-enq-form").css("width", "0");
    });
  }

});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs : {
    type: "modern"
  }
});
