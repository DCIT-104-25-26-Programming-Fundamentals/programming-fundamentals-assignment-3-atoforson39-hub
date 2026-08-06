const readlineSync = require('readline-sync');

function readMatrix(rows, cols, label) {
  const matrix = [];
  console.log(`Enter ${label} (${rows}x${cols}):`);
  for (let i = 0; i < rows; i++) {
    const row = readlineSync
      .question(`Enter row ${i + 1}: `)
      .trim()
      .split(' ')
      .map(Number);
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('  '));
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function addMatrices(a, b) {
  const rows = a.length;
  const cols = a[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(a[i][j] + b[i][j]);
    }
    result.push(newRow);
  }

  return result;
}

function multiplyMatrices(a, b) {
  const rowsA = a.length;
  const colsA = a[0].length;
  const colsB = b[0].length;
  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }

  return result;
}

function partA() {
  console.log('\n--- Part A: Transpose ---');
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');
  const matrix = readMatrix(rows, cols, 'matrix');

  console.log('\nOriginal Matrix:');
  printMatrix(matrix);

  console.log('\nTransposed Matrix:');
  printMatrix(transposeMatrix(matrix));
}

function partB() {
  console.log('\n--- Part B: Add Two Matrices ---');
  const rows = readlineSync.questionInt('Enter number of rows: ');
  const cols = readlineSync.questionInt('Enter number of columns: ');

  const matrixA = readMatrix(rows, cols, 'matrix A');
  const matrixB = readMatrix(rows, cols, 'matrix B');

  console.log('\nSum Matrix:');
  printMatrix(addMatrices(matrixA, matrixB));
}

function partC() {
  console.log('\n--- Part C: Multiply Two Matrices ---');
  const rowsA = readlineSync.questionInt('Enter rows for matrix A: ');
  const colsA = readlineSync.questionInt('Enter columns for matrix A: ');
  const matrixA = readMatrix(rowsA, colsA, 'matrix A');

  const rowsB = readlineSync.questionInt('Enter rows for matrix B: ');
  const colsB = readlineSync.questionInt('Enter columns for matrix B: ');

  if (rowsB !== colsA) {
    console.log('Error: Number of columns in A must equal number of rows in B.');
    return;
  }

  const matrixB = readMatrix(rowsB, colsB, 'matrix B');

  console.log('\nProduct Matrix (A x B):');
  printMatrix(multiplyMatrices(matrixA, matrixB));
}

function main() {
  partA();
  partB();
  partC();
}

main();