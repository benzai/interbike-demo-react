<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head> 
	<?php include("inc/head-meta.html"); ?>
	
	<title>BENZAI | Interface Design, Website Design, Mobile Design | Contact</title>
	
	<link rel="stylesheet" href="css/default_reset.css" />
	<link rel="stylesheet" href="css/default_fonts.css" />
	<link rel="stylesheet" href="css/default_utils.css" />
	<link rel="stylesheet" href="css/default.css" />
	<link rel="stylesheet" href="css/contact.css" />
	
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
			
			/* Email form jQuery - thanks to http://net.tutsplus.com/tutorials/javascript-ajax/submit-a-form-without-page-refresh-using-jquery/ */
			
			// init email form
  			$(".error").hide();  
  			$("#buttonSubmit").click(function() {
  			
    			// form validation
				$(".error").hide();  
				var name = $("input#inputName").val();  
				if (name == "") {  
					$("div#errorName").show();  
					$("input#inputName").focus();  
					return false;  
				} 
    			
        		var email = $("input#inputEmail").val();  
        		if (email == "") {  
      				$("div#errorEmail").show();  
					$("input#inputEmail").focus();  
					return false;  
				}
				
				var message = $("textarea#textareaMessage").val();  
				if (message == "") {  
					$("div#errorMessage").show();  
					$("textarea#textareaMessage").focus();  
					return false;  
				}
				
				// PHP
				var dataString = 'name='+ name + '&email=' + email + '&message=' + message;  
				$.ajax({  
					type: "POST",  
					url: "/php/dyn-contact.php",  
					data: dataString,  
					success: function() {  
						$("#emailFormGRP").html("<div id='emailForm_feedback'></div>")
						.hide()
						.fadeIn(0, function() {
							$("#emailForm_feedback").append("<p>Domo arigato for getting in touch with us. We try to get back to you within 2 business days. Have a nice day!</p>");
						});
					}  
				});  
				return false;
				
  			}); 
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
					<li id="mainmenuWork"><a href="work.php">Work</a></li>
					<li id="mainmenuContact"><a href="contact.php" class="selected">Contact</a></li>
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
			<div id="header_illuCat">
			
			</div>
			
			<h1 id="header_headingDeco"></h1>
		</div>
	</div>
	<!-- END HEADER BOTTOM -->
	
	<!-- MAIN CONTENT -->
	<div id="mainContent">
	
		<!-- contact -->
		<div id="contactGRP">
			<div id="contactWrapper">
			
				<div id="contact_col1">
					<h2>Plan project</h2>
					<p>We are available for new projects starting May 2011.</p>
					
					<div id="planProject_buttonPlanProject" class="roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
						<a>Plan project</a>
						<!--<a href="/old#">Plan project</a>-->
					</div>
				</div>
				
				<div id="contact_col2">
					<h2>Say hello</h2>
					<div id="contact_col2_separator"></div>
					
					<p>Do you have a project in mind where you could use our assistance? Just get in touch.</p>
					
					<div id="emailFormGRP" class="drop-shadow curved curved-hz-1">
						
						<!-- form -->
						<form id="formEmail" name="form" action="#">
						
							<div class="inputGRP">
								<div class="formEmail_label" id="formEmail_labelA">Your name *</div>
								<div class="error" id="errorName">This field is required.</div>
								<input id="inputName" type="text" name="inputName" />
							</div>
							
							<div class="inputGRP">
								<div class="formEmail_label" id="formEmail_labelB">Your email *</div>
								<div class="error" id="errorEmail">This field is required.</div>
								<input id="inputEmail" type="text" name="inputEmail" />
							</div>
							
							<div class="textareaGRP">
								<div class="formEmail_label" id="formEmail_labelC">Your message *</div>
								<div class="error" id="errorMessage">This field is required.</div>
								<textarea id="textareaMessage" name="textareaMessage"></textarea>
							</div>
							
							<div id="buttonSubmitGRP" class="roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1">
								<button type="submit" id="buttonSubmit">Send</button>
							</div>
							
						</form>
					
					</div>
				</div>
				
				<div id="contact_col3">
					<h2>Contact details</h2>
					<div id="contact_col3_separator"></div>
					
					<p id="contactDetails_intro">Feel free to contact us for a quote or if you have any questions.</p>
					
					<div id="contactDetails_separator"></div>
					
					<p class="contactDetails_label" id="contactDetails_labelPhone">Phone:</p>
					<p class="contactDetails_info">+31 (0) 6 14 426 190</p>
					
					<p class="contactDetails_label" id="contactDetails_labelEmail">Email:</p>
					<p class="contactDetails_info">hello[at]benzai.nl</p>
					
					<p class="contactDetails_label" id="contactDetails_labelLocation">Location:</p>
					<p class="contactDetails_info">Rotterdam, The Netherlands</p>
					
					<p class="contactDetails_label" id="contactDetails_labelChamber">Chamber of Commerce:</p>
					<p class="contactDetails_info">KvK Rotterdam 24399248</p>
					
					<p class="contactDetails_label" id="contactDetails_labelUnderstand">We understand:</p>
					<p class="contactDetails_info">Dutch and English</p>
				</div>
				
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