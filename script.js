let currentResult = 0;
let currentInput = '';
let currentOperator = null;

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
        document.getElementById('result').value = currentInput;
    }
    else{ //if screen show 0
        currentInput+= num;//***************** */
        document.getElementById('result').value =currentInput;
    }
}

function clearScreen(){
    currentResult = 0;
    currentInput = '';
    currentOperator = null;
    document.getElementById('result').value = 0;
}

function setoperator(op) {
    if (currentResult!=0 && currentInput!='') {
        _calculate();
    }
    else if(currentInput!=''){
        currentResult = Number(currentInput);
        currentInput = '';
    }
    
    currentOperator = op;
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
