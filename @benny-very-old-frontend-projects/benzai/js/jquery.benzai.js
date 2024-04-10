function bcScrollToTop() {
	$('#footer_buttonBackToTop a').click(function() {
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
}