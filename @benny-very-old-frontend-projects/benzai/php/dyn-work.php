<?php

/* Work projects list */

include("connection.php");

$query					= "SELECT * FROM benzai_website_work WHERE is_active='y' ORDER BY show_order DESC";
$result 				= mysql_query($query);
$numProjects			= mysql_num_rows($result);

for ($i=0; $i<$numProjects; $i++) {
	$data_workID[$i] 					= mysql_result($result, $i, "workID");
	$data_id_string[$i] 				= mysql_result($result, $i, "id_string");
	$data_project_title_overview[$i] 	= mysql_result($result, $i, "project_title_overview");
	$data_role[$i] 						= mysql_result($result, $i, "role");
	$data_description_overview[$i] 		= mysql_result($result, $i, "description_overview");
}

for ($i=0; $i<$numProjects; $i++) {
	$projectTitleStr = utf8_encode($data_project_title_overview[$i]);
	$descriptionStr = utf8_encode($data_description_overview[$i]);
	
	echo "
	<li class='projectBlockItem drop-shadow curved curved-hz-1'>
		<div class='projectsList_imageGRP'>
			<a href='work-detail.php?id={$data_id_string[$i]}'>
				<img class='projectsList_image' src='content/projects/{$data_id_string[$i]}/project_thumbnail.png' alt='' />
			</a>
		</div>
	
		<div class='projectsList_infoGRP'>
			<h3 class='projectsList_title'><a href='work-detail.php?id={$data_id_string[$i]}'>{$projectTitleStr}</a></h3>
			<p class='projectsList_role'>{$data_role[$i]}</p>
		
			<p class='projectsList_description'>{$descriptionStr}</p>
		
			<div class='projectsList_buttonViewProject roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'>
				<a href='work-detail.php?id={$data_id_string[$i]}'>
			</div>
		</div>
	</li>
	";
}

?>