const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function addStudent() {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');
  const numScores = readlineSync.questionInt('How many scores? ');

  const scores = [];
  for (let i = 0; i < numScores; i++) {
    const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
    scores.push(score);
  }

  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}

function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('\nName            ID          Scores              Average');
  console.log('-------------------------------------------------------------');
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = calculateAverage(student.scores).toFixed(2);
    console.log(
      `${student.name.padEnd(16)} ${String(student.id).padEnd(11)} ${student.scores.join(', ').padEnd(19)} ${avg}`
    );
  }
}

function calculateAverageForStudent() {
  const id = readlineSync.questionInt('Enter student ID: ');
  const student = students.find((s) => s.id === id);

  if (!student) {
    console.log('Error: Student ID not found.');
    return;
  }

  const avg = calculateAverage(student.scores).toFixed(2);
  console.log(`${student.name}'s average score: ${avg}`);
}

function showMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    switch (choice) {
      case 1:
        addStudent();
        break;
      case 2:
        displayAllStudents();
        break;
      case 3:
        calculateAverageForStudent();
        break;
      case 4:
        console.log('Goodbye!');
        running = false;
        break;
      default:
        console.log('Error: Invalid choice. Please enter 1-4.');
    }
  }
}

main();