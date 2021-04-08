var characters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '.,!@#$%^&*?';

var length = window.prompt("Choose a password length between 8 and 128 characters:");

var lower = window.confirm("Would you like your password to contain lowercase letters?");
var upper = window.confirm("Would you like your password to contain uppercase letters?");
var nums = window.confirm("Would you like your password to contain numbers?");
var special = window.confirm("Would you like your password to contain special characters?");

function whichChars() {
  if (lower === true) {
    console.log("confirm lowercase");
  } else {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789' + '.,!@#$%^&*?';
    if (upper === true) {
    console.log("confirm uppercase");
    } else {
      characters = '0123456789' + '.,!@#$%^&*?';
      if (nums === true) {
        console.log("confirm numbers");
      } else {
        characters = '.,!@#$%^&*?';
        if (special === true) {
          console.log("confirm special characters");
        } else {
          alert("Your password must contain characters!");
        }
      }
    }
  }
}

function generatePassword() {
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
console.log(generatePassword(length));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// series of prompts for password criteria
// length of at least 8 characters and no more than 128 characters
// lowercase, uppercase, numeric, and/or special characters
// at least one character type should be selected
// a password is generated that matches the selected criteria
// password is displayed to the page