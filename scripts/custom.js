$(window).scroll(function(){
    var fromTopPx = 200;
    var scrolledFromtop = $(window).scrollTop();
    var navbar = $('.navbar');
    if(scrolledFromtop > fromTopPx){
        navbar.addClass('scrolled');
    }else{
        navbar.removeClass('scrolled');
    }
});

$(document).ready(function(){
	$('.hours-slider').unslider({'nav': true, 'arrows': false, 'autoplay': true});
});