var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!@#$%^&*?';

var length = window.prompt("Choose a password length between 8 and 128 characters:");
// TO DO: reload if doesn't meet criteria
var lower = window.confirm("Would you like your password to contain lowercase letters?");
var upper = window.confirm("Would you like your password to contain uppercase letters?");
var nums = window.confirm("Would you like your password to contain numbers?");
var special = window.confirm("Would you like your password to contain special characters?");
var generate = window.alert("Criteria set. Please press Generate button to get your password!");

// TO DO: generate password using criteria

function generatePassword() {
  var result = [];
  for (var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

console.log(generatePassword(length));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);