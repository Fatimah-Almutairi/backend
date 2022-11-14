import {question} from 'readline-sync';
type Operator = '+' | '-' | '*' | '/';


function main () :void{
    const fStr : string = question ('enter first number:\n');
    const operator : string = question ('enter operator:\n');
    const lStr : string = question ('enter first number:\n');

    const validInput :boolean = isNumber(fStr) && isOperator(operator) && isNumber(lStr);

    if(validInput){
        const fNum: number = parseInt(fStr);
        const lNum: number = parseInt(lStr);
        const result = calculate(fNum, operator as Operator, lNum);
    console.log(result)
    }else {
        console.log('\n invalid input\n')
        main()
    }
}

function calculate(fNum: number, operator: Operator, lNum: number){
    switch(operator){
        case '+':
            return fNum + lNum;
        case '-':
            return fNum - lNum;
        case '*' :
           return fNum * lNum;
        case '/':
            return fNum / lNum;
    }
}

function isOperator(operator: string):boolean
{
    switch (operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: 
            return false;
    }
}

function isNumber (str: string): boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
}
main()
// --------------------------- Q2