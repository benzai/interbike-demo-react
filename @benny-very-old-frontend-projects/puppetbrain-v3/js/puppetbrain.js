$(document).ready(function() {
	var sections		= new Array("#welcome", "#work", "#about", "#contact");
	var ANIM_SPEED 		= 700;
	var NAV_HEIGHT 		= 80 - 1;

	var currentSection;
	var currentScrollPos;
	var newScrollPos;
	var isAllowClick = true;

	/* Init */

	function initPuppetbrain() {
		currentSection = 0;

		initNavBar();
		watchScrollSpy();
	}

	initPuppetbrain();

	/* Nav bar */

	function initNavBar() {
		$(".navbar .nav > li > a").click(function(e) {
			var anchor = this.hash;

			currentScrollPos 	= $(document).scrollTop();
			newScrollPos 		= $(anchor).offset().top - NAV_HEIGHT;

			if (getCurrentSection(anchor) != currentSection || currentScrollPos > newScrollPos) {
				e.preventDefault();
				
				if (isAllowClick) {
					isAllowClick = false;

					currentSection = getCurrentSection(anchor);
					
					$(".navbar").addClass("scrolling");
					
					$.scrollTo(newScrollPos, ANIM_SPEED, function() {
						$(".navbar").removeClass("scrolling");
						isAllowClick = true;
					});
				}

				console.log("Current section " + currentSection);
			}
			else {
				e.preventDefault();
			}
		});
	}

	function watchScrollSpy() {
		$(".navbar .nav > li").on("activate", function(e) {
	    	var anchor = "#" + e.currentTarget.className.replace(" active", "");
	    	currentSection = getCurrentSection(anchor);
	    	console.log("Current section " + currentSection);
		});
	}

	function getCurrentSection(anchor) {
		for (var i=0; i<sections.length; i++) {
			if (sections[i] === anchor) {
				return i;
			}
		}
	}
});