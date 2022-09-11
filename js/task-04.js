let counterValue = 0;

const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

btnDecr.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

btnIncr.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
