const readlineSync = require('readline-sync');

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function main() {
  const num = readlineSync.questionInt('Enter a number: ');

  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is NOT a prime number.`);
  }
}

main();