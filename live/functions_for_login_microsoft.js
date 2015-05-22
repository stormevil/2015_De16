// Để sử dụng được các hàm bên dưới, ta phải thêm dòng dưới đây vào trang web
// <script src="http://js.live.net/v5.0/wl.js"></script>

// Phải gọi hàm này trước khi gọi các hàm Login(), Logout()
// Đối số scope: For a single scope, use this format: scope: "wl.signin"
//				 For multiple scopes, use this format: scope: ["wl.signin", "wl.basic"]
function InitLiveSDKJavaScriptAPI(client_id, redirect_uri, scope)
{
	WL.init({client_id: client_id,
			 redirect_uri: redirect_uri,
			 scope: scope,
			 response_type: "token"
			});
}

// Biến cờ để lưu vết lại trạng thái, tình trạng Login
var LoginStatus = "notConnect" ;

function Login(redirect_uri, scope)
{
	WL.login({redirect_uri: redirect_uri,
			  scope: scope
			 }).then(
					function (response)
					{
						LoginStatus = "Connect" ;
						alert('Log in is successful !') ;
					},
					function (responseFailed)
					{
						var alertMessage = "Error logging in: " + responseFailed.error_description ;
						alert(alertMessage) ;
					}
				);
}

function Logout()
{
	if (LoginStatus == "Connect")
	{
		if (WL.canLogout() == true)
		{
			WL.logout().then(
				function (response)
				{
					LoginStatus = "notConnect" ;
					alert('Log out is successful !') ;
				},
				function (responseFailed)
				{
					var alertMessage = "Error logging out: " + responseFailed.error_description ;
					alert(alertMessage) ;
				}
			);
		}
		else
		{
			alert('You can not be loged out !') ;
		}
	}
	else
	{
		alert('You have not Log in !') ;
	}
}
