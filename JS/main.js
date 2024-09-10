/*
steps:
1- get user values
2- validate user values while he is typing the form data
3- show error msg if any of the user values is not validated
4- prevent form submission if there is any invalid field by disabling submit btn
5- show success msg when user submits the sign up form successfully
*/

"use strict";
// * create necessary variables & functions
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const uEmail = document.getElementById("uEmail");
const uPass = document.getElementById("uPass");

const userName = /^[a-zA-Z0-9]{3,}$/;

function validateFirstName() {
  return userName.test(fName.value);
}
function validateLastName() {
  return userName.test(lName.value);
}
function validateEmail() {
  const userEmail = /^[\w.-]{3,}@[\w-]{2,}\.[\w]{2,4}$/;

  return userEmail.test(uEmail.value);
}

function validatePass() {
  const userPass = /^[\w.-]{8,}$/;

  return userPass.test(uPass.value);
}

function styleInput(input, color, icon) {
  input.style.cssText = `border: solid 2px var(--${color})`;
  input.previousElementSibling.style.display = icon;
}

// * step 1 , 2 & 3
fName.addEventListener("change", function () {
  this.nextElementSibling.textContent = "";
  styleInput(this, "grayishBlue", "none");

  if (!validateFirstName() || fName.value == "") {
    this.nextElementSibling.textContent =
      "First Name must be 3 characters or more, and it can include letters, numbers, dash, underscore";
    styleInput(this, "red", "block");
  }
});

lName.addEventListener("change", function () {
  this.nextElementSibling.textContent = "";
  styleInput(this, "grayishBlue", "none");

  if (!validateLastName() || lName.value == "") {
    this.nextElementSibling.textContent =
      "Last Name must be 3 characters or more, and it can include letters, numbers, dash, underscore";
    styleInput(this, "red", "block");
  }
});

uEmail.addEventListener("change", function () {
  this.nextElementSibling.textContent = "";
  styleInput(this, "grayishBlue", "none");

  if (!validateEmail() || uEmail.value == "") {
    this.nextElementSibling.textContent =
      "Please enter a valide email address. example@gmail.com";
    styleInput(this, "red", "block");
  }
});

uPass.addEventListener("change", function () {
  this.nextElementSibling.textContent = "";
  styleInput(this, "grayishBlue", "none");

  if (!validatePass() || uPass.value == "") {
    this.nextElementSibling.textContent =
      "Password must be 8 characters or more";
    styleInput(this, "red", "block");
  }
});

// * step 4 & 5
const signUpForm = document.querySelector(".formContent form");

signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    validateEmail() &&
    validateFirstName() &&
    validateLastName() &&
    validatePass()
  ) {
    document.querySelector(".successMsg").textContent =
      "You have signed Up successfully 🎉";
  }
});
