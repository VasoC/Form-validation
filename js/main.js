const form = document.querySelector("#userinformation");
const emailinput = document.querySelector('input[name="email"]');
const personalnumberinput = document.querySelector(
  'input[name="personal-number"]'
);
const mobilenumberinput = document.querySelector('input[name="mobile-number"]');
const positioninput = document.querySelector('input[name="position"]');
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(e)
});
