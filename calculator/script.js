const display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
function addClickEffect(button) {
  button.classList.add('clicked');
  setTimeout(() => button.classList.remove('clicked'), 150);
}

// Modify all buttons to add click animation
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => addClickEffect(btn));
});