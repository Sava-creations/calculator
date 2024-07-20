let currentResult = 0;
let currentInput = '';
let currentOperator = null;

function setscreen(num) {
    if (currentInput=='0' && num=='0') {
        return; //Ends the function execution immediately
    }
    else if(document.getElementById('result').value!=0){
        currentInput += num;
        document.getElementById('result').value = currentInput;
    }
    else{
        if(num=='.'){
            currentInput='0';
        }
        currentInput += num;
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
    document.getElementById('result').value = currentResult;
    currentInput='';
    
}
