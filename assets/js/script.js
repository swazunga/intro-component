var claimBtn = document.querySelector(".claimBtn");
var form = document.querySelector(".form");
var first = document.querySelector(".first");
var last = document.querySelector(".last");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
var error = document.querySelector(".error");
entry = JSON.parse(localStorage.getItem("entries")) || [];

function submitForm(event) {
  event.preventDefault();
  if (email.validity.typeMismatch) {
    email.setCustomValidity("invalid email");
    email.reportValidity();
    email.classList.add("inputInvalid");
    return;
  }

  if (!first.value) {
    first.classList.add("inputInvalid");
    var mySvg = document.createElementNS("http://www.w3.org/2000/svg", "error");
    mySvg.setAttribute("version", "1.1");
    first.value = mySvg;

    console.log("wrong");
    return;
  }
  if (!last.value) {
    last.classList.add("inputInvalid");
    return;
  }
  if (!email.value) {
    email.classList.add("inputInvalid");
    return;
  }
  if (!password.value) {
    password.classList.add("inputInvalid");
    return;
  }

  var entryObj = {
    first: first.value,
    last: last.value,
    email: email.value,
    password: password.value,
    id: Math.random(),
  };
  entry.push(entryObj);
  localStorage.setItem("entries", JSON.stringify(entry));
  console.log(entryObj);
}

first.addEventListener("blur", function () {
  if (first.value === "") {
    first.classList.add("inputInvalid");
  } else {
    first.classList.remove("inputInvalid");
  }
});

last.addEventListener("blur", function () {
  if (last.value === "") {
    last.classList.add("inputInvalid");
  } else {
    last.classList.remove("inputInvalid");
  }
});

email.addEventListener("blur", function () {
  if (email.value === "") {
    email.classList.add("inputInvalid");
  } else {
    email.classList.remove("inputInvalid");
  }
});

password.addEventListener("blur", function () {
  if (password.value === "") {
    password.classList.add("inputInvalid");
  } else {
    password.classList.remove("inputInvalid");
  }
});

claimBtn.addEventListener("click", submitForm);
