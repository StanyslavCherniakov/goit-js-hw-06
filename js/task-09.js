function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

btnColor.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = document.body.style.backgroundColor;
}
