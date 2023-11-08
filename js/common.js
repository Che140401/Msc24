  $( document ).ready(function() {
    $('.courses-box .left-box').slick({
      vertical: true,  
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false,
      dots:true
    });
    
    $('.box-wrappper-slider').slick({
      infinite:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      dots:false,
      autoplay:true
    });

    $(".prev").click(function(){
      $(".section-what-clients-say .slick-prev").trigger("click")
    })

    $(".next").click(function(){
      $(".section-what-clients-say .slick-next").trigger("click")
    })

  });