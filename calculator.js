//BASIC OPERATOR FUNCTIONS
function add(num1, num2){
    return(num1 + num2);
}
function subtract(num1,num2){
    return(num1 - num2);
}
function multiply(num1,num2){
    return(num1 * num2);
}
function divide(num1,num2){
    return(num1 / num2);
}

//Function to select specific operator function
function operate(num1, num2, operator){
    switch (operator) {
        case "+":
            return(add(num1, num2));

        case "-":
            return(subtract(num1, num2));

        case "*":
            return(multiply(num1, num2));

        case "/":
            return(divide(num1, num2));

        default:
            console.log("ERROR -> Wrong operator value was inputted into operate function");
            break;
    }
}

let calculatorValues = [];
//Number functions:
function click1(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "1";

}
function click2(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "2";
}
function click3(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "3";
}
function click4(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "4";
}
function click5(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "5";
}
function click6(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "6";
}
function click7(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "7";
}
function click8(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "8";
}
function click9(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "9";
}
function click0(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += "0";
}

//Operator functions:
function clickAdd(){
    const input = document.getElementById("itemInputOutputItem2");
    if (input.innerText != "") {
        calculatorValues.push(input.innerText);
        calculatorValues.push("+");
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText;
        calculation.innerText += "+";
        input.innerText = "";
        console.log(calculatorValues);
    }
}
function clickSubtract(){
    const input = document.getElementById("itemInputOutputItem2");
    if (input.innerText != "") {
        calculatorValues.push(input.innerText);
        calculatorValues.push("-");
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText;
        calculation.innerText += "-";
        input.innerText = "";
        console.log(calculatorValues); 
    }   
}
function clickMultiply(){
    const input = document.getElementById("itemInputOutputItem2");
    if (input.innerText != "") {
        calculatorValues.push(input.innerText);
        calculatorValues.push("*");
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText;
        calculation.innerText += "*";
        input.innerText = "";
        console.log(calculatorValues);  
    }
}
function clickDivide(){
    const input = document.getElementById("itemInputOutputItem2");
    if (input.innerText != "") {
        calculatorValues.push(input.innerText);
        calculatorValues.push("/");
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText;
        calculation.innerText += "/";
        input.innerText = "";
        console.log(calculatorValues);  
    } 
}

//Clear and equals functions:
function clickClear(){
    const input = document.getElementById("itemInputOutputItem2");
    const calculation = document.getElementById("itemInputOutputItem1");
    input.innerHTML = "";
    calculation.innerHTML = "";
    calculatorValues = [];
}
function clickEquals(){
    const input = document.getElementById("itemInputOutputItem2");
    calculatorValues.push(input.innerText);
    


    console.log(calculatorValues);
}
