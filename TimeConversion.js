'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});
function readLine() {
    return inputString[currentLine++];
}
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
function timeConversion(s) {
    // Write your code here
    const numberToCalculate = []
    const finalArr = []
    const arrChar = s.split("")
    if (arrChar[8] === 'A') {
        if (arrChar[0] === '1' && arrChar[1] === '2') {
            finalArr.push('0')
            finalArr.push('0')
            for (let i = 2; i < arrChar.length - 2; i++) {
                finalArr.push(arrChar[i])
            }  
        } else {
            for (let i = 0; i < arrChar.length - 2; i++) {
                finalArr.push(arrChar[i])
            }    
        }
    } else {
        console.log("PM")
         if (arrChar[0] === '1' && arrChar[1] === '2') {
            for (let i = 0; i < arrChar.length - 2; i++) {
              finalArr.push(arrChar[i])
            }
        } else {
          numberToCalculate.push(arrChar[0])
          numberToCalculate.push(arrChar[1])
          let joined = numberToCalculate.join('')
          const finalJoined = parseInt(joined) + 12
          finalArr.push(finalJoined)
          for (let i = 2; i < arrChar.length - 2; i++) {
              finalArr.push(arrChar[i])
            }
        }
    }
    const finalString = finalArr.join('')
    return finalString
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const result = timeConversion(s);
    ws.write(result + '\n');
    ws.end();
}