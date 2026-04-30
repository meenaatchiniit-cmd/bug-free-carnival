function factorial(n) {
  const value = Number(n);
  if (!Number.isInteger(value) || value < 0) {
    return null;
  }
  let result = 1;
  for (let i = 2; i <= value; i += 1) {
    result *= i;
  }
  return result;
}

function handleCalculateButton(event) {
  event.preventDefault();

  const input = document.getElementById('numberInput');
  const output = document.getElementById('result');
  const value = input.value.trim();
  const answer = factorial(value);

  if (answer === null) {
    output.textContent = 'Please enter a valid non-negative integer.';
    output.style.color = 'red';
  } else {
    output.textContent = `${value}! = ${answer}`;
    output.style.color = 'black';
  }
}

window.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('calculateButton');
  button.addEventListener('click', handleCalculateButton);
});