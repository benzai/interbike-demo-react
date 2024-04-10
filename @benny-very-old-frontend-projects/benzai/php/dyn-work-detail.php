<?php

/* Work project details */

include("connection.php");

// Query data from database
$query = "SELECT * FROM benzai_website_work WHERE id_string='{$_GET['id']}'";
$result = mysql_query($query);

$data_id_string 				= mysql_result($result, 0, "id_string");
$data_client					= mysql_result($result, 0, "client");
$data_project_title_detail 		= mysql_result($result, 0, "project_title_detail");
$data_role 						= mysql_result($result, 0, "role");
$data_description_detail 		= mysql_result($result, 0, "description_detail");
$data_credits 					= mysql_result($result, 0, "credits");
$data_website_url 				= mysql_result($result, 0, "website_url");
$data_num_screens 				= mysql_result($result, 0, "num_screens");

//
$projectTitleStr 				= utf8_encode($data_project_title_detail);
$clientStr 						= utf8_encode($data_client);

// Split credits into array for the li
$creditsStr = $data_credits;
$creditsArr = explode("#", $creditsStr);

// Echo out project

	// Echo out project info
	echo 
		"<div id='projectBlockGRP'><div id='projectTitleMotherGRP'>
			<div id='projectTitleGRP'>
				<h2>{$projectTitleStr}</h2>
				<p id='projectInfo_role'>Client: {$clientStr} / Role: {$data_role}</p>
			</div>
			
			<div id='buttonAllProjects' class='roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'>
				<a href='work.php'>All projects</a>
			</div>
		</div>
		
		<div id='projectInfo_separator'></div>
		
		<p id='projectInfo_description'>{$data_description_detail}</p>";
	
	// Echo out screenshots
	echo "<ul id='projectScreenshotsUL'>";
		
	$screensCount = $data_num_screens;
	for ($i=0; $i<$screensCount; $i++) {
		$screenshotNum = $i + 1;
		$screenshotFilenameStr = "project_screenshot{$screenshotNum}.jpg";
		echo "<li><img class='projectScreenshots_image' src='content/projects/{$data_id_string}/{$screenshotFilenameStr}' /></li>";
	}
	
	// Close screenshots ul and add a separator		
	echo "</ul><div id='projectScreenshots_separator'></div>";
		
	// Echo out credits
	echo "<div id='projectCreditsGRP'><p id='projectCredits_label'>Credits:</p><ul>";
			
	$creditsCount = count($creditsArr);
	for ($j=0; $j<$creditsCount; $j++) {
		echo "<li>{$creditsArr[$j]}</li>";
	}
	
	// Close projectCreditsGRP ul, close projectCreditsGRP div, close projectBlockGRP div
	echo "</ul></div></div>";

?>