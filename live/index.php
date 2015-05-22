<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title> Microsoft Login </title>

		<script src="http://js.live.net/v5.0/wl.js"></script>
		<script src="functions_for_login_microsoft.js"></script>

		<script>
			var client_id = "000000004C15091D" ;
			var redirect_uri = "http://tmdt2014.url.ph/assignment/microsoft/index.php" ;
			var scope = ["wl.signin", "wl.basic"] ;
			InitLiveSDKJavaScriptAPI(client_id, redirect_uri, scope) ;
		</script>
	</head>
	<body>
		<div style="text-align:center">
			<h1> Login with Microsoft </h1>
			<p>
				<input id="LogInButton" type="button" value="Login with Microsoft" onclick="Login(redirect_uri, scope);" />
				<input id="LogOutButton" type="button" value="Logout Microsoft" onclick="Logout();" />
			</p>
		</div>
	</body>
</html>
