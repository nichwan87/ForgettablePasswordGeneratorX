// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defining the specialCharacters

const specialCharacters = "!@#$%^&*()<>.,\?/~-_=+";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// User Prompts
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters you want your password to be. Please choose from 8 to 128 characters.");
  
  /*if minimum not achieved or maximum exceeded*/
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = Number(prompt("This password must be between 8 & 128 characters. Please try again"));

  var numbers = confirm("Do you want to include numbers?");

  var lowerCases = confirm("Would you like lowercase letters in your password?");

  var upperCases = confirm("Would you like uppercase letters in your password?");

  var special = confirm("Do you want special characters added?");

  /*if none of the above are selected*/
  while (!upperCases && !lowerCases && !numbers && !special) {
    alert("You must select at least one character type!");
    numbers = confirm("Would you like to now choose to have numbers?");
    lowerCases = confirm("Would you like to now choose to have lowercase letters?");
    upperCases = confirm("Would you like to now choose to have uppercase letters?");
    special = confirm("Would you like to now choose to have special characters?");
  }

  // Setting minium amount of the selection
  var minimumCount = 0;

  // Empty selection minimums for numbers, lowerCases, upperCases & specialCharacters to aid in output

  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

  // Generator functions
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

  // If user selected ok for below, will use empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }

  // empty string for the below to reference off
  var randomPasswordGenerated = "";

  // using the above, use the below to loop around ramdom characters and symbols
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 9);

    randomPasswordGenerated += randomNumberPicked;
  }

  // adding random generated characters to output
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  //adding the output
  return randomPasswordGenerated;

}
