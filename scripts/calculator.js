//Global array to hold order of user input
let calculatorValues = [];
//Arrays of button values for use in 
const numberBtnValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const commandBtnValues = ["+/-", "clear", ".", "del"];
const operatorBtnValues = ["/", "*", "+", "-"];

//Triggered when button pressed.
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {

    btn.addEventListener('click', function(e) {   
        const input = document.getElementById('displayOutput');

        //If number button update display
        if (numberBtnValues.includes(btn.textContent)) {                
            //logic to stop the user from entering 0's at the start. 
            if(btn.textContent == "0"){
                let allZero = allZeros(input.value);
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
        else if (commandBtnValues.includes(btn.textContent)){
            commandSort(btn.textContent);
        }
        //If operator button send to operator sort
        else if (operatorBtnValues.includes(btn.textContent)){
            operatorSort(btn.textContent);
        }
        else if(btn.textContent == "="){
            operatorSort(btn.textContent);
            //docalculations use bodmas
            doCalculations();
        }
        //button not found within arrays
        else{  
            console.log(`ERROR -> Button not found! ${btn.textContent}`);
        }
    })
})

function allZeros(string)
{   
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) !== "0"){   
            return false;      
        }
    }
    return true;
}

function doCalculations(){
    const output = document.getElementById('displayOutput');
    const input = document.getElementById('displayInput');
    //remove equals
    calculatorValues.pop();
    //loop through calculator values looking for all operators.
    //when operator found in array use the values to the left and right of it in a calculation.
    operatorBtnValues.forEach(operator =>{
        for (let i = 0; i < calculatorValues.length; i++) {
            if (calculatorValues[i].value == operator) {

                //create new object with results from operate()
                let num1 = parseFloat(calculatorValues[i-1].value);
                let num2 = parseFloat(calculatorValues[i+1].value)
                let result = operate(num1,num2,calculatorValues[i].value);
                let obj = {
                    type: "number",
                    value: result
                }
                //add in new object in place of elements you just used in calculation
                calculatorValues.splice(i-1,3,obj);                   
            } 
        }
    })
    
    let result = calculatorValues[0].value;
    if(typeof(result) == "string"){
        input.value += result;
        calculatorValues = [];
    }
    else if(typeof(result == "int")){
        //IMPORTANT JAVASCRIPT ROUNDING ERRORS HANDLED HERE
        //SEEMS TO BE .tofixed(12).toString() then parseFloat that works
        //CORRECTION FACTOR ALSO USED IN MULTIPLY AND DIVIDE FUNCTIONS!
        let numberResult = parseFloat(result.toFixed(12).toString());
        input.value += numberResult;
        output.value += numberResult;
        calculatorValues = [];
    }
}


