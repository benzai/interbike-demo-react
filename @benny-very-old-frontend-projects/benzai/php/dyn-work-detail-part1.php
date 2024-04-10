<?php

/* Work project details */

include("connection.php");

// MAIN QUERY -------------------------------------------------------------------

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

// UTF8 encode
$projectTitleStr 				= utf8_encode($data_project_title_detail);
$descriptionStr 				= utf8_encode($data_description_detail);
$clientStr 						= utf8_encode($data_client);

// Split credits into array for the li
$creditsStr = $data_credits;
$creditsArr = explode("#", $creditsStr);

// NEXT PREV PROJECT QUERY -------------------------------------------------------------------

$queryAll		= "SELECT * FROM benzai_website_work WHERE is_active='y' ORDER BY show_order DESC";
$resultAll 		= mysql_query($queryAll);
$numProjects	= mysql_num_rows($resultAll);

for ($i=0; $i<$numProjects; $i++) {
	$dataAll_workID[$i] 	= mysql_result($resultAll, $i, "workID");
	$dataAll_id_string[$i] 	= mysql_result($resultAll, $i, "id_string");
	
	if ($_GET['id'] == $dataAll_id_string[$i]) {
		$currentID = $i;
	}
}

if ($currentID < ($numProjects - 1)) {
	$nextID = $currentID + 1;
} else {
	$nextID = 0;
}

if ($currentID > 0) {
	$prevID = $currentID - 1;
} else {
	$prevID = ($numProjects - 1);
}

$nextIDString = $dataAll_id_string[$nextID];
$prevIDString = $dataAll_id_string[$prevID];

// TITLE -------------------------------------------------------------------

$projectTitleStr = utf8_encode($data_project_title_detail);
echo "<title>BENZAI | Interface Design, Website Design, Mobile Design | Work - {$projectTitleStr}</title>";

?>