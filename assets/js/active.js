(function($){
	"use strict"
	jQuery(document).ready(function($){
		// custom-navbar-activation
		$(".custom-navbar").on('click', function(){
			$(".main-menu ul").slideToggle(500);
		});
		$(window).on('resize', function(){
			if ($(window).width() > 767 ) {
				$(".main-menu ul").removeAttr("style");
			}
		});
		// search-btn-activation
        $('.main-menu .search-active').on('click', function(){
            $(".main-menu .search-here").css({
                "visibility": "visible",
                "opacity": "1"
            });
        });
		$('.main-menu .close-search-btn').on('click', function(){
            $(".main-menu .search-here").css({
                "visibility": "hidden",
                "opacity": "0"
            });
        });
		// main-slider-activation
		$('.slider-area').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:5000,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			dots:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		// reviews-slider-activation
		$('.quote-area').owlCarousel({
			loop:true,
			margin:0,
			autoplay:true,
			autoplayTimeout:5000,
			nav:false,
			dots:false,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		// gallery-tab-activation
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
			columnWidth: 1
			}
		});
		$('.gallery-tab li').on( 'click', function() {
		  var filterValue = $(this).attr('data-filter');
		  $grid.isotope({ filter: filterValue });
		});
		$('.gallery-tab li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
		// gallery-popup-activation
		$('.hover-state a').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			}
		});
	});
	jQuery(window).on('load', function(){
		// masala-preloader-activation
		$(".masala-preloader").fadeOut(500);
		// animation-activation
		new WOW().init();
	});
})(jQuery);