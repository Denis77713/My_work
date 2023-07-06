$(document).ready(function () {
	var slidesCount = $('.slider>.slider__item').length + "";
	if (slidesCount.length == 1) {
		slidesCount = "0" + slidesCount;
	}
	$('.slider-slide-count').html(slidesCount);
	
	$('.slider').slick({
		arrows: true,
		dots: true,
		prevArrow: ".button-slider-prev",
		nextArrow: ".button-slider-next",
		slidesToShow: 3,
		autoplay: false,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
	$('.slider').on('afterChange', function (event, slick, currentSlide) {
		var s = (currentSlide + 1) + "";
		if (s.length == 1) {
			s = "0" + s;
		}
		$('.slider-slide-current').html(s);
	});
	
});
JavaScript
//отключаем зум колёсиком мышки
myMap.behaviors.disable('scrollZoom');

//на мобильных устройствах... (проверяем по userAgent браузера)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //... отключаем перетаскивание карты
    myMap.behaviors.disable('drag');
}
1
2
3
4
5
6
7
8
//отключаем зум колёсиком мышки
myMap.behaviors.disable('scrollZoom');
 
//на мобильных устройствах... (проверяем по userAgent браузера)
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //... отключаем перетаскивание карты
    myMap.behaviors.disable('drag');
}

