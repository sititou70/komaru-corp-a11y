const form = document.querySelector(".campaign form");
const othersRadioButton = document.querySelector(
  ".campaign form input[type=radio][name=advantage][value=others]"
);
const othersTextInput = document.querySelector(
  ".campaign form input[type=text][name=others]"
);

form.addEventListener("change", () => {
  if (othersRadioButton.checked) {
    othersTextInput.removeAttribute("disabled");
    othersTextInput.focus();
  } else {
    othersTextInput.setAttribute("disabled", "true");
  }
});
