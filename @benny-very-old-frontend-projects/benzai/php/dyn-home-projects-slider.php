<?php

/* Home projects slider */

include("connection.php");

// First query benzai_website_home_projects_slider (database 1) for a list of 'featured projects', higher show_order number shows first
// The idea is to 'borrow' the data of the main projects database
$queryBefore				= "SELECT * FROM benzai_website_home_projects_slider ORDER BY show_order DESC";
$resultBefore 				= mysql_query($queryBefore);
$numProjects				= mysql_num_rows($resultBefore);

for ($i=0; $i<$numProjects; $i++) {
	$data_workRef[$i] 		= mysql_result($resultBefore, $i, "workRef");
	
	// Second query benzai_website_work (database 2) to match workRef of database 1 with workID of database 2
	$query					= "SELECT * FROM benzai_website_work WHERE workID='{$data_workRef[$i]}'";
	$result 				= mysql_query($query);
	
	$data_workID[$i] 					= mysql_result($result, 0, "workID");
	$data_id_string[$i] 				= mysql_result($result, 0, "id_string");
	$data_project_title_overview[$i] 	= mysql_result($result, 0, "project_title_overview");
	$data_role[$i] 						= mysql_result($result, 0, "role");
	$data_description_overview[$i] 		= mysql_result($result, 0, "description_overview");
	
	// Echo project li
	echo "
	<li class='projectBlockItem'>
		<div class='projectsSlider_imageGRP'>
			<a href='work-detail.php?id={$data_id_string[$i]}'>
				<img class='projectsSlider_image' src='content/projects/{$data_id_string[$i]}/project_thumbnail.png' alt='' />
			</a>
		</div>
	
		<div class='projectsSlider_infoGRP'>
			<h3 class='projectsSlider_title'><a href='work-detail.php?id={$data_id_string[$i]}'>{$data_project_title_overview[$i]}</a></h3>
			<p class='projectsSlider_role'>{$data_role[$i]}</p>
		
			<p class='projectsSlider_description'>{$data_description_overview[$i]}</p>
		
			<div class='projectsSlider_buttonViewProject roundedButton drop-shadowSmall curvedSmall curvedSmall-hz-1'>
				<a href='work-detail.php?id={$data_id_string[$i]}'>View project</a>
			</div>
		</div>
	</li>
	";
}

// Close ul and div of projectsSliderUL
echo "</ul></div>";
	
echo "			
	<div id='projectsSlider_paginationGRP'>
	<p>more projects</p>
			
	<ul id='projectsSlider_paginationUL'>";
	
	// Echo pagination li
	for ($i=0; $i<$numProjects; $i++) {
		$pageInt 	= "#" . $i;
		$page		= $i + 1;
		echo "<li class='projectsSlider_paginationItem'><a href='/old{$pageInt}'>{$page}</a></li>";			
	}

// Close ul and div of projectsSlider_paginationGRP
echo "</ul></div>";
		
?>