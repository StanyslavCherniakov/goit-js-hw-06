const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(inputRef.getAttribute("data-length"))
  ) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    return;
  }
  inputRef.classList.add("invalid");
}
