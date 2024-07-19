
let currentResult = 0;
let currentInput = '';
let currentOperator = null;

function setscreen(num) {
    if(document.getElementById('result').value!=0){
        currentInput += num;
        document.getElementById('result').value = currentInput;
    }
    else{
        currentInput += num;
        document.getElementById('result').value = num;
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
    if(currentInput!=''){
        currentResult = Number(currentInput);//
        currentInput = '';//
    }
    
    currentOperator = op;//
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