let currentString='';

function setscreen(num) {
    if (currentString=='0' && num=='0') { 
        return;                                                                                      //Ends the function execution immediately
    }
   if(currentString.includes('.') && num=='.'){                                                      // Prevent multiple decimal points
        return; 
    }
    if (currentString === '' && num === '.') {                                                       // Handle leading zero for decimal point
        currentString='0';
    }
        currentString += num;
        document.getElementById('result').value= currentString;
}

function clearScreen(){
    currentString='';
    document.getElementById('result').value= 0;
}

function setoperator(op) {
    if (currentString === ''){                                                                       //avoid showing operators without any digit
        return;
    }
    if (['+', '-', '*', '/','%'].includes(currentString[currentString.length - 1])) {                // Check if the last character in currentString is an operator
        currentString = currentString.slice(0, -1);                                                  // Remove the last operator
    }
    currentString+=op;
    document.getElementById('result'). value= currentString;
}

function brackets() {
    
    const openCount = (currentString.match(/\(/g) || []).length;                                     //count of open brackets
    const closeCount = (currentString.match(/\)/g) || []).length;

    if (currentString === '' || ['+', '-', '*', '/', '('].includes(currentString.slice(-1))) {       // Check if the last character is an open bracket
        currentString += '(';
    } else if (openCount > closeCount) {
        currentString += ')';
    } else {
        currentString += '(';
    }
    document.getElementById('result').value = currentString;
}

function setpercent() {
    let value=parseFloat(currentString.slice(0,-1))/100;
    document.getElementById('result').value= value;
    currentString = result.toString();
}

function oneClear() {
        currentString=currentString.slice(0,-1);
        document.getElementById('result').value= currentString||0;    //if currentString is empty it will show 0 if it '' empty string or null as they are also falsy values it will show 0
}

function _calculate(){
    try{
        if(currentString[currentString.length - 1] === '%')
            setpercent();
        else{
            let result=eval(currentString);
            result = parseFloat(result.toFixed(10));                                       // fix precision error by converting number to sring with 10 digits and then back to a number
            document.getElementById('result').value = result;
            currentString = result.toString();
        }
    }
    catch(error){
        document.getElementById('result').value = 'Error';
        currentString = '';
    }
}
