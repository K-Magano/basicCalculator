var newLine = true; // Determines if the next thing the user types should be on a new line 
var value1;
var currentOperator;


//numbers 1-9 pressed
function digitBtnPressed(button){

if (newLine == true) {
    document.getElementById("inputBox").value = button;
    newLine = false;
} else {var currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value = currentValue + button;}
 
}

// AC BUTTON pressed
function btnACPressed(){
    document.getElementById("inputBox").value = 0; 
    newLine = true;
}


//Operator button + -* /
function operatorBtnPressed(operator){
 currentOperator = operator;
 value1 = parseInt(document.getElementById("inputBox").value);
 newLine =true;
}

// equals button
function equalsBtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var finalTotal;

    switch(currentOperator){
        case "+":
            finalTotal = value1 + value2;
            break; 
        case "-":
            finalTotal = value1 - value2;
            break
        case "*":
            finalTotal = value1 * value2;
            break;
        case "/":
            finalTotal = value1 / value2;
            break;
    }

    document.getElementById("inputBox").value = finalTotal;
    value1 = 0;
    newLine = true;
}