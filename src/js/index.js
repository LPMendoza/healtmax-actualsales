window.onload = function(e) {
  initValidInput();
}

var btnMenu = document.querySelector("#btnMenu");
btnMenu.addEventListener("click", menuCollpase);

var btnCloseMenu = document.querySelector("#btnCloseMenu");
btnCloseMenu.addEventListener("click", menuCollpase);

function menuCollpase(e) {
  var navbar = document.querySelector("#navbarCollapse");
  var navBarBackground = document.querySelector("#navBarBackground");
  if(navbar.className.includes("menuShowed")) {
    navbar.classList.remove("menuShowed");
    navBarBackground.classList.remove("menuShowed");
  } else {
    navbar.classList.add("menuShowed");
    navBarBackground.classList.add("menuShowed");
  }
}

var modalRegistered = new bootstrap.Modal(document.getElementById("modalRegistered"));
document.querySelector("#frmRegister").onsubmit = onSubmitRegister;

function onSubmitRegister(e) {
  e.preventDefault();
  if(validateForm()) {
    modalRegistered.show();
    cleanForm();
  }
}

function initValidInput(field) {
  var fields = document.querySelectorAll(".txtForm");
  fields.forEach(function (field) {
    field.oninput = function(e) {
      validInput(e.target);
    }
  });
}

function validateForm() {
  var fields = document.querySelectorAll(".txtForm");
  var valid = true;
  fields.forEach(function(field) {
    if(!valid){
      validInput(field);
    } else {
      valid = validInput(field);
    }
  });

  return valid;
}

function cleanForm() {
  var fields = document.querySelectorAll(".txtForm");
  fields.forEach(function (field) {
    field.value = "";
  });
}

function validInput(field) {
  var parent = field.parentElement;
  var valid = true;
  if (field.dataset.inputType == "date") {
    parent = field.parentElement.parentElement;
  }
  if (field.value == "") {
    parent.getElementsByClassName("error-span")[0].classList.add("error-span--showed");
    field.classList.add("form-control--invalid");
    valid = false;
  } else {
    parent.getElementsByClassName("error-span")[0].classList.remove("error-span--showed");
    field.classList.remove("form-control--invalid");
  }
  return valid;
}