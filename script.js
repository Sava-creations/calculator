let currentResult = 0;
let currentInput = '';
let currentOperator = null;
let currentString='';

function setscreen(num) {
    if (currentInput=='0' && num=='0') {
        return; //Ends the function execution immediately
    }
   if(currentInput.includes('.') && num=='.'){ // Prevent multiple decimal points
        return; 
    }
    if (currentInput === '' && num === '.') {
        currentInput = '0'; // Handle leading zero for decimal point
    }
    if(document.getElementById('result').value!=0){ //if screen show number
        currentInput += num;
        currentString += num;
        document.getElementById('result').value = currentString;
    }
    else{ //if screen show 0
        currentInput+= num;//***************** */
        currentString += num;
        document.getElementById('result').value =currentString;
    }
}

function clearScreen(){
    currentResult = 0;
    currentInput = '';
    currentOperator = null;
    currentString='';
    document.getElementById('result').value = 0;
}

function setoperator(op) {
    // Check if the last character in currentString is an operator
    if (['+', '-', '*', '/'].includes(currentString.slice(-1))) {
        currentString = currentString.slice(0, -1); // Remove the last operator
    }
    if (currentResult!=0 && currentInput!='') {
        _calculate();
    }
    else if(currentInput!=''){
        currentResult = Number(currentInput);
        currentInput = '';
    }   
    currentOperator = op;
    currentString+=op;
    document.getElementById('result').value = currentString;
}

function _calculate(){
        let numer=Number(currentInput);
        if(currentOperator=='+'){
            currentResult += numer;
        }
        if(currentOperator=='-'){
            currentResult -= numer;
        }
        if(currentOperator=='*'){
            currentResult *= numer;
        }
        if(currentOperator=='/'){
            currentResult /= numer;
    }
    currentResult = parseFloat(currentResult.toFixed(10)); // fix precision error by converting number to sring with 10 digits and then back to a number
    document.getElementById('result').value = currentResult;
    currentInput='';
}
