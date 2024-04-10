<?php

// Echo out project

	// Echo out project info
	echo 
		"<div id='projectBlockGRP'><div id='projectTitleMotherGRP'>
			<div id='projectTitleGRP'>
				<h2>{$projectTitleStr}</h2>
				<p id='projectInfo_role'>Client: {$clientStr} / Role: {$data_role}</p>
			</div>
			
			<div id='buttonNextProject' class='roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'>
				<a href='work-detail.php?id={$nextIDString}'>Next project</a>
			</div>
	
			<div id='buttonPrevProject' class='roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'>
				<a href='work-detail.php?id={$prevIDString}'>Previous project</a>
			</div>
		</div>
		
		<div id='projectInfo_separator'></div>
		
		<p id='projectInfo_description'>{$descriptionStr}</p>";
	
	// Echo out screenshots
	echo "<ul id='projectScreenshotsUL'>";
		
	$screensCount = $data_num_screens;
	for ($i=0; $i<$screensCount; $i++) {
		$screenshotNum = $i + 1;
		$screenshotFilenameStr = "project_screenshot{$screenshotNum}.jpg";
		echo "<li class='drop-shadow curvedSmall curvedSmall-hz-1'><img class='projectScreenshots_image' src='content/projects/{$data_id_string}/{$screenshotFilenameStr}' /></li>";
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
	echo "</ul></div><div id='buttonAllProjects' class='roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'><a href='work.php'>All projects</a></div></div>";

?>