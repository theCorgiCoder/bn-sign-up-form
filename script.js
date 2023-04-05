const createAccount = document.getElementById("create_account_btn");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const minimum = document.getElementById("min_max");
const emptyField = document.getElementById("empty_field");
const doNotMatch = document.getElementById("do_not_match");

createAccount.addEventListener("click", (e) => {
  formValidation();
});

function minimumLength() {
  if (password.value.length < 8) {
    if (confirmPassword.value.length !== "") {
      password.style.border = "2px solid red";
      minimum.style.display = "block";
      confirmPassword.style.border = "2px solid red";
    } else {
      password.style.border = "2px solid red";
      minimum.style.display = "block";
    }
  } else if (password.value.length <= 8) {
    password.style.border = "2px solid rgb(214, 214, 214)";
    minimum.style.display = "none";
  }
}

function passwordValidation() {
  const pass = password.value;
  const confirmedPass = confirmPassword.value;
  if (pass === "" || pass === null) {
    if (confirmedPass !== "") {
      password.style.border = "2px solid red";
      emptyField.style.display = "block";
    }
  } else if (pass === confirmedPass) {
    if (pass.length < 8) {
      password.style.border = "2px solid red";
      confirmPassword.style.border = "2px solid red";
      minimum.style.display = "block";
    } else {
      password.style.border = "2px solid green";
      confirmPassword.style.border = "2px solid green";
      doNotMatch.style.display = "none";
      emptyField.style.display = "none";
    }
  } else if (pass !== confirmedPass) {
    password.style.border = "2px solid red";
    doNotMatch.style.display = "block";
    confirmPassword.style.border = "2px solid red";
  } else {
    return;
  }
}

// function formValidation() {
//   return console.log("Form button pressed!!!");
// }
