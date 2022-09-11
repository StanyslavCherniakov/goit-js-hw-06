const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  nameRef.textContent = event.currentTarget.value;
});
