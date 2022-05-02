const form = document.querySelector("#userinformation");
const emailInput = document.querySelector('input[name="email"]');
const personalnumberInput = document.querySelector(
  'input[name="personal-number"]'
);
const mobilenumberInput = document.querySelector('input[name="mobile-number"]');
const positionInput = document.querySelector('input[name="position"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(validateEmail());
  console.log(emailInput.value);
  console.log(validatepersonalnumber());
  console.log(validatemobilenumberInput());
  console.log(validateposition()());
});
function validateEmail() {
  if (emailInput.value) {
    emailInput.classList.remove("has-error");
    emailInput.parentNode.querySelector(".errortext").innerHTML = "";
    return true;
  }
  emailInput.classList.add("has-error");
  emailInput.parentNode.querySelector(".errortext").innerHTML = "Enter email";
  return false;
}

function validatepersonalnumber() {
  if (personalnumberInput.value) {
    personalnumberInput.classList.remove("has-error");
    personalnumberInput.parentNode.querySelector(".errortext").innerHTML = "";
    return true;
  }
  personalnumberInput.classList.add("has-error");
  personalnumberInput.parentNode.querySelector(".errortext").innerHTML =
    "Enter Pin";
  return false;
}
function validatemobilenumberInput() {
  if (mobilenumberInput.value) {
    mobilenumberInput.classList.remove("has-error");
    mobilenumberInput.parentNode.querySelector("errortext").innerHTML = "";
    return true;
  }
  mobilenumberInput.classList.add("has-error");
  mobilenumberInput.parentNode.querySelector(".errortext").innerHTML =
    "Enter mobile number";
  return false;
}
function validateposition() {
  if (positionInput.value) {
    positionInput.classList.remove("has-error");
    positionInput.parentNode.querySelector(".errortext").innerHTML = "";
    return true;
  }
  positionInput.classList.add("has-error");
  positionInput.parentNode.querySelector(".errortext").innerHTML =
    "Enter your position";
  return false;
}
