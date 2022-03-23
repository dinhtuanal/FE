function checkName(){
	var name = document.getElementById("name").value;
	var error_name = document.getElementById("error_name");
	var RegexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

	if (name == "" | name == null) {
		error_name.innerHTML = "Please enter your name";
		return false;
	}else{
		error_name.innerHTML = "";
		return true;
		}

}
function checkEmail(){
	var email = document.getElementById("email").value;
	var error_email = document.getElementById("error_email");
	var RegexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;

	if (email == "" | email == null) {
		error_email.innerHTML = "Please enter your email";
		return false;
	}else
	if (!RegexEmail.test(email)) {
		error_email.innerHTML = "Email you entered is not valid";
		return false;
	}else {
		error_email.innerHTML = "";
		return true;
	}

}