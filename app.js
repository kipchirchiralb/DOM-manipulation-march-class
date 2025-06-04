// select the button element
const myButton = document.getElementById("myButton");

// add an event listener to the button

myButton.addEventListener("click", () => {
  alert("Button clicked");
});

// select elements needed
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const resultHolder = document.getElementById("result");

// add event listeners to the buttons

addButton.addEventListener("click", () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const result = num1Value + num2Value;
  resultHolder.value = result;
});
