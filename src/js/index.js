function validation(form) {
  let result = true;
  const allInputs = form.querySelectorAll("input");

  for (const input of allInputs) {
    hideErrorMessage(input);

    if (input.value == "") {
      hideErrorMessage(input);

      showErrorMessage(input, "Поле не заполнено");
      result = false;
    }
  }
  return result;
}
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation(this) == true) {
  }
});

const form = document.getElementById("form");
const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const mailInput = document.getElementById("mail-input");

const input = form.querySelectorAll("input");

nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  const minLength = nameInput.dataset.minLength || 2;
  const nameRegExp = /^[A-Za-zА-Яа-яЁё]+$/;

  if (name.length < minLength) {
    showErrorMessage(nameInput, "Имя слишком короткое");
  } else if (!nameRegExp.test(name)) {
    showErrorMessage(
      nameInput,
      "Имя не должно содержать чисел и специальных символов"
    );
  } else {
    hideErrorMessage(nameInput);
  }
});

phoneInput.addEventListener("input", () => {
  const phone = phoneInput.value.trim();
  const phoneRegExp =
    /^\+?\d{0,3}\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/;

  if (!phoneRegExp.test(phone)) {
    showErrorMessage(phoneInput, "Неправильный формат номера телефона");
  } else {
    hideErrorMessage(phoneInput);
  }
});

mailInput.addEventListener("input", () => {
  const email = mailInput.value.trim();
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegExp.test(email)) {
    showErrorMessage(mailInput, "Неправильный формат электронной почты");
  } else {
    hideErrorMessage(mailInput);
  }
});

function showErrorMessage(input, message) {
  const errorContainer = input.parentNode.querySelector(
    ".input__error-message"
  );
  if (errorContainer) {
    errorContainer.textContent = message;
    errorContainer.style.display = "block";
  } else {
    const newErrorContainer = document.createElement("span");
    newErrorContainer.classList.add("input__error-message");
    newErrorContainer.textContent = message;
    input.parentNode.appendChild(newErrorContainer);
  }
  input.classList.add("input__field--error");
}

function hideErrorMessage(input) {
  const errorContainer = input.parentNode.querySelector(
    ".input__error-message"
  );
  if (errorContainer) {
    errorContainer.textContent = "";
    errorContainer.style.display = "none";
  }
  input.classList.remove("input__field--error");
}
