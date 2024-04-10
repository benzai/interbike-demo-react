<?php

/* Contact form */

include("connection.php");

/* Post data */
$name 					= $_POST["name"];
$email 					= $_POST["email"];			
$message 				= $_POST["message"];
$sIP					= $_SERVER["REMOTE_ADDR"];

/* Email */
$sEmailRecipient  	= "hello@benzai.nl";
$sSubject 			= "BENZAI email from {$name}";

$sMessage 	= "Name: {$name} | Email: {$email}\r\n\r\n";
$sMessage 	.= "--------------------\r\n\r\n";
$sMessage 	.= "{$message}\r\n\r\n";
$sMessage 	.= "--------------------\r\n\r\n";

$sHeaders   = "From: {$name} <{$email}>\n";

$oMailSend = mail($sEmailRecipient, $sSubject, $sMessage, $sHeaders);

/* Add to database */
$result = "INSERT INTO benzai_website_emails (email_id, email_date, sender_name, sender_email, sender_message, sender_ip) VALUES (NULL, NOW(), '$name', '$email', '$message', '$sIP')";
mysql_query($result);

?>