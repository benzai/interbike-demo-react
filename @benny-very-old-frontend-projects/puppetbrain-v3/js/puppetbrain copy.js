$(document).ready(function() {

	var animSpeed 		= 700;
	var navbarHeight 	= 80 - 1;

	/* Nav bar */

	function initNavBar() {
		$('.navbar li a').click(function(e) {
			var a 			= $(this).parent();
			var b 			= $(this).closest('.nav');
			a.addClass('active-temp');
			b.addClass('scrolling');
			
			e.preventDefault();

			var anchor 		= this.hash;
			var scrollToPos = $(anchor).offset().top - navbarHeight;

			var isAnim = true;

			$('html, body').animate({scrollTop: scrollToPos}, animSpeed, function() {
				// On animation complete

				if (isAnim) {
					console.log("done");
					//b.removeClass('scrolling');
					//a.removeClass('active-temp');
					isAnim = false;
				}
			});
		});

		//window.location.hash = 'something';
	}

	initNavBar();
});