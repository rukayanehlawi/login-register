

//  Registered or new?

const registerButton = document.getElementById('register-button');
const loginForm = document.getElementById('login-box');
const registerForm = document.getElementById('register-box');

registerButton.addEventListener('click', function() {
  loginForm.style.display = 'none';
  registerForm.style.display = 'flex';
});

const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function(){
    loginForm.style.display = 'flex';
  registerForm.style.display = 'none';
})

// ----------------------------------------------
// Confirm password
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const registerSubmitButton = document.getElementById("registerSubmitButton");

  // Add event listener to the register button
registerSubmitButton.addEventListener("click", function() {
  // Get the values entered in the password and confirm password fields
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  // Check if the password and confirm password match
  if (passwordValue === confirmPasswordValue) {
    // Passwords match, proceed with the registration
    console.log("Registration successful!");
    // Add your registration code here

  } else {
    // Passwords do not match, display an error message
    console.log("Passwords do not match!");
    // Add your error message display code here
  }
});


// -----------------------------------------------

// Password visibility


  var allpasswordInputs = document.querySelectorAll(".passwordInput");
  var alleyeIcons = document.querySelectorAll("#eye");

alleyeIcons.forEach( 
function togglePasswordVisibility(eyeIcon) {
    eyeIcon.onclick=function(){

allpasswordInputs.forEach( 
  function showOrHide(passwordInput){
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
  })
}
})
// ----------------------------------------------------
// Open main page

// const loginSubmitButton = document.getElementById('loginSubmitButton');
// const loginSection = document.querySelector('.loginSection');
// const mainSection = document.querySelector('.mainSection');

// loginSubmitButton.addEventListener('click', function(){
//   mainSection.style.display = 'flex';
//   loginSection.style.display = 'none';
// })


// registerSubmitButton.addEventListener('click', function(){
//   mainSection.style.display = 'flex';
//   loginSection.style.display = 'none';
// })


// --------------------------------------------------


// Password strength
// document.getElementById('password').addEventListener('input', function() {
//     var password = document.getElementById('password').value;
//     var strengthBar = document.getElementById('strength-bar');
//     var strength = 0;

//     if (password.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
//         strength += 1;
//     }
//     if (password.match(/[~<>?]+/)) {
//         strength += 1;
//     }
//     if (password.match(/[!@#$%^&*()]+/)) {
//         strength += 1;
//     }
//     if (password.length >= 8) {
//         strength += 1;
//     }

//     switch (strength) {
//         case 0:
//         case 1:
//             strengthBar.style.width = '20%';
//             strengthBar.className = 'progress-bar bg-danger';
//             break;
//         case 2:
//             strengthBar.style.width = '40%';
//             strengthBar.className = 'progress-bar bg-warning';
//             break;
//         case 3:
//             strengthBar.style.width = '60%';
//             strengthBar.className = 'progress-bar bg-info';
//             break;
//         case 4:
//             strengthBar.style.width = '100%';
//             strengthBar.className = 'progress-bar bg-success';
//             break;
//     }
// });

// ---------------------------------------------------------------

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}