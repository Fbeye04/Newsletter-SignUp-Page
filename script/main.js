const signupHome = document.querySelector(".home");
const successMessage = document.querySelector(".success-message");
const subscribeButton = document.getElementById("subs-button");
const dismissButton = document.getElementById("dismiss-button");
const emailInput = document.getElementById("email");

const handleSignUpHome = (e) => {
  e.preventDefault();

  const emailValue = emailInput.value;

  if (validateEmail(emailValue)) {
    setSuccess(emailInput);
    signupHome.classList.add("hide");
    successMessage.classList.add("active");
    clearInput();
  } else {
    setError(emailInput, "valid email required");
  }
};

const handleSuccessState = () => {
  signupHome.classList.remove("hide");
  successMessage.classList.remove("active");
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const clearInput = () => {
  emailInput.value = "";
};

emailInput.addEventListener("input", () => {
  const inputControl = emailInput.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
});

subscribeButton.addEventListener("click", handleSignUpHome);
dismissButton.addEventListener("click", handleSuccessState);
