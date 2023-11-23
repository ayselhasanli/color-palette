const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "H", "I", "K"];
const button = document.getElementById("btn");
const color = document.getElementById("color");

button.addEventListener("click", function () {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomHex()];
  }
  color.textContent = hexValue;
  document.body.style.backgroundColor = hexValue;
});

function getRandomHex() {
  return Math.floor(Math.random() * hex.length);
}
