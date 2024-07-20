let currentResult = 0;
let currentInput = '';
let currentOperator = null;

function setscreen(num) {
    if (currentInput=='0' && num=='0') {
        return; //Ends the function execution immediately
    }
    else if(currentInput.includes('.') && num=='.'){
        return;
        
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
    currentResult = parseFloat(currentResult.toFixed(10)); // fix precision error by converting number to sring with 10 digits and then back to a number
    document.getElementById('result').value = currentResult;
    currentInput='';
    
}
console.log(Number('456'));
console.log(parseInt('456'));
console.log(parseFloat('456.250000000000000000'));

console.log(Number('456.567.1236.569'));
console.log(parseInt('456.567.1236.569'));
console.log(parseFloat('456.567.1236.569'));

console.log(Number('12.99'));
console.log(parseInt('12.99'));
console.log(parseFloat('12.99'));

console.log(Number('12.99 wewv'));
console.log(parseInt('12.99 wvert'));
console.log(parseFloat('12.99 vaeyt'));
