// when the user press generate password 
// number of characters share value betwwn slider and number box

var charactersAmountRange = document.getElementById ( 'CharactersAmountRange' )
var charactersAmountNumber = document.getElementById ( 'CharactersAmountNumber' )

CharactersAmountNumber.addEventListener('input', syncharacterAmount)
CharactersAmountRange.addEventListener('input', syncharacterAmount)

// Get references to the #generate element
var passwordText = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ('submit', e => {
  e.preventdefault()
})

function syncharacterAmount(e) {
var value = e.target.value
CharactersAmountNumber.value = value
CharactersAmountRange.value = value

}

// Assignment code here






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



