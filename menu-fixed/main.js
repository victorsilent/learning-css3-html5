
$(document).ready(function(){

	var top1 = $('.top').offset().top;//Pega o valor da altura da div

	$(".top").wrap('<div class="placeholder"></div>');//Encapsula a div dentro de outra div de wrap
	$('.placeholder').height($('.top').outerHeight());//Atribui o mesmo height a essa nova div

	$(window).scroll(function(){//Ao detectar o scroll
		var scrollPos = $(window).scrollTop();//A variavel scroll recebe a posição atual do scroll
		if(scrollPos >= top1){//Se a posição for maior/igual a da div
		  $(".top").addClass('fixed');//Adiciona a classe fixed
		}else{//Caso contrário ele remove
		   $(".top").removeClass('fixed');
		}
	});
});