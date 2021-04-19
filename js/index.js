const dropIcon = $('#drop');
const head = $('#head');

$(window).scroll(function() {
	var $height = $(window).scrollTop();
	head.removeClass('active');
  if($height > 90 && !(dropIcon.hasClass('dropped') || head.hasClass('active'))) {
		head.addClass('active');
		dropIcon.addClass('active');
	}
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

dropIcon.click(()=>{
	dropIcon.toggleClass('dropped');
	head.toggleClass('active');
});
