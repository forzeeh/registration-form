document.querySelector('button').onclick = form;

function form(event) {
  event.preventDefault();

  userName();
  email();
  password();
}

// Логин
function userName() {
  let username = document.querySelector('#username');
  if (username.value.length > 2 && username.value.length < 16) {
    username.classList.remove('error-color');
    username.classList.add('success-color');
  }
  else {
    username.classList.remove('success-color');
    username.classList.add('error-color');
  }
}

// Почта
function email() {
  let email = document.querySelector('#email');
  var found = email.value.match(/.+@.+\..+/i);

  if (found != null) {
    email.classList.remove('error-color');
    email.classList.add('success-color');
  }
  else {
    email.classList.remove('success-color');
    email.classList.add('error-color');
  }
}

// Пароль
function password() {
  let password = document.querySelector('#password');

  if (password.value.length > 2 && password.value.length < 16) {
    password.classList.remove('error-color');
    password.classList.add('success-color');
  }
  else {
    password.classList.remove('success-color');
    password.classList.add('error-color');
  }

  // Подтверждение пароля
  let succesPass = document.querySelector('#password2');

  if (succesPass.value === password.value && succesPass.value != '') {
    succesPass.classList.remove('error-color');
    succesPass.classList.add('success-color');
  }
  else {
    succesPass.classList.remove('success-color');
    succesPass.classList.add('error-color');
  }
}