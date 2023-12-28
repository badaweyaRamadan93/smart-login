function registerUser() {
  var userName = document.getElementById("userName").value;
  var userEmail = document.getElementById("userEmail").value;
  var userPassword = document.getElementById("userPassword").value;
  var exist = document.getElementById("exist");
  var correctSignup = document.getElementById("correctSignup");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(userEmail)) {
    var emailInput = document.getElementById("userEmail");
    emailInput.classList.add("is-invalid");

    var emailValidationMessage = document.getElementById(
      "emailValidationMessage"
    );
    emailValidationMessage.classList.remove("d-none");
    return;
  }
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var newUser = {
    name: userName,
    email: userEmail,
    password: userPassword,
  };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmail", userEmail);
  localStorage.setItem("userPassword", userPassword);
  correctSignup.classList.remove("d-none");
  correctSignup.classList.add("d-block");
}