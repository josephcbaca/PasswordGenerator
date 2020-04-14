// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  //onClick run prompt to obtain user selected password length
  let amountCharacters = prompt("Between 8 and 52 characters, how long would you like your Password?")

  let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let specialArray = ['!', '#', '$', '%', '^', '*', ','];
  let upperAlphaArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let mainArray = [];


  if (amountCharacters < 8) {
    alert("Password must be 8 characters or larger.")
  }
  else if (amountCharacters > 52) {
    alert("Password must be no larger than 52 characters.")
  }
  else {
    let confirmNums = confirm("Would you like to use Numbers?")
    let confirmAlpha = confirm("Would you like to use Lower Cased Letters?")
    let confirmUpperAlpha = confirm("Would you like to use Upper Cased Letters?")
    let confirmSpecial = confirm("Would you like to use Special Characters?")


    let generateString = function (confirmNums, confirmAlpha, confirmUpperAlpha, confirmSpecial) {


      if (confirmNums) {
        mainArray.push(numArray);
      }
      if (confirmAlpha) {
        mainArray.push(alphaArray);
      }
      if (confirmUpperAlpha) {
        mainArray.push(upperAlphaArray);
      }
      if (confirmSpecial) {
        mainArray.push(specialArray);
      }
      return mainArray
    }

    generateString(confirmNums, confirmAlpha, confirmUpperAlpha, confirmSpecial)

  }

  //First Loop randomizes between arrays returned as true through user selection, second loop randomizes within the array selected in first loop. 
  function getRandomChar() {
    for (let i = 0; i < mainArray.length; i++) {
      let outsideArray = Math.floor(Math.random() * mainArray.length);
      const insideArray = mainArray[outsideArray];

      for (let j = 0; j < insideArray.length; j++) {
        let outsideArray = Math.floor(Math.random() * insideArray.length)
        const insideElement = insideArray[outsideArray];

        return insideElement;
      }
    }
  }

  //Will randomize the one Random Character we get from above loop within loop
  let completePassword = []

  for (let k = 0; k < amountCharacters; k++) {
    let fullPassword = getRandomChar();
    completePassword.push(fullPassword)
  }

  //Joins completePassword array created through for loop process and enters it in text box on page

  let password = completePassword.join("");
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


