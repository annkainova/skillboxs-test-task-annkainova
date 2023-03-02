function validation(form) {
  function removeError(input) {
    if (input.classList.contains("input__error")) {
      input.classList.remove("input__error");
      input.parentNode.querySelector(".input__error-label").remove();
    }
  }

  function createError(input, text) {
    const errorLabel = document.createElement("span");

    errorLabel.classList.add("input__error-label");
    errorLabel.textContent = text;

    input.classList.add("input__error");
    input.parentNode.append(errorLabel);
  }

  let result = true;

  const allInputs = form.querySelectorAll("input");

  for (const input of allInputs) {
    removeError(input);

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        removeError(input);
        createError(input, `Имя слишком короткое`);
        result = false;
      }
    }

    if (input.value == "") {
      removeError(input);

      createError(input, "Поле не заполнено");
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
