
var generateBtn = document.querySelector("#generate");
 

function writePassword() {
  
  var length = window.prompt("how long do you want your password to be? you can pick between 4 and 26 characters"); 
  
  if (length <= 3 || length >= 27) { 

 window.alert("You need to provide a valid answer! Please try again.");    
   writePassword();  
 }
console.log(length);

    // passwordinfo.charalength(); 
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
