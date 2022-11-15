"use strict";
exports.__esModule = true;
// -----------------------------------  Q1
var readline_sync_1 = require("readline-sync");
function main() {
    var fStr = (0, readline_sync_1.question)('enter first number:\n');
    var operator = (0, readline_sync_1.question)('enter operator:\n');
    var lStr = (0, readline_sync_1.question)('enter last number:\n');
    var validInput = isNumber(fStr) && isOperator(operator) && isNumber(lStr);
    if (validInput) {
        var fNum = parseInt(fStr);
        var lNum = parseInt(lStr);
        var result = calculate(fNum, operator, lNum);
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
            return fNum * lNum;
        case '/':
            return fNum / lNum;
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
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
var user1 = {
    Name: 'Fatimah',
    Age: 27,
    Specialization: 'IT'
};
var user2 = {
    Name: 'Bassam',
    Age: 9,
    Specialization: 'Doctor'
};
var user3 = {
    Name: 'Mohammed',
    Age: 37,
    Specialization: 'Engineer'
};
console.log(user1.Name);
console.log(user3.Age);
console.log(user2.Specialization);
