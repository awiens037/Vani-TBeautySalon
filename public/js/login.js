var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function validate(){
	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	if ( username == "katkeivens@gmail.com" && password == "password123"){
		alert ("Login successful");
		window.location = "dashboard.hbs"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("Incorrect passowrd. You have left " + attempt + " attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("email").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
};