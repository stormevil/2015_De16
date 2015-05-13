<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users_table";
	$name=$_REQUEST['name'];
	//$name="phuoc";
	//$lastname=$_REQUEST['lastname'];
	//$firstname=$_REQUEST['firstname'];
	//$mail=$_REQUEST['email'];
	//$birthday=$_REQUEST['birthday'];
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO fb_users (firstname)
VALUES ('".$name."')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
