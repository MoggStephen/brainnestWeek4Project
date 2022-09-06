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
    //SNARKY infinity comment!
    if (num2 == 0) {
      alert("Infinity is that which is boundless, endless, or larger than any natural number. It is often denoted by the infinity symbol.");
      return "WOW INFINITY";
    }
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
        
        case "":
            console.log("NO OPERATOR FOUND --------------");
            return "You didnt enter an operator";
    }
}

//Global array to hold order of user input
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

//Click operator functions:
function clickAdd(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        //Add associated userinput into global array
        calculatorValues.push(parseInt(input.innerText));
        calculatorValues.push("+");
        //Update latest calculation to calculator ui
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText + "+";
        //Reset user input area for more input
        input.innerText = "";
    }
}
function clickSubtract(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        //Add associated userinput into global array
        calculatorValues.push(parseInt(input.innerText));
        calculatorValues.push("-");
        //Update latest calculation to calculator ui
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText + "-";
        //Reset user input area for more input
        input.innerText = "";
    }   
}
function clickMultiply(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        //Add associated userinput into global array
        calculatorValues.push(parseInt(input.innerText));
        calculatorValues.push("*");
        //Update latest calculation to calculator ui
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText + "*";
        //Reset user input area for more input
        input.innerText = "";
    }
}
function clickDivide(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    if (input.innerText != "") {
        //Add associated userinput into global array
        calculatorValues.push(parseInt(input.innerText));
        calculatorValues.push("/");
        //Update latest calculation to calculator ui
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText + "/";
        //Reset user input area for more input
        input.innerText = "";
    } 
}

//Clear and equals functions:
function clickClear(){
    //Reset all relevent values.
    const input = document.getElementById("itemInputOutputItem2");
    const calculation = document.getElementById("itemInputOutputItem1");
    input.innerHTML = "";
    calculation.innerHTML = "";
    calculatorValues = [];
}
function clickEquals(){
    const input = document.getElementById("itemInputOutputItem2");
    //If user hasnt entered any numbers, dont do anything
    console.log("DEBUGGING");
    
    //Only execute code when calculator has values and inner text has values.
    //This stops equals sign being clicked after it has already been clicked.
    if (input.innerText != "" && calculatorValues.length !== 0) {
             
        console.log("####reached####")
        //Add associated userinput into global array
        calculatorValues.push(parseInt(input.innerText));
        //Update latest calculation to calculator ui
        const calculation = document.getElementById("itemInputOutputItem1");
        calculation.innerText += input.innerText + "=";
        //DO THE CALCULATIONS AND SET INNER HTML
        input.innerText = doCalculation();
          
    }
}
function doCalculation(){
    let count = 0;
    let result;
    //When calculator array === 0 -> exit loop
    while (calculatorValues.length !== 0) {
        //The first iteration takes information from the array only, therefore we splice 3 values off.
        //The rest of the iterations will take values from the array and from result variable, therefore we splice 2 values off.
        if (count === 0) {
            count +=1;
            let newArr = calculatorValues.splice(0,3);
            result = operate(newArr[0], newArr[2], newArr[1]);
        }
        else{
            let newArr = calculatorValues.splice(0,2);
            result = operate(result,newArr[1],newArr[0]);
        }
    }
    return(result);
}
