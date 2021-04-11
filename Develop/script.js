function lengthConfirm() {
  var length = prompt("Choose a password length between 8 and 128 characters:");
  if (!length || length < 8 || length > 128) {
    alert("Please pick correct password length");
    return lengthConfirm();
  }
  return length;
}

function confirmCharType() {
  if (askLower === false && askUpper === false && askNums === false && askSpecial === false) {
    alert("Password failed. Restart page and select at least one criteria.");
    generate = false;
  }
}

var length = lengthConfirm();

var askLower = window.confirm("Would you like your password to contain lowercase letters?");
  if(askLower === true) {
    var confirmLower ='abcdefghijklmnopqrstuvwxyz';
  } else {
    var confirmLower = '';
  }
var askUpper = window.confirm("Would you like your password to contain uppercase letters?");
  if(askUpper === true) {
    var confirmUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } else {
    var confirmUpper = '';
  }
var askNums = window.confirm("Would you like your password to contain numbers?");
  if(askNums === true) {
    var confirmNums = '0123456789';
  } else {
    var confirmNums = '';
  }
var askSpecial = window.confirm("Would you like your password to contain special characters?");
  if(askSpecial === true) {
    var confirmSpecial = '.,!@#$%^&*?';
} else {
  var confirmSpecial = '';
}

confirmCharType();

var generate = window.alert("Criteria set. Please press Generate button to get your password!");

function generatePassword() {
  var characters = (confirmLower + confirmUpper + confirmNums + confirmSpecial);
  var randomPassword = [];
  for (var i = 0; i < length; i++) {
    var rnum = Math.floor(Math.random() * characters.length);
    randomPassword += characters.substring(rnum, rnum+1);
  }
  return randomPassword;
  console.log(randomPassword);
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