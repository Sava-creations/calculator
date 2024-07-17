let num1,num2,_answer,_operator;

function setscreen(num) {
    if(document.getElementById('result').value!=0)
        document.getElementById('result').value = document.getElementById('result').value +num;
    else
        document.getElementById('result').value = num;
}

function clearScreen(){
    document.getElementById('result').value = 0;
}

function setoperator(op) {
    num1 = document.getElementById('result').value;
    _operator = op;
    document.getElementById('result').value = '';
}
function _calculate(){
    num2=document.getElementById('result').value;
    if(_operator=='+'){
        _answer=Number(num1)+Number(num2);
    }
   if(_operator=='-'){
        _answer=Number(num1)-Number(num2);
    }
     if(_operator=='*'){
        _answer=Number(num1)*Number(num2);
    }
    if(_operator=='/'){
        _answer=Number(num1)/Number(num2);
    }
    
    document.getElementById('result').value = _answer;
}
