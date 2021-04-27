const dropIcon = $('#drop');
const head = $('#head');
const logo = $('content logo a img');
const scrollNav = $('#scroll-nav');
const beiskolazas = $('.Beiskolazas');
const bars = $('#bars');

bars.click(()=>{
	dropIcon.toggleClass('dropped');
	head.toggleClass('active');
});

dropIcon.click(()=>{
	dropIcon.toggleClass('dropped');
	head.toggleClass('active');
});

$(window).scroll(()=>{
	var $height = $(window).scrollTop();
	beiskolazas.removeClass('active');
	dropIcon.removeClass('dropped');
  if($height > 90 ) {
		dropIcon.addClass('dropped');
		scrollNav.addClass('active');
	}
	if($height < 90)
		scrollNav.removeClass('active');
	if($height > 570)
		beiskolazas.addClass('active');
	
});


$(window).scroll(function() {
	var $height = $(window).scrollTop();
	$('#middle').removeClass('active');
  if($height > 950) {
		$('#middle').addClass('active');
	}
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
	$('#leftside').removeClass('active');

  if($height >= 1200) {
		$('#leftside').addClass('active');
	}
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
	$('#anchor-to-top').removeClass('active');
  if($height > 90) {
		$('#anchor-to-top').addClass('active');
	}
});


$(window).scroll(function() {
	var $height = $(window).scrollTop();
	$('#rightside').removeClass('active');

  if($height > 120) {
		$('#rightside').addClass('active');
  }
});

if(window.innerWidth < 1400)
{
	logo.css('transform','scale',0.1);
}