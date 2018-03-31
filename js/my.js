<<<<<<< HEAD
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

});


=======
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
>>>>>>> master
