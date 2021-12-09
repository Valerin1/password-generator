var makePass = document.getElementsByClassName("placeholder");
document.getElementsByClassName("button-is")[0].onclick = generatePassword;

function generatePassword() {
  var length = 15,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  document.getElementsByClassName("placeholder")[0].value = retVal;
  return retVal;
}

window.test = () => generatePassword();
