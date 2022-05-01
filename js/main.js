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
});
function validateEmail() {
  if (emailInput.value) {
    return true;
  }
  return false;
}
