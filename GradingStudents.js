/* https://www.hackerrank.com/challenges/grading/problem
 * pair programmed with Paxon Cheung */
'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on('end', function () {
  inputString = inputString.split('\n');
  main();
});
function readLine() {
  return inputString[currentLine++];
}
/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */
// Write your code here
function gradingStudents(grades) {
  const finalGrades = []
  // https://stackoverflow.com/questions/18953384/javascript-round-up-to-the-next-multiple-of-5
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      finalGrades.push(grades[i])
    } else {
      const rounded = Math.ceil(grades[i] / 5) * 5
      if (rounded - grades[i] < 3) {
        finalGrades.push(rounded)
      } else {
        finalGrades.push(grades[i])
      }
    }
  }
  return finalGrades
}
function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const gradesCount = parseInt(readLine().trim(), 10);
  let grades = [];
  for (let i = 0; i < gradesCount; i++) {
    const gradesItem = parseInt(readLine().trim(), 10);
    grades.push(gradesItem);
  }
  const result = gradingStudents(grades);
  ws.write(result.join('\n') + '\n');
  ws.end();
}