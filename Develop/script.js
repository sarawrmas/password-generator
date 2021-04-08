var howLong = window.prompt("Choose a password length between 8 and 128 characters:");
var lower = window.confirm("Would you like your password to contain lowercase letters?");
var upper = window.confirm("Would you like your password to contain uppercase letters?");
var nums = window.confirm("Would you like your password to contain numbers?");
var special = window.confirm("Would you like your password to contain special characters?");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);