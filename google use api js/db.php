<?php
$servername = "mysql.hostinger.vn";
$username = "u996745878_quan";
$password = "quantr247";
$dbname = "u996745878_login";
	$name=$_REQUEST['name'];
	$mail=$_REQUEST['email'];
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO google (Name,Email)
VALUES ('".$name."','".$mail."')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
<?php
	header('Location: profile.php');
?>