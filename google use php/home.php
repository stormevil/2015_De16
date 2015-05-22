<!doctype html>
<html>
<title>Home - Login with Google Plus</title>
<body >
<div style="margin:0px auto; width:800px;text-align:left;font-family:arial">


<h1>Home - Login with Google Plus</h1>
<?php
require 'db.php';
session_start();
if (!isset($_SESSION['gplusdata'])) {
    // Redirection to login page twitter or facebook
    header("location: index.php");
}
else
{
$me=$_SESSION['gplusdata'];
?>
<div>
<img src="<?php print $me['image']['url']; ?>" /><br/>
<b>Gplus Id</b> <?php print $me['id']; ?><br/>
<b>Gplus Url</b> <?php print $me['url']; ?><br/>
<b>Name:</b> <?php print $me['displayName']; ?><br/>
<b>Fisrt Name:</b> <?php print $me['name']['givenName']; ?><br/>
<b>Last Name:</b> <?php print $me['name']['familyName']; ?><br/>
<?php 
print "<a class='logout' href='index.php?logout'>Logout</a><br/> <br/> "; 
}
$sql = "INSERT INTO google2 (gplusID,gplusUrl,name)
VALUES ('".$me['id']."','".$me['url']."','".$me['displayName']."')";
if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
?>
</div>

</body>
</html>