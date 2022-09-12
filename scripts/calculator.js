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
      return "INFINITY";
    }
    return(num1 / num2);
}
function percentage(num1,num2){
    return (num2 / 100) * num1;
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
        
        case "%":
            return(percentage(num1,num2))

        case "":
            console.log("ERROR -> NO OPERATOR FOUND --------------");
            return "You didnt enter an operator";
    }
}

//Global array to hold order of user input
let calculatorValues = [];
//Arrays of button values for use in 
const numberBtnValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const commandBtnValues = ["+/-", "clear", "=", ".", "del"];
const operatorBtnValues = ["%", "/", "*", "-", "+"];
//Get specific button pressed
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {

    btn.addEventListener('click', function(e) {   
        const input = document.getElementById('displayOutput');

        //If number update display
        if (numberBtnValues.includes(btn.textContent)) {                
            //logic to stop the user from entering 0's at the start. 
            if(btn.textContent == "0"){
                let allZero = allZeros(input.value);
                console.log(allZero + " " + input.value);
                if (input.value == "" || allZero == false) {
                    input.value += btn.textContent;
                    console.log("number pressed"); 
                }
            }
            else{
                input.value += btn.textContent;
                console.log("number pressed"); 
            }    
        }
        //If command button send to command sort
        else if (commandBtnValues.includes(btn.textContent)) {
            commandSort(btn.textContent);
        }
        //If operator button send to operator sort
        else if (operatorBtnValues.includes(btn.textContent)){
            operatorSort(btn.textContent);
        }
        //button not found within arrays
        else{  
            console.log(`ERROR -> Button not found! ${btn.textContent}`);
        }
    })
})

function doCalculation(){
    let count = 0;
    let result;
    //When calculator array.length === 0 -> exit loop
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

function allZeros(string)
{   
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) !== "0"){   
            return false;      
        }
    }
    return true;
}
