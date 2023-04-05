const createAccount = document.getElementById("create_account_btn");

createAccount.addEventListener("click", (e) => {
  formValidation();
});

function passwordValidation() {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm_password");
  const emptyField = document.getElementById("empty_field");
  const doNotMatch = document.getElementById("do_not_match");
  console.log(password.value, confirmPassword.value);

  if (password.value === "" || password.value === null) {
    if (confirmPassword.value !== "") {
      password.style.border = "2px solid red";
      emptyField.style.display = "block";
    }
  } else if (password.value === confirmPassword.value) {
    password.style.border = "2px solid green";
    confirmPassword.style.border = "2px solid green";
    doNotMatch.style.display = "none";
    emptyField.style.display = "none";
  } else if (password.value !== confirmPassword.value) {
    doNotMatch.style.display = "block";
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
  } else {
    return;
  }
}

passwordValidation();

// function formValidation() {
//   return console.log("Form button pressed!!!");
// }
