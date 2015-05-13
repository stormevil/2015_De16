<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";
	$id=$_REQUEST['id'];
	$name=$_REQUEST['name'];
	$mail=$_REQUEST['email'];
	
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$sql="SELECT * FROM facebook_users";
$query=mysql_query($conn,$sql);
if(mysql_num_rows($query) == 0)
{
	$insert = "INSERT INTO facebook_users (facebook_id,name,email)
	VALUES ('".$id."','".$name."','".$mail."')";
	if (mysqli_query($conn, $insert)) {
    echo "New record created successfully";
	} else {
    echo "Error: " . $insert . "<br>" . mysqli_error($conn);
	}
}
else {
$row=mysql_fetch_array($query)
echo $row[name];
}
mysqli_close($conn);

?>
