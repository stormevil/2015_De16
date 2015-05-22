var connect = false;

function logout()
{
    gapi.auth.signOut();
    location.reload();
}
function login() 
{
  var myParams = {
    'clientid' : '872578839089-e9bh6n3ft747qv0mp2om95c7bnncql82.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}
 
function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            var email = '';
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
                    }
                }
            }
			connect = true;
            var str = "Name:" + resp['displayName'] + "<br>";
            str += "Image:" + resp['image']['url'] + "<br>";
            str += "<img src='" + resp['image']['url'] + "' /><br>";
 
            str += "URL:" + resp['url'] + "<br>";
            str += "Email:" + email + "<br>";
            document.getElementById("profile").innerHTML = str;		
			var firstname = resp['displayName'];
			$.ajax({
				type:"POST",
				url:"db.php",
				data:"name="+firstname+"&email="+email,
				dataType:"json",
				success:function(msg,string,jqXHR){
					//window.location="http://localhost/framework/profile.php";
				}
			});		
        });
 
    }
 
}
function onLoadCallback()
{
    gapi.client.setApiKey('AIzaSyDI_-EnTpSU6BgkKbOocs1WsO6oL_vdrJE');
    gapi.client.load('plus', 'v1',function(){});
}