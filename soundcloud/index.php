<?php

require "Soundcloud.php";

$soundcloud = new Services_Soundcloud('e68b69ad357c7479eb87cb26c5590d54','7ef68feeac5d565f176d1cae0779d566','http://saocungduoc.esy.es/soundcloud/');

$soundcloud->setDevelopment(false);
$authURL = $soundcloud->getAuthorizeUrl();

echo '<pre>';
echo "<a href='$authURL'>Connect to SoundCloud</a>";

// Attempt to get token from Session First
// Set the token otherwise..
try {
	if(!isset($_SESSION['token'])){
		$accessToken = $soundcloud->accessToken($_GET['code']);
		$_SESSION['token'] =   $accessToken['access_token'];
	}
	else{
		$soundcloud->setAccessToken($_SESSION['token']);
	}
} catch (Soundcloud_Invalid_Http_Response_Code_Exception $e) {
    exit($e->getMessage());
}

try {
    $me = json_decode($soundcloud->get('me'), true);
	print_r($me);
} catch (Services_Soundcloud_Invalid_Http_Response_Code_Exception $e) {
    exit($e->getMessage());
}
echo "<a href='logout.php'>Logout</a>";
?>