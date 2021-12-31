
var generateBtn = document.querySelector("#generate");
 

function writePassword() {
  
  var length = window.prompt("how long do you want your password to be? you can pick between 4 and 26 characters"); 
  
  if (length <= 3 || length >= 27) { 

 window.alert("You need to provide a valid answer! Please try again.");    
   writePassword();  
 }
console.log(length); 

var lower = window.prompt("do you want lowercase letters? Yes or No"); 
     lower = lower.toLowerCase(); 
     console.log(lower); 
 // if (lower != "yes" || lower != "no") { 
 
 //window.alert("You need to provide a valid answer! Please try again.");    
 //  writePassword();  
 //}
  console.log(lower);  

  var upper = window.prompt("do you want uppercase letters? Yes or No"); 
     upper = upper.toLowerCase(); 
     console.log(upper);  

     var number = window.prompt("do you want numbers? Yes or No"); 
     number = number.toLowerCase(); 
     console.log(number);  

     var special = window.prompt("do you want special characters? Yes or No"); 
     special = special.toLowerCase(); 
     console.log(special); 

      var passwordText = document.querySelector("#password"); 
      passwordText.value = generatePassword(length);
    

  
  function generatePassword(length) { 
  
    console.log(length); 
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%^&*()+";
    var password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    } 
    console.log(password);
    return password; 
  } 

}; 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
