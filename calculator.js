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
    console.log(`Number1->${num1}. Num2->${num2}. Operator->${operator}`)
    switch (operator) {
        case "+":
            console.log("ADD CASE REACHED");
            return(add(num1, num2));

        case "-":
            console.log("SUBTRACT CASE REACHED");
            return(subtract(num1, num2));

        case "*":
            console.log("MULTIPLY CASE REACHED");
            return(multiply(num1, num2));

        case "/":
            console.log("DIVIDE CASE REACHED");
            return(divide(num1, num2));

        
    }
}

let calculatorValues = [];
//Click number functions:
function click1(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 1;
}
function click2(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 2;
}
function click3(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 3;
}
function click4(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 4;
}
function click5(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 5;
}
function click6(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 6;
}
function click7(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 7;
}
function click8(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 8;
}
function click9(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 9;
}
function click0(){
    const input = document.getElementById("itemInputOutputItem2");
    input.innerText += 0;
}

//Click pperator functions:
function clickAdd(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        calculatorValues.push(parseInt(input.innerText));
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
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        calculatorValues.push(parseInt(input.innerText));
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
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        calculatorValues.push(parseInt(input.innerText));
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
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        calculatorValues.push(parseInt(input.innerText));
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
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        calculatorValues.push(parseInt(input.innerText));
        input.innerText = doCalculation();


    }
    //console.log(calculatorValues);
}
function doCalculation(){
    let count = 0;
    let newArr;
    let result;
    console.log("#########DEBUG##############")
    console.log("");
    while (calculatorValues.length != 0) {
        console.log(calculatorValues);
        if (count === 0) {
            count +=1;
            newArr = calculatorValues.splice(0,3);
            result = operate(newArr[0], newArr[2], newArr[1]);
        }
        else{
            newArr = calculatorValues.splice(0,2);
            result = operate(result,newArr[1],newArr[0]);
        }
        console.log(calculatorValues);
        console.log(newArr);
        console.log(result);
        //let debug = prompt("debug");
    }
    return(result);
}
