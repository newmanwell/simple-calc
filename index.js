// Create function
const calculator = () => {
  // Create const to store first user number via prompt and convert to number
  const firstNumber = Number(prompt(`Enter first number`));
  // Create const to store user operator (+ - * / %) via prompt
  const operator = prompt(`Enter + to add, - to subtract, * to multiply, / to divide, or % to calculate remainder`);
  // Create const to store second number via prompt and convert to number
  const secondNumber = Number(prompt(`Enter second number`));

  // Create conditional that returns the calculation based on the user's desired operation
  // Alert the results of the calculation
  if (operator === '+') {
    alert(firstNumber + secondNumber);
  } else if (operator === '-') {
    alert(firstNumber - secondNumber);
  } else if (operator === '*') {
    alert(firstNumber * secondNumber)
  } else if (operator === '/') {
    alert(firstNumber / secondNumber);
  } else if (operator === '%') {
    alert(firstNumber % secondNumber);
  } else {
    alert(`Enter proper operator (+ - * / %)`);
  }
}

// Invoke the function
calculator();