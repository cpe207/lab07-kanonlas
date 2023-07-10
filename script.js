const firstNameInput = document.querySelector("#first-name-input");
const submitBtn = document.querySelector("#submit-btn");
const lastNameInput = document.querySelector("#last-name-input");
const Email = document.querySelector("#email-input");
const Password = document.querySelector("#password-input");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  //first
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  //last
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

Email.onkeyup = () => {
  //email
  Email.classList.remove("is-valid");
  Email.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  let isFirstnameOk = false;
  let islastnameOk = false;
  let isemailOk = false;
  let ispasswordOk = false;

  if (firstNameInput.value === "") {
    //check first
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstnameOk = true;
  }

  if (lastNameInput.value === "") {
    //check last
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    islastnameOk = true;
  }

  if (validateEmail(Email.value) === true) {
    //check last
    Email.classList.add("is-valid");
    isemailOk = true;
  } else {
    Email.classList.add("is-invalid");
  }

  if (Password.value === "") {
    // check password
    Password.classList.add("is-invalid");
  } else if (Password.value.length < 6) {
    Password.classList.add("is-invalid");
  } else {
    Password.classList.add("is-valid");
    ispasswordOk = true;
  }

  if (isFirstnameOk && islastnameOk && isemailOk && ispasswordOk) {
    alert("Registered successfully");
  }
};
