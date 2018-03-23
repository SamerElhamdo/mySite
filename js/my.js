var lastScrollTop = 0;
$( window ).scroll(function() {
	var Scroll = $(window).scrollTop(),
		calcblur =  Scroll/100,
		blur = "blur(" + calcblur + "px)";
	$(".heda_blur").css("filter",blur)

	if (Scroll > lastScrollTop) {
		$(".navbar").removeClass("scroll");

	}
	else {
		$(".navbar").addClass("scroll");
	}
	lastScrollTop = Scroll;
	if ($(window).scrollTop() > 150) {
		$(".scroll-hide").fadeOut();
		


	}
	else if ($(window).scrollTop() < 150) {
		$(".scroll-hide").fadeIn();
		
	}
	if (Scroll > 450) {
		
	}
  
  console.log($(window).scrollTop());
});
//start typed
var typed = new Typed('#typed', {
    strings: ["esign","evelopment"],
    typeSpeed: 120,
    backSpeed: 100,
    startDelay: 400,
    backDelay: 2500,
    smartBackspace: false,	
    fadeOut: true,
    showCursor: true,
    loop:true,
  });
// end typeŹ