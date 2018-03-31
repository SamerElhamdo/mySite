
$( document ).ready(function() {



// statrt secrol------------------------------------------------------------//



   var lastScrollTop = 0;
	$( window ).scroll(function() {
		var Scroll = $(window).scrollTop(),
			calcblur =  Scroll/100,
			blur = "blur(" + calcblur + "px)";
		$(".heda_blur").css("filter",blur);
		if (Scroll > lastScrollTop) {
			$(".navbar").removeClass("scroll");
		}
		else {
			if (Scroll > 1) {
				$(".navbar").addClass("scroll");
			}
			else {
				$(".navbar").removeClass("scroll");
			}
			
		}
		lastScrollTop = Scroll;
		if ($(window).scrollTop() > 150) {
			$(".scroll-hide").fadeOut();
		}
		else if ($(window).scrollTop() < 150) {
			$(".scroll-hide").fadeIn();	
		}

		if ($(window).scrollTop() > 1000) {
			$(".skilse-cont").animate({ 'marginTop': '0', opacity: 1 }, 1000);
			$('.pie_progress').asPieProgress('start');
		}
		console.log($(window).scrollTop());
	});



// end secrol--------------------------------------------------------------------//







// start typed--------------------------------------------------------------------//




	var typed = new Typed('#typed', {
	    strings: ["esign","evelopment"],
	    typeSpeed: 120,
	    backSpeed: 100,
	    startDelay: 400,
	    backDelay: 2500,
	    smartBackspace: false,	
	    fadeOut: false,
	    showCursor: true,
	    loop:true,
	  });





// start typed--------------------------------------------------------------------//


// start navbar menu ------------------------------------------------------------//

	$(".hedar ul li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var he = $(".hedar").height();
		$("html").animate({scrollTop:he}, '1000');
	});





// start pie progress--------------------------------------------------------------------//



	
	$('.pie_progress').asPieProgress({
	namespace: 'pie_progress' ,
	speed: 50,
	trackcolor: '#000',
	//easing: 'linear'
	});
	// Example with grater loading time - loads longer
	$('.pie_progress--slow').asPieProgress({
	namespace: 'pie_progress',
	goal: 1000,
	min: 0,
	max: 1000,
	speed: 200,
	easing: 'linear'
	});
	// Example with grater loading time - loads longer
	$('.pie_progress--countdown').asPieProgress({
	namespace: 'pie_progress',
	easing: 'linear',
	first: 120,
	max: 120,
	goal: 0,
	speed: 1200, // 120 s * 1000 ms per s / 100
	numberCallback: function(n) {
	  var minutes = Math.floor(this.now / 60);
	  var seconds = this.now % 60;
	  if (seconds < 10) {
	    seconds = '0' + seconds;
	  }
	  return minutes + ': ' + seconds;
	}
	});

	



});
