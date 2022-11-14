"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
function main() {
    const fStr = (0, readline_sync_1.question)('enter first number:\n');
    const operator = (0, readline_sync_1.question)('enter operator:\n');
    const lStr = (0, readline_sync_1.question)('enter first number:\n');
    const validInput = isNumber(fStr) && isOperator(operator) && isNumber(lStr);
    if (validInput) {
        const fNum = parseInt(fStr);
        const lNum = parseInt(lStr);
        const result = calculate(fNum, operator, lNum);
        console.log(result);
    }
    else {
        console.log('\n invalid input\n');
        main();
    }
}
function calculate(fNum, operator, lNum) {
    switch (operator) {
        case '+':
            return fNum + lNum;
        case '-':
            return fNum - lNum;
        case '*':
            fNum * lNum;
        case '/':
            fNum / lNum;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    const maybeNum = parseInt(str);
    const isNum = !isNaN(maybeNum);
    return isNum;
}
main();
