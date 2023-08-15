// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  function generatePassword() {

    var passwordstring = []
    var characterpool = ""
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "1234567890"
    var specialcharacters = "!@#$%^&*()_+-"
    characterpool.concat(letters)
    console.log(characterpool)
    var wantsnumbers = window.confirm("do you want numbers")
    var wantssymbols = window.confirm("do you wants symbols")
    console.log(wantsnumbers)
    if (wantsnumbers === true) {
      characterpool.concat(numbers)
      console.log (characterpool)
    }
    if (wantssymbols === true) {
      characterpool.concat(specialcharacters)
      console.log(characterpool)
    }

    for (var i = 0; i < 6; i++) {
      var random = Math.floor(Math.random() * characterpool.length)
      var randomcharacter = characterpool[random]
      passwordstring.push(randomcharacter)
      console.log(passwordstring)

    }
    return passwordstring.toString()
  }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


