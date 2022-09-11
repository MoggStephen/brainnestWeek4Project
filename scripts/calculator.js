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
let numberBtnValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//Get specific button pressed
//If number update display
//If not number trigger sort to send to appropriate function
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {

    btn.addEventListener('click', function(e) {   
        const input = document.getElementById('displayInput');
        console.log("DEBUG");
        if (numberBtnValues.includes(btn.textContent)) {

            //Handling multiple 0's
            if (btn.textContent === "0" && input.value.includes("0")) {}
            else{
                input.value += btn.textContent;
                console.log("number pressed");
            }
            
        }
        else{  
            console.log("command pressed");
            sort(btn.textContent);
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
