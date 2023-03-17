
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
const multiplyButton = document.querySelector("multiplation");
const divideButton = document.querySelector("#division");
const subtractButton = document.querySelector("#subtration");
const additionButton = document.querySelector("#addition");
const equalButton = document.querySelector("#equate");
const clearButton = document.querySelector("#clear");
const screenText = document.getElementById("screen-text");

//give the buttons actions
oneButton.onclick= () => {operand += '1'; updateScreen()};
twoButton.onclick = () => {operand += '2'; updateScreen()};
threeButton.onclick = () => {operand += '3'; updateScreen()};
fourButton.onclick = () => {operand += '4'; updateScreen()};
fiveButton.onclick = () => {operand += '5'; updateScreen()};
sixButton.onclick = () => {operand += '6'; updateScreen()};
sevenButton.onclick = () => {operand += '7'; updateScreen()};
eightButton.onclick = () => {operand += '8'; updateScreen()};
nineButton.onclick = () => {operand += '9'; updateScreen()};
zeroButton.onclick = () => {operand += '0'; updateScreen()};
decimalButton.onclick = () => {if(!operand.includes(".")){operand += '.'}; updateScreen()};
clearButton.onclick = () => {operand = '0'; updateScreen()}

//operation variables
let decimal = false;
let operation = '';
let operand = '';
let operator = '';

function updateScreen(num){
    operand = operand.substring(0,17);
    screenText.innerText = operand;
}