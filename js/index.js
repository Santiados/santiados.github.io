function hideAll(element){
	$(element).siblings('').animate({
		opacity: '0'},
		500, function() {
		$(element).siblings('').css('display', 'none');
	});
	$(element).siblings('').css({
		animationName: 'hide',
		animationDuration: '500ms'
	});
	$(element).siblings('').children('').css({
		animationName: 'none'
	});
}

function show(element){
	$(element).children('').css({
		animationName: 'parallax'
	});
	
	$(element).css({
		opacity: '1',
		animationDuration: '1s',
		animationName: 'show',
		display:'block'
	});
}





var links = $('ul.navbar-nav li a');
console.log(links)

links.click(function(event) {
	$(this).parent().siblings('').children('').removeClass('selected')
	$(this).addClass('selected');
	var element = '#' + $(event.target).attr('targetid');
	show(element);
	hideAll(element);
	if($(element).hasClass('cv')){
		var ancho = $('#skills .box-progress').each(function(index, el) {
			var ancho = $(el).attr('percent');
			$(el).children('').animate({width:ancho}, 1500);
		});
	}else {
		var ancho = $('#skills .box-progress').each(function(index, el) {
			var ancho = $(el).attr('percent');
			$(el).children('').animate({width:0}, 500);
		});
	}
});


