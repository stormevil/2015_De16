<?php
define('DB_SERVER', 'mysql.hostinger.vn');
define('DB_USERNAME', 'u996745878_quan');
define('DB_PASSWORD', 'quantr247');
define('DB_DATABASE', 'u996745878_login');
$connection = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD) or die(mysql_error());
$database = mysql_select_db(DB_DATABASE) or die(mysql_error());
?>