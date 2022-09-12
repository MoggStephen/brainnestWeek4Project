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
        case "=":

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
        input.value += output.value + btnText;
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
            input.value = input.value + output.value + btnText
            output.value = "";
        }
    }
    else{
        console.log("ERROR -> Something went wrong in operator sort")
    }
}