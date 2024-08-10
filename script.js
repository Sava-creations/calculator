let currentString='';

function setscreen(num) {
    if (currentString=='0' && num=='0') { 
        return; //Ends the function execution immediately
    }
   if(currentString.includes('.') && num=='.'){ // Prevent multiple decimal points
        return; 
    }
    if (currentString === '' && num === '.') {         // Handle leading zero for decimal point
        currentString='0';
    }
        currentString += num;
        // document.getElementById('result').value = currentString;
        document.getElementById('result').value= currentString;
}

function clearScreen(){
    currentString='';
    document.getElementById('result').value= 0;
}

function setoperator(op) {
    if (currentString === ''){ //avoid showing operators without any digit
        return;
    }
    
    if (['+', '-', '*', '/'].includes(currentString.slice(-1))) { // Check if the last character in currentString is an operator
        currentString = currentString.slice(0, -1); // Remove the last operator
    }
    currentString+=op;
    document.getElementById('result'). value= currentString;
}

function brackets(){
    if (currentString.includes('(')){
        currentString+=')';
    }else{
        currentString+='(';
    }
    document.getElementById('result').value= currentString;
}
function _calculate(){
    let result=eval(currentString);
 
    result = parseFloat(result.toFixed(10)); // fix precision error by converting number to sring with 10 digits and then back to a number
        document.getElementById('result').value = result;
        currentString = result.toString();
}