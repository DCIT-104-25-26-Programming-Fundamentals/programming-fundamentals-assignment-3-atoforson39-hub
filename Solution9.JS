const readlineSync = require('readline-sync');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}

function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}

function exponentiate(a, b) {
  return a ** b;
}

function getNumbers() {
  const a = readlineSync.questionFloat('Enter first number : ');
  const b = readlineSync.questionFloat('Enter second number: ');
  return { a, b };
}

function showMenu() {
  console.log('\n============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');

    if (choice === 7) {
      console.log('Goodbye!');
      running = false;
      continue;
    }

    if (choice < 1 || choice > 7) {
      console.log('Error: Invalid choice. Please enter 1-7.');
      continue;
    }

    const { a, b } = getNumbers();
    let result;
    let symbol;

    switch (choice) {
      case 1:
        result = add(a, b);
        symbol = '+';
        break;
      case 2:
        result = subtract(a, b);
        symbol = '-';
        break;
      case 3:
        result = multiply(a, b);
        symbol = '*';
        break;
      case 4:
        result = divide(a, b);
        symbol = '/';
        if (result === null) {
          console.log('Error: Cannot divide by zero.');
          continue;
        }
        break;
      case 5:
        result = modulus(a, b);
        symbol = '%';
        if (result === null) {
          console.log('Error: Cannot divide by zero.');
          continue;
        }
        break;
      case 6:
        result = exponentiate(a, b);
        symbol = '**';
        break;
    }

    console.log(`Result: ${a} ${symbol} ${b} = ${result.toFixed(2)}`);
  }
}

main();