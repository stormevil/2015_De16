<<<<<<< HEAD
//script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
// Additional JS functions 
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '802824189816944', // App ID
      // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true,  // parse XFBML
	  scopes: 'email, public_profile'
    });
  
FB.Event.subscribe('auth.authResponseChange', function(response) 
	{
 	 if (response.status === 'connected') 
  	{
  		//document.getElementById("message").innerHTML +=  "<br>Connected to Facebook";
  		//SUCCESS
		alert("conected");
		getUserInfo();
		//window.location.href='run.php';
		
  		
  	}	 
	else if (response.status === 'not_authorized') 
    {	
		alert("Fail connect");
    	//document.getElementById("message").innerHTML +=  "<br>Failed to Connect";
		
		//FAILED
    } else 
    {
    	//document.getElementById("message").innerHTML +=  "<br>Logged Out";

    	//UNKNOWN ERROR
    }
	});	
	
    };
    
   	function LoginWithFacebook()
	{
	
		FB.login(function(response) {
		   if (response.authResponse) 
		   {
		    	//getUserInfo();
				alert("login complete");
  			} else 
  			{
  	    	 console.log('User cancelled login or did not fully authorize.');
   			}
		 },{scope: 'email, public_profile',auth_type: 'reauthenticate'});
	closeDialog();
	}
	 function getUserInfo() {
	    FB.api('/me', function(response) {
		var id = response.id;
		var name= response.name;
		var gender = response.gender;
		var mail= response.email;
		//var email= reponse.email;
		var pic='<img style="height:25px;" src="http://graph.facebook.com/' + id + '/picture" />'+" ";
		var str='<li>'
		+'<a href="#" onclick="showbox()">'+pic+name+'</a>'
		+'</li>';
		$("#changelogin").replaceWith(str);
		var s='<a href="#">'
				+'quan ly tai khoan'
				+'</a>'
				+'<br>'
				+'<a href="#logout" onclick="logoutFacebook()">'
				+'thoat'
				+'</a>';
		$("#menuBox").append(s);
		$.ajax( {
			type:'POST',
			url:'userdata.php',
			data:"name="+name+"&id="+id+"&gender="+gender+"&email="+mail,
			dataType:'json',
			success:function(msg,string,jqXHR) {
				
			}
		}); 
    });
		//window.location.href="run.php";
    }
		function logoutFacebook()
	{
		FB.logout(function(){document.location.reload();});
	}

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
=======

>>>>>>> c4612efed20dbae4f8ae4ac1ed406298940bb84b
