function inputBtn(value) {
  document.getElementById("inputBox").value += value;
}

function clearInput() {
  document.getElementById("inputBox").value = "";
}

function calculate() {
    const result = eval(document.getElementById("inputBox").value);
    document.getElementById("inputBox").value = result;
  }

function deleteLastDigit() {
  const display = document.getElementById('inputBox');
  display.value = inputBox.value.slice(0, -1);
}