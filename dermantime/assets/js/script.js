$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
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
$(document).ready(function(){
	$('.slider2').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1080,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 666,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
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
				breakpoint: 1200,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 881,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 589,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
let ops = document.querySelector('.ops')
let opis = document.querySelector('.opis')
let sostav = document.querySelector('.sostav')

// sostav.addEventListener('click',()=>{
// 	ops.style.display = "none"
// })

// opis.addEventListener('click',()=>{
// 	ops.style.display = "inline"
// })
// console.log(ops.style)


