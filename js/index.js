$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 90) {
		$('#head').addClass('active');
	} else {
		$('#head').removeClass('active');
	}
});


$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 950) {
		$('#middle').addClass('active');
	} else {
		$('#middle').removeClass('active');
	}
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height >= 1200) {
		$('#leftside').addClass('active');
	} else {
		$('#leftside').removeClass('active');
	}
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 120) {
		$('#rightside').addClass('active');
	} else {
		$('#rightside').removeClass('active');
	}
});
 


 