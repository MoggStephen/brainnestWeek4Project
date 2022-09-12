function commandSort(btnText){
    const input = document.getElementById('displayInput');
    const output = document.getElementById('displayOutput');
    switch (btnText) {
        case "+/-":
            if (output.value.includes('-')) {
                let text = output.value.replace('-','');
                output.value = text;
            }
            else{
                output.value = "-" + output.value;
            }
            break;
        case "clear":
            input.value = "";
            output.value = "";
            calculatorValues = [];
            break;
        case ".":
            if(!output.value.includes('.')){
                output.value += '.';
            }
            break;
        case "del":
            let newValue = output.value.slice(0,-1); 
            output.value = newValue; 
            break;
        default:
            console.log(`ERROR -> command button not found! ${btnText}`)
            break;
    }
}
function operatorSort(btnText){
    const input = document.getElementById('displayInput');
    const output = document.getElementById('displayOutput');

    //If input.value is empty simply add to input.value
    if(input.value == ""){
        let newValue = output.value + btnText;
        input.value += newValue;
        addCalculation(newValue);
        output.value = "";
    }
    //if input.value isnt empty
    else if(input.value != ""){
        //if output.value is empty replace operator
        if (output.value == ""){
            let newVal = input.value.slice(0,-1);
            input.value = newVal + btnText;
        }
        //if output.value isnt empty add output.value
        else if(output.value != ""){
            let newValue = output.value + btnText;
            input.value = input.value + newValue;
            addCalculation(newValue);
            output.value = "";
        }
    }
    else{
        console.log("ERROR -> Something went wrong in operator sort")
    }
    console.log(calculatorValues)
}

function addCalculation(value){
    const operatorOrEqualsBtnValues = ["%", "/", "*", "-", "+", "="];
    
    let number = "";
    for (let i = 0; i < value.length; i++) {
        //When i isnt 0 and the character is a dash. The dash is an operator!!!
        if(value.charAt(i) == "-" && i == 0){
            number += value.charAt(i);          
        } 
        else{
            operatorOrEqualsBtnValues.forEach(operator => {
    
                if (value.charAt(i) == operator) {
                    calculatorValues.push({
                        type: "number",
                        value: number
                    })
                    calculatorValues.push({
                        type: "operator",
                        value: value.charAt(i)
                    })                   
                }               
            });
            number += value.charAt(i); 
        }
    }
}