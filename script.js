// Assignment Code
//between 8-128 characters

let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generatePassword Function

function generatePassword(){
  let arr = [];
  
  let ArrLength = prompt("Choose a length between 8 - 128");
  let numeric = confirm("Do you want to use numbers?");
  let lower = confirm("Do you want to use lower case characters?");
  let upper = confirm("Do you want to use upper case characters?");
  let special = confirm("Do you want to use special characters?");

  if ((lower === true || upper === true || special === true || numeric === true) && 
     (ArrLength > 7 && ArrLength < 129)) { 
    
       arr = makeit(ArrLength, numeric, lower, upper, special, arr);
       return arr.join("");
  }

  else{
       alert("Try Again");
       return "Try Again";
  }
}

function makeit(ArrLength, numeric, lower, upper, special, arr){
  let string = "";
  let alphHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphLow = "abcdefghijklmnopqrstuvwxyz";
  let alphSpec =  "\ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let alphNum = "0123456789";

  if (lower === true){
    string = string + alphLow;
  }
  if (upper === true){
    string = string + alphHigh;
  }
  if (special === true){
    string = string + alphSpec;
  }
  if (numeric === true){
    string = string + alphNum;
  }

  for (let i = 0; i < ArrLength; i++){
    arr[i] = string[Math.floor(Math.random() * string.length + 1)];
  };

  return arr;
}