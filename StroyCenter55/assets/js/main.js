$(document).ready(function(){
	$('.slider3').slick({
		arrows:true,
		dots:false,
		slidesToShow:4,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1400,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



