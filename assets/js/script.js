var claimBtn = document.querySelector(".claimBtn");
var form = document.querySelector(".form");
var first = document.querySelector(".first");
var last = document.querySelector(".last");
var email = document.querySelector(".email");
var password = document.querySelector(".password");
entry = [];

function submitForm(event) {
  event.preventDefault();
  var entryObj = {
    first: first.value,
    last: last.value,
    email: email.value,
    password: password.value,
    id: Math.random(),
  };
  console.log(entryObj);
}

claimBtn.addEventListener("click", submitForm);
