let currentResult = 0;
let currentInput = '';
let currentOperator = null;
let currentString='';
let pendingOperation=false;

function setscreen(num) {
    if (currentInput=='0' && num=='0') {
        return; //Ends the function execution immediately
    }
   if(currentInput.includes('.') && num=='.'){ // Prevent multiple decimal points
        return; 
    }
    if (currentInput === '' && num === '.') {         // Handle leading zero for decimal point
        currentInput= '0'; 
        currentString='0';
    }
        currentInput += num;
        currentString += num;
        document.getElementById('result').value = currentString;
}

function clearScreen(){
    currentResult = 0;
    currentInput = '';
    currentOperator = null;
    currentString='';
    document.getElementById('result').value = 0;
}

function setoperator(op) {
    if (currentInput===''){
        return;
    }
    // Check if the last character in currentString is an operator
    if (['+', '-', '*', '/'].includes(currentString.slice(-1))) {
        currentString = currentString.slice(0, -1); // Remove the last operator
    }
    if (currentResult!=0 && currentInput!='') {
        pendingOperation=true;
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
        if(currentOperator=='/') {
            currentResult /= numer;
    }
    currentResult = parseFloat(currentResult.toFixed(10)); // fix precision error by converting number to sring with 10 digits and then back to a number
    if(pendingOperation==true){
        currentInput='';
        pendingOperation=false;
    }
    else{
        document.getElementById('result').value = currentResult;
        currentString=String(currentResult);
        currentInput='';
    }  
}