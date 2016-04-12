$(document).ready(function () {

    // ===== Init Wow JS ====
    new WOW().init();


     // ===== Navigation var==== 
    var MQL = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.cd-header').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function () {
                var currentTop = $(window).scrollTop();
                //check if user is scrolling up
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
                        $('.cd-header').addClass('is-visible');
                    } else {
                        $('.cd-header').removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $('.cd-header').removeClass('is-visible');
                    if (currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
                }
                this.previousTop = currentTop;
            });
    }
    
     // ===== Toggle Navigation ==== 
    $('.cd-primary-nav-trigger').on('click', function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');

        //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.cd-primary-nav').hasClass('is-visible')) {
            $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').removeClass('overflow-hidden');
            });
        } else {
            $('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
                $('body').addClass('overflow-hidden');
            });
        }
    });
    $(".close").click(function () {
        $('.cd-menu-icon').toggleClass('is-clicked');
        $('.cd-header').toggleClass('menu-is-open');
        $('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            $('body').removeClass('overflow-hidden');
        });
    });

     // ===== Smooth Scrolling ==== 
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });


    // ===== Swipe ScrollMagic ==== 
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".event.event2",
        triggerHook: "onEnter",
        duration: "100%"
    }).setPin(".events-page .event.event1 .pinWrapper", {
        pushFollowers: false
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".event.event2",
        triggerHook: "onEnter",
        duration: "200%"
    }).setPin(".events-page .event.event2 .pinWrapper", {
        pushFollowers: false
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".event.event3",
        triggerHook: "onEnter",
        duration: "200%"
    }).setPin(".events-page .event.event3 .pinWrapper", {
        pushFollowers: false
    }).addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: ".event.event4",
        triggerHook: "onEnter",
        duration: "100%"
    }).setPin(".events-page .event.event4 .pinWrapper", {
        pushFollowers: false
    }).addTo(controller);


//     // ===== WOW JS ==== 
//    $('.header-main h1').addClass('wow fadeIn');
//    $('.header-main h3').addClass('wow fadeIn');
//    $('.header-main h2').addClass('wow fadeIn');
//    $('.button-primary').addClass('wow fadeIn');
//    $('.fa-angle-down').addClass('wow fadeInUp');


    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(500); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(500); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: -10 // Scroll to top of body
        }, 500);
    });


     // ===== Safari Checker ==== 
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
        $("#mobile-showcase").removeClass("hide-mobile");
        $("#website-showcase").addClass("delete");
    };

 // ===== Multi-Language ==== 
    $(".flag").click(function () {
        $(".cz").toggle();
        $(".en").toggle();
        $(".en-flag").toggle();
        $(".cz-flag").toggle();
    });


});