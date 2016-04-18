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

	// // ===== Multi-Language ==== 
	//    $(".flag").click(function () {
	//        $(".cz").toggle();
	//        $(".en").toggle();
	//        $(".en-flag").toggle();
	//        $(".cz-flag").toggle();
	//    });


	// // ===== Particles-js ====   

	/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */



	/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

	/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
	/*
	particlesJS.load('particles-js', 'particles.json', function() {
	  console.log('particles.js loaded - callback');
	});
	*/

	/* Otherwise just put the config content (json): */

	particlesJS('particles-js', {
		"particles": {
			"number": {
				"value": 60,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#ffffff"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": false,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 150,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
});