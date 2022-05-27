var charactersAmountRange = document.getElementById ("CharactersAmountRange")
var charactersAmountNumber = document.getElementById ("CharactersAmountNumber")
var includeAmountNumbersEl = document.getElementById("includeUppercase")
var includeSymbolsEl = document.getElementById("includeSymbols")
var includeUppercaseEl = document.getElementById("includeUppercase")
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47)
var NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
var labelimputs = document.getElementById("passwordGeneratorForm")

CharactersAmountNumber.addEventListener('input', syncharacterAmount)
CharactersAmountRange.addEventListener('input', syncharacterAmount)

function syncharacterAmount(e) {
  var value = e.target.value
  CharactersAmountNumber.value = value
  CharactersAmountRange.value = value
  }


labelimputs.addEventListener ('submit', e=> {
e.preventDefault()
var characterAmount = charactersAmountNumber.value
var includeUppercase = includeUppercase.checked
var includeSymbols = includeSymbolsEl.checked
var includeNumbers = includeAmountNumbersEl.checked
var password = generatePassword(charactersAmount, includeUppercase, includeSymbols, includeNumbers) 
})

// function generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase){
// var charCodes = LOWERCASE_CHAR_CODES
// if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
// if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
// if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
// var passwordcharacters = []
// for (let i=0; i < characterAmount, i++){
// passwordcharacters.push(character)
//  String.fromCharCode() 
// }
// }

function arrayFromLowToHigh(low, high){
var array = []
  for( let i = low; i<= high; i++){
array.push(i)
  }
  return array
}












