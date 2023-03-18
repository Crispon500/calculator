
//create button variables
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");
const decimalButton = document.querySelector("#decimal");
const multiplyButton = document.querySelector("#multiplication");
const divideButton = document.querySelector("#division");
const subtractButton = document.querySelector("#subtraction");
const additionButton = document.querySelector("#addition");
const equalButton = document.querySelector("#equate");
const clearButton = document.querySelector("#clear");
const screenText = document.getElementById("screen-text");

//give the buttons actions
oneButton.onclick= () => {operand += '1'; updateScreen(operand)};
twoButton.onclick = () => {operand += '2'; updateScreen(operand)};
threeButton.onclick = () => {operand += '3'; updateScreen(operand)};
fourButton.onclick = () => {operand += '4'; updateScreen(operand)};
fiveButton.onclick = () => {operand += '5'; updateScreen(operand)};
sixButton.onclick = () => {operand += '6'; updateScreen(operand)};
sevenButton.onclick = () => {operand += '7'; updateScreen(operand)};
eightButton.onclick = () => {operand += '8'; updateScreen(operand)};
nineButton.onclick = () => {operand += '9'; updateScreen(operand)};
zeroButton.onclick = () => {operand += '0'; updateScreen(operand)};
decimalButton.onclick = () => {if(!operand.includes(".")){operand += '.'}; updateScreen(operand)};
clearButton.onclick = () => {baseOperand = ''; operand = '0'; operator = ''; result = 0; updateScreen(operand)};
multiplyButton.onclick = () => operation("*");
divideButton.onclick = () => operation("/");
subtractButton.onclick = () => operation("-");
additionButton.onclick = () => operation("+");
equalButton.onclick = () => operate(baseOperand,operand,operator);



//operation variables
let baseOperand = '';
let result = 0;
let operand = '';
let operator = '';

function updateScreen(num){
    screenText.innerText = parseFloat(num.substring(0,17));
}

function operate(StrA,StrB,op){
    a = parseFloat(StrA);
    b = parseFloat(StrB);
    switch (op){
        case "*":
            result = a * b;
            updateScreen(result.toString());
            break;
        case "/":
            result = a/b;
            updateScreen(result.toString());
            break;
        case "-":
            result = a-b;
            updateScreen(result.toString());
            break;
    }
}

function operation(op){
    operator = op;
    if(baseOperand === ''){
        baseOperand = operand;
    } else{
        baseOperand = result.toString();
    }
    operand = '';
}