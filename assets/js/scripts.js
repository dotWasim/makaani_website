/*
Author       : Zwebtheme.
Template Name: zApp - Responsive App Landing Page
Version      : 1.0
*/

(function ($) {
    'use strict';
    jQuery(document).on('ready', function () {
        
/*=========================================================================
                       PRELOADER JS
=========================================================================*/
        $(window).on('load', function () {
            var status = $('.status'); status.fadeOut();
            var preloader = $('.preloader'); preloader.delay(350).fadeOut('slow');
        });

/*=========================================================================
                       START MENU JS
=========================================================================*/
        var page_scroll = $('a.page-scroll');
        page_scroll.on('click', function (e) {
            var anchor = $(this);
            var html_body = $('html, body');
            html_body.stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });
        $(window).on('scroll', function () {
            var menu_top = $('.menu-top');
            if ($(this).scrollTop() > 100) {
                menu_top.addClass('menu-shrink');
            }
            else {
                menu_top.removeClass('menu-shrink');
            }
        });
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
/*=========================================================================
                     START SCREENSHOTS SLIDER JS
=========================================================================*/
        var sslider = $('.s-slider');
        sslider.owlCarousel({
            autoPlay: 10000, //Set AutoPlay to 4 seconds	 
            items: 4
            , itemsDesktop: [1199, 4]
            , itemsDesktopSmall: [979, 3]
            , itemsTablet: [768, 2]
            , itemsMobile: [479, 1]
            , pagination: true
        , });
/*=========================================================================
                    START VIDEO JS
=========================================================================*/
        function autoPlayYouTubeModal() {
            var body_s = $("body");
            var trigger = body_s.find('[data-toggle="modal"]');
            trigger.on("click", function () {
                var theModal = $(this).data("target")
                    , videoSRC = $('#video-modal iframe').attr('src')
                    , videoSRCauto = videoSRC + "?autoplay=1";
                $(theModal + ' iframe').attr('src', videoSRCauto);
                $(theModal + ' button.close').on("click", function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
                $('.modal').on("click", function () {
                    $(theModal + ' iframe').attr('src', videoSRC);
                });
            });
        }
        autoPlayYouTubeModal();
    });
/*=========================================================================
        ScreenShot Carousel
=========================================================================*/ 
    function getSlide() {
        var wW = $(window).width();
        //alert(wW);
        if (wW < 601) {
            return 1;
        }
        
        return 3;
    }
   
    var screen_carousel = $('.screen_carousel');
    var mySwiper = screen_carousel.swiper({
  
        mode:'horizontal',
        loop: true,
        speed: 1000,
        autoplay: 1000,
        effect: 'coverflow',
        slidesPerView: getSlide(),
        grabCursor: true,
        pagination: '.screen-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        keyboardControl: true,
        coverflow: {
            rotate: 0,
            stretch: 90,
            depth: 200,
            modifier: 1,
            slideShadows : true
        }
    });
/*=========================================================================
               Testimonials js
=========================================================================*/
    /**/
    var testimonialSlider = $(".testimonial-slider");
    testimonialSlider.owlCarousel({
        loop: true
        , items: 1
        , nav: false
        , dots: true
        , itemsDesktop: [1199, 1]
            , itemsDesktopSmall: [979, 1]
            , itemsTablet: [768, 1]
            , itemsMobile: [479, 1]
        , startPosition: 1
    });
/*=========================================================================
              START PARALLAX JS
=========================================================================*/
    (function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
        else {
            $(window).stellar({
                horizontalScrolling: false
                , responsive: true
            });
        }
    }());
    
    var p1 = $("#P1");
    if(p1.length>0){
      p1.YTPlayer();
    }
/*=========================================================================
           START WOW ANIMATION JS
=========================================================================*/
    new WOW().init();
    /*END WOW ANIMATION JS*/
})(jQuery);