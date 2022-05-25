// when the user press generate password 
// number of characters share value betwwn slider and number box

var charactersAmountRange = document.getElementById ( 'CharactersAmountRange' )
var charactersAmountNumber = document.getElementById ( 'CharactersAmountNumber' )
// var passwordText = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var generateBtn = document.getElementById("generate");
var includeAmountNumbersEl = document.getElementById("includeUppercase")
var includeSymbolsEl = document.getElementById("includeSymbols")
var includeUppercaseEl = document.getElementById("includeUppercase")

var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var SYMBOLS_CHAR_CODE = arrayFromLowToHigh(33, 47)
var NUMBERS_CHAR_CODE = arrayFromLowToHigh(48, 57)


// var password = generatePassword( characterAmount, includeNumbers, includeSymbols, includeUppercase)
var labelimputs = document.getElementById("passwordGeneratorForm")

CharactersAmountNumber.addEventListener('input', syncharacterAmount)
CharactersAmountRange.addEventListener('input', syncharacterAmount)

labelimputs.addEventListener ('submit', e=> {
  e.preventDefault()
var characterAmount = charactersAmountNumber.value
var includeUppercase = includeUppercase.checked
var includeSymbols = includeSymbolsEl.checked
var includeNumbers = includeAmountNumbersEl.checked
var password = generatePassword(charactersAmount, includeUppercase, includeSymbols, includeNumbers )
})

function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase){
 String.fromCharCode() 
}
function arrayFromLowToHigh(low, high){
var array = []
  for( let i = low; i<= high; i++){
array.push(i)
  }
  return array
}
// Get references to the #generate element



function syncharacterAmount(e) {
  var value = e.target.value
  CharactersAmountNumber.value = value
  CharactersAmountRange.value = value
  
  }

  // function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase)








// Assignment code here






// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



