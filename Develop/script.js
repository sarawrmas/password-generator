var characters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '.,!@#$%^&*?';

function prompts() {
  var characters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '.,!@#$%^&*?';
  var length = window.prompt("Choose a password length between 8 and 128 characters:");
    if (!length || length < 8) {
      alert("Please pick a number between 8 and 128");
      return prompts();
    }
  var lower = window.confirm("Would you like your password to contain lowercase letters?");
    if (lower === true) {
      console.log("Confirm lowercase");
    } else {
      console.log("Deny lowercase");
    }
  var upper = window.confirm("Would you like your password to contain uppercase letters?");
    if (upper === true) {
      console.log("Confirm uppercase");
    } else {
      console.log("Deny uppercase");
    }
  var nums = window.confirm("Would you like your password to contain numbers?");
    if (nums === true) {
      console.log("Confirm numbers");
    } else {
      console.log("Deny numbers");
    }
  var special = window.confirm("Would you like your password to contain special characters?");
    if (special === true) {
      console.log("Confirm special characters");
    } else {
      console.log("Deny special characters");
    }
}

prompts();

function generatePassword(whichChars) {
  // var characters = whichChars();
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
console.log(generatePassword());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);