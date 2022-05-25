// when the user press generate password 
// number of characters share value betwwn slider and number box

var charactersAmountRange = document.getElementById ( 'CharactersAmountRange' )
var charactersAmountNumber = document.getElementById ( 'CharactersAmountNumber' )

CharactersAmountNumber.addEventListener('input', syncharacterAmount)
CharactersAmountRange.addEventListener('input', syncharacterAmount)

function syncharacterAmount(e) {
var value = e.target.value
CharactersAmountNumber.value = value
CharactersAmountRange.value = value

}
console.log(syncharacterAmount)
// Assignment code here
var passwordText = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";



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



