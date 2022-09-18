function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector("#boxes");

const btnCreateRef = document.querySelector("[data-create]");
btnCreateRef.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = document.getElementsByTagName("input")[0].value;
  const boxesMarkUp = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    // boxesRef.insertAdjacentHTML("beforeend", `<div></div>`);
    let newDivRef = document.createElement("div");

    newDivRef.style.width = 30 + i * 10 + "px";
    newDivRef.style.height = 30 + i * 10 + "px";
    newDivRef.style.backgroundColor = getRandomHexColor();
    console.log(newDivRef);
    boxesMarkUp.appendChild(newDivRef);
  }
  boxesRef.appendChild(boxesMarkUp);
}

const btnDeleteRef = document.querySelector("[data-destroy]");
btnDeleteRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesRef.innerHTML = "";
  document.getElementsByTagName("input")[0].value = "";
}
