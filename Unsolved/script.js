// Assignment Code


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=',',','?','.','/'];
var any = []
var newPassword = []
var passwordLength = ''
var passwordString = ''

var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Prompt for password criterea; needs to be bettween 8-128 characters; lowercase, uppercase, numeric, and special characters
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * any.length)
    newPassword.push(any[randomIndex]);
  }

  passwordString = newPassword.toString().replaceAll(',','')
  // input validated
  // password generated based on criterea



  // display password on page
  return passwordString;
}

function prompts () {
  passwordLength = parseInt(window.prompt("How many characters would you like your password to be?"));


  if (isNaN(passwordLength)) {
      window.alert("Please enter a number.")
     return
  } 

  if (passwordLength < 8 || passwordLength > 128) {
      window.alert("please enter a value between 8-128 characters.")
     return
  }

  if (window.confirm("Would you to like include numbers?") === true){
    any = any.concat(numeric);
  }

  if (window.confirm("Would you like to include special characters?") === true) {
    any = any.concat(specialCharacters);
  }

      if (window.confirm("Would you like to include lowercase letters?") === true) {
        any = any.concat(lowerCase);
      }

 if (window.confirm("Would you like to include uppercase letters?") === true) {
    any = any.concat(upperCase);
  }


}

// Write password to the #password input
function writePassword() {
  var password = prompts();
  var passwordText = document.querySelector("#password");

 
  passwordText.value = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
