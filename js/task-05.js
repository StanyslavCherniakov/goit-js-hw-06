const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
    nameRef.textContent = "Anonymous";
    return;
  }
  nameRef.textContent = event.currentTarget.value;
});
