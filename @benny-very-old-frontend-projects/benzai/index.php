<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head> 
	<?php include("inc/head-meta.html"); ?>
	
	<title>BENZAI | Interface Design, Website Design, Mobile Design | Freelance web/interface designer Benny Chew | Home</title>
	
	<link rel="stylesheet" href="css/default_reset.css" />
	<link rel="stylesheet" href="css/default_fonts.css" />
	<link rel="stylesheet" href="css/default_utils.css" />
	<link rel="stylesheet" href="css/default.css" />
	<link rel="stylesheet" href="css/home.css" />
	
	<!--[if IE 7]>
	<link rel="stylesheet" type="textcss" href="css/ie.css" />
	<![endif]-->
	
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.easing.js"></script>
	<script type="text/javascript" src="js/jquery.slides.min.js"></script>
	<script type="text/javascript" src="js/jquery.benzai.js"></script>
	<script type="text/javascript">
			
		$(document).ready(function() {
			/* Slides - Slideshow Plugin for jQuery - thanks to www.slidesjs.com */
			
			// init projects slider
  			$("#projectsSliderGRP").slides({
				container: '#projectsSliderUL',
				prev: '#projectsSlider_buttonArrowPrevProject',
				next: '#projectsSlider_buttonArrowNextProject',
				generatePagination: false,
				paginationClass: '#projectsSlider_paginationUL',
				fadeSpeed: 0,
				fadeEasing: "easeInOutQuart",
				slideSpeed: 850,
				slideEasing: "easeInOutQuart",
				play: 8500
  			});
  			
			// init our menu slider
  			$("#ourMenuWrapper").slides({
				container: '#ourMenuUL',
				prev: '#ourMenu_buttonArrowLessServices',
				next: '#ourMenu_buttonArrowMoreServices',
				generatePagination: false,
				paginationClass: '#ourMenu_paginationUL',
				fadeSpeed: 0,
				fadeEasing: "easeInOutQuart",
				slideSpeed: 850,
				slideEasing: "easeInOutQuart"
  			});
  			
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
					<li id="mainmenuHome"><a href="index.php" class="selected">Home</a></li>
					<li id="mainmenuAbout"><a href="about.php">About</a></li>
					<li id="mainmenuWork"><a href="work.php">Work</a></li>
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
					
			<!-- projects slider -->
			<div id="projectsSliderGRP">
				
				<h1>Fresh from the chef</h1>
								
				<div id="projectsSliderContentBG" class="drop-shadow curved curved-hz-1">
					<ul id="projectsSliderUL">
						<!-- START dynamic content -->
						<?php include("php/dyn-home-projects-slider.php"); ?>
						
					<!--
					</ul>
				</div>
				
				<div id="projectsSlider_paginationGRP">
					<p>more projects</p>
				
					<ul id="projectsSlider_paginationUL">
						[This is now dynamic.]
					</ul>
				</div>
				-->
				
				<!-- END dynamic content -->
				
				<div id="projectsSlider_separator"></div>
				
				<div id="projectsSlider_buttonArrowPrevProject">
					<a href="/old#">Previous project</a>
				</div>
				<div id="projectsSlider_buttonArrowNextProject">
					<a href="/old#">Next project</a>
				</div>
				
			</div>
			
			<!-- tagline + availability -->
			<div id="taglineGRP">
				<div id="taglineWrapper">
					<div id="tagline">
						<p>BENZAI specializes in designing delicious interfaces for the web, mobile and games.</p>
					</div>
					
					<div id="availability">
						<p>Available for new projects in July 2013.</p>
						
						<div id="availability_buttonPlanProject" class="roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
							<a href="contact/">Plan project</a>
						</div>
					</div>
				</div>
			</div>
						
		</div>
		
		<div class="hr"></div> <!-- separator -->
		
	</div>
	<!-- END HEADER BOTTOM -->
	
	<!-- MAIN CONTENT -->
	<div id="mainContent">
			
		<!-- our menu -->
		<div id="ourMenuGRP">
			<div id="ourMenuWrapper">
				<h2>Our menu</h2>
				<p>Find out how we can help you and what we love to do day in day out.</p>
				
				<div id="ourMenuContentBG" class="drop-shadow curved curved-hz-1">
					<ul id="ourMenuUL">
					
						<!-- page -->
						<li class="ourMenuPage">
							<!-- visual interface design -->
							<div class="ourMenuBlockItem" id="ourMenuBlock1">						
								<div class="ourMenu_icon" id="ourMenu_iconWebsiteDesign"></div>
								<h3 class="ourMenu_title" id="ourMenu_title1">Interface Design</h3>
								<ul>
									<li>Interaction Design</li>
									<li>Visual Interface Design</li>
									<li>User Experience</li>
									<li>Icon Design</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>
							
							<!-- website design -->
							<div class="ourMenuBlockItem" id="ourMenuBlock2">
								<div class="ourMenu_icon" id="ourMenu_iconInterfaceDesign"></div>
								<h3 class="ourMenu_title" id="ourMenu_title2">Website Design</h3>
								<ul>
									<li>Corporate Website Design</li>
									<li>Promotional Website Design</li>
									<li>Campaign Website Design</li>
									<li>Mobile Website Design</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>
							
							<!-- mobile app design -->
							<div class="ourMenuBlockItem" id="ourMenuBlock3">						
								<div class="ourMenu_icon" id="ourMenu_iconMobileAppDesign"></div>
								<h3 class="ourMenu_title" id="ourMenu_title3">Mobile Design</h3>
								<ul>
									<li>Interaction Design</li>
									<li>Visual Interface Design</li>
									<li>iPhone UI Design</li>
									<li>iPad UI Design</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>
						</li>
						
						<!-- page -->
						<li class="ourMenuPage">
							<!-- front-end -->
							<div class="ourMenuBlockItem" id="ourMenuBlock4">
								<div class="ourMenu_icon" id="ourMenu_iconFrontEnd"></div>
								<h3 class="ourMenu_title" id="ourMenu_title4">Front-end Production</h3>
								<ul>
									<li>Flash Design and Animation</li>
									<li>ActionScript 3.0</li>
									<li>HTML/CSS</li>
									<li>MySQL/PHP</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>
							
							<!-- 3D -->
							<div class="ourMenuBlockItem" id="ourMenuBlock5">						
								<div class="ourMenu_icon" id="ourMenu_icon3D"></div>
								<h3 class="ourMenu_title" id="ourMenu_title5">3D Content Creation</h3>
								<ul>
									<li>Character/Hard-surface Modeling</li>
									<li>Texturing and Shading</li>
									<li>Animation</li>
									<li>Maya, Softimage, modo</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>
							
							<!-- graphics and illustration -->
							<div class="ourMenuBlockItem" id="ourMenuBlock6">						
								<div class="ourMenu_icon" id="ourMenu_iconGraphicsIllustration"></div>
								<h3 class="ourMenu_title" id="ourMenu_title6">Graphics and Illustration</h3>
								<ul>
									<li>Character Design</li>
									<li>Illustration</li>
									<li>Icon Design</li>
									<li>Animation</li>
								</ul>
								
								<div class="ourMenu_buttonMoreInfo roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
									<a href="about/">More info</a>
								</div>
							</div>	
						</li>
						
					</ul>
				</div>
				
				<div id="ourMenu_paginationGRP">				
					<ul id="ourMenu_paginationUL">
						<li class="ourMenu_paginationItem"><a href="/old#0">1</a></li>
						<li class="ourMenu_paginationItem"><a href="/old#1">2</a></li>
					</ul>
				</div>
				
				<div id="ourMenu_buttonArrowLessServices">
					<a href="/old#">Less services</a>
				</div>
				<div id="ourMenu_buttonArrowMoreServices">
					<a href="/old#">More services</a>
				</div>
				
				<div id="ourMenu_separator"></div>
				
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