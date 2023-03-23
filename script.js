q = console.log;
q("sjndl");

const body = document.getElementsByTagName("body")[0];
const form_ = document.getElementsByClassName("form")[0];
const form_Back = document.getElementsByClassName("formBack")[0];
const menuBar = document.getElementsByClassName("menu")[0];
const main = document.getElementsByClassName("main")[0];
let menu_Bar = false;
let formOpen = false;
// menuBar.style.display = "none";

function set1() {
  q("setWidth!");
  menuBar.setAttribute("style", `width: ${body.offsetWidth / 4}px;`);
  main.setAttribute("style", `width: ${body.offsetWidth}px;`);
  if (!menu_Bar) {
    body.setAttribute("style", `translate: -${menuBar.offsetWidth + 1}px;`);
    form_.setAttribute(
      "style",
      `translate: ${menuBar.offsetWidth + 1}px; display: none;`
    );
    form_Back.setAttribute(
      "style",
      `translate: ${menuBar.offsetWidth + 1}px; display: none;`
    );
  }
}

set1();

window.addEventListener("resize", set1);

function menuAction() {
  if (menu_Bar) {
    menu_Bar = false;
    body.setAttribute("style", `translate: -${menuBar.offsetWidth + 1}px;`);
  } else {
    menu_Bar = true;
    body.setAttribute("style", `translate:""`);
  }
}

///////////////////////////////////////////////////////////////////////////////////

const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const form = document.getElementById("form");

const checkValidation1 = (e) => {
  e.preventDefault();
  checkUsername();
  checkEmail();
  checkPass();
  checkPass2();
};

const checkUsername = () => {
  if (!username.checkValidity() || username.value == "") {
    document.getElementById("notValidUsername").style.display = "block";
    username.classList = "notValidBorder";
  } else {
    document.getElementById("notValidUsername").style.display = "none";
    username.classList = "validBorder";
  }
};

const checkEmail = () => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.value.trim())) {
    document.getElementById("notValidEmail").style.display = "block";
    email.classList = "notValidBorder";
  } else {
    document.getElementById("notValidEmail").style.display = "none";
    email.classList = "validBorder";
  }
};

const checkPass = () => {
  if (!password.checkValidity() || password.value == "") {
    document.getElementById("notValidPass").style.display = "block";
    password.classList = "notValidBorder";
  } else {
    document.getElementById("notValidPass").style.display = "none";
    password.classList = "validBorder";
  }
};

const checkPass2 = () => {
  if (password2.value === password.value && password2.value != "") {
    document.getElementById("notValidPass2").style.display = "none";
    document.getElementById("notValidPass2req").style.display = "none";
    password2.classList = "validBorder";
  } else if (password2.value == "") {
    document.getElementById("notValidPass2").style.display = "none";
    document.getElementById("notValidPass2req").style.display = "block";
    password2.classList = "notValidBorder";
  } else {
    document.getElementById("notValidPass2").style.display = "block";
    document.getElementById("notValidPass2req").style.display = "none";
    password2.classList = "notValidBorder";
  }
};

form.addEventListener("submit", checkValidation1);

function formAction() {
  setTimeout(function () {
    form_.style.display = "flex";
    form_Back.style.display = "flex";
    formOpen = true;
  }, 0.1);
}

const box = document.getElementById("formContainer");
const closeForm = (event) => {
  if (!box.contains(event.target)) {
    form_.style.display = "none";
    form_Back.style.display = "none";
  }
};

document.addEventListener("click", closeForm);

// setTimeout(function clickOutsideForm(event) {
//     if (!box.contains(event.target)) {
//       form_.style.display = "none";
//     }
//   }, 0.1);
