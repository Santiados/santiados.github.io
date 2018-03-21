// Author: Santiago

// Animations functions

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



// Listeners

var linksCards = $('ul.navbar-nav li a');

linksCards.click(function(event) {
	var element = '#' + $(event.target).attr('targetid');
	$(this).parent().siblings('').children('').removeClass('selected')
	$(this).addClass('selected');
	var boCo = $(element).attr('bgcolor');
	$('body').css('background', boCo);
	show(element);
	hideAll(element);
	$('#skills .box-progress').each(function(index, el) {
		var w = ($(element).hasClass('cv'))? $(el).attr('percent') : 0 ;
		var vel = (w==0)?500: 1500;  
		$(el).children('').animate({width:w}, vel);
	});

});


var linksProjects = $('.project > div');
var projects = [
	'img/github.png',
	'img/linkProject.png'
];
linksProjects.hover(function() {
	$(this).find('.options').children('').each(function(index, el) {
		$(el).append('<img src="' + projects[index] + '"/>');
	});
}, function() {
	$(this).find('.options').children().each(function(index, el) {
		$(el).html('');
	});;
});
