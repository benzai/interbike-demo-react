<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head> 
	<?php include("inc/head-meta.html"); ?>
	<?php include("php/dyn-work-detail-part1.php"); ?>
		
	<!--<title>BENZAI - Work</title>-->
	
	<link rel="stylesheet" href="css/default_reset.css" />
	<link rel="stylesheet" href="css/default_fonts.css" />
	<link rel="stylesheet" href="css/default_utils.css" />
	<link rel="stylesheet" href="css/default.css" />
	<link rel="stylesheet" href="css/work-detail.css" />
	
	<!--[if IE]>
	<link rel="stylesheet" type="text/css" href="css/ie.css" />
	<![endif]-->
	
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.easing.js"></script>
	<script type="text/javascript" src="js/jquery.slides.min.js"></script>
	<script type="text/javascript" src="js/jquery.benzai.js"></script>
	<script type="text/javascript">
		
		$(document).ready(function() {
			// init scroll to top
			bcScrollToTop();
		});
		
	</script>
</head>

<body>
	<!-- HEADER -->
	<div id="headerGRP">
		<div id="headerWrapper">
		
			<!-- logo -->	
			<div id="logoGRP">
				<div id="logo">
					<a href="">BENZAI</a>
				</div>
			</div>
			
			<!-- main menu -->
			<div id="mainmenuGRP">
				<ul id="mainmenu" class="drop-shadow curved curved-hz-1">
					<li id="mainmenuHome"><a href="index.php">Home</a></li>
					<li id="mainmenuAbout"><a href="about.php">About</a></li>
					<li id="mainmenuWork"><a href="work.php" class="selected">Work</a></li>
					<li id="mainmenuContact"><a href="contact.php">Contact</a></li>
				</ul>
			</div>
			
			<!-- credo -->
			<div id="credoGRP">
				<div id="credo">I eat sushi and design interfaces</div>
			</div>
			
		</div>
	</div>
	<!-- END HEADER -->
	
	<!-- HEADER BOTTOM -->
	<div id="headerBottomGRP">
		<div id="headerBottomWrapper">
		
			<h1 id="header_headingDeco">A selection of our work</h1>	
			
		</div>
	</div>
	<!-- END HEADER BOTTOM -->
	
	<!-- MAIN CONTENT -->
	<div id="mainContent">
	
		<!-- project -->
		<div id="projectGRP">
			<div id="projectWrapper">
			
				<!-- START dynamic content -->
				<?php include("php/dyn-work-detail-part2.php"); ?>
				<!-- END dynamic content -->
											
			</div>
		</div>
			
		<!-- footer push -->
		<div id="footerPush"></div>
		
	</div>
	<!-- END MAIN CONTENT -->
	
	<!-- FOOTER -->
	<?php include("inc/footer.php"); ?>
	
	<!-- Google Analytics -->
	<?php include("inc/google-analytics.php"); ?>

</body>
</html>