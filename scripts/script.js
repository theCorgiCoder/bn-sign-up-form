const form = document.getElementById("register-form");
const pass1 = document.getElementById("password");
const pass2 = document.getElementById("confirm-password");

// Prevents dates before today being selectable
document.getElementById("date").min = new Date().toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const setError = (element, message) => {
  const col = element.parentElement;
  const errorDisplay = col.querySelector("#error");

  errorDisplay.innerText = message;
  col.classList.add("error");
  col.classList.remove("success");
};

const setSuccess = (element) => {
  const col = element.parentElement;
  const errorDisplay = col.querySelector("#error");

  errorDisplay.innerText = "";
  col.classList.add("success");
  col.classList.remove("error");
};

const validateInput = () => {
  const passwordValue = pass1.value;
  const passwordConfirmValue = pass2.value;

  if (passwordConfirmValue !== passwordValue) {
    setError(pass2, "* Passwords don't match!");
    pass1.style.border = "2px solid red";
    pass2.style.border = "2px solid red";
  } else {
    setSuccess(pass2);
    pass1.style.border = "2px solid var(--gray-color)";
    pass2.style.border = "2px solid var(--gray-color)";
  }
};
