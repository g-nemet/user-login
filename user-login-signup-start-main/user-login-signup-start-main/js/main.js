// USER LOGIN / SIGNUP

// HTML VARIABLES
// Buttons
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
// Spans
let userSpan1 = document.getElementById("user-span-1");
let passSpan1 = document.getElementById("pass-span-1");
let confPassSpan = document.getElementById("conf-pass-span");
let userSpan2 = document.getElementById("user-span-2");
let passSpan2 = document.getElementById("pass-span-2");
// User Info Vars
//let loadUser = loadUserInfo();
let username;
let password;
let confPassword;

// ARRAYS
let userInfo = [];

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

// gather user information -> pass information to next function
function signUpHandler() {
  // gather input info
  username = document.getElementById("user-input-1").value;
  password = document.getElementById("pass-input-1").value; 
  confPassword = document.getElementById("conf-pass-input").value;

  addNewUser(username, password, confPassword);
}

function addNewUser(username, password, confPassword) {
  // declare user info
  let User = {Username: username, Password: password};
  // check password match
  if (password === confPassword) {
   userInfo.push(User);
   saveUserInfo();
   checkUser(username, password);
  } else {
    alert("Passwords do not match!");
  }
  
}

function saveUserInfo() {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

function loadUserInfo() {
  let userString = localStorage.getItem("userInfo", JSON.stringify(userInfo));
  return JSON.parse(userString) ?? [];
}

function checkUser(username1, password1) {
  for (let i = 0 ; i < userInfo.length; i++) {
    if (username === userInfo[i].Username) {
      return alert("Username Is Already In Use!")
    } else {
      checkSignIn(username1, password1);
    }
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
 let username1 = document.getElementById("user-input-2").value;
  let password1 = document.getElementById("pass-input-2").value;

  checkSignIn(username1, password1);
}

function checkSignIn(username1, password1) {
  for (let i = 0; i < userInfo.length; i++) {
    if (username1 === userInfo[i].Username && password1 === userInfo[i].Password) {
      return alert("Sign In Successful");
    } else {
      alert("User Not Found, Please Sign Up");
    }
  }
}


