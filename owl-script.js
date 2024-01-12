$(".owl-carousel1").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
	},
});

$(".owl-carousel2").owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoPlayTimeout: 2500,
	autoplaySpeed: 10000,
	autoplayHoverPause: true,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		768: {
			items: 2,
		},
		1200: {
			items: 3,
		},
		1400: {
			items: 4,
		},
	},
});
