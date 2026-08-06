const readlineSync = require('readline-sync');

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateAverage(arr) {
  return calculateSum(arr) / arr.length;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const num = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(num);
  }

  console.log('\nResults:');
  console.log(`Sum:     ${calculateSum(numbers)}`);
  console.log(`Average: ${calculateAverage(numbers)}`);
  console.log(`Maximum: ${findMax(numbers)}`);
  console.log(`Minimum: ${findMin(numbers)}`);
}

main();