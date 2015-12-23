
$(document).ready(function(){
	var top1 = $('.top').offset().top;
	$(".top").wrap('<div class="placeholder"></div>');
	$('.placeholder').height($('.top').outerHeight());

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if(scrollPos >= top1){
		  $(".top").addClass('fixed');
		}else{
		   $(".top").removeClass('fixed');
		}
	});
});