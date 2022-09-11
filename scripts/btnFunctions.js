function sort(btnText){
    const input = document.getElementById('displayInput');
    const output = document.getElementById('displayOutput');
    let commandBtnValues = ["+/-", "clear", "=", ".", "del"];
    let operatorBtnValues = ["%", "/", "*", "-", "+"];
    switch (btnText) {
        //Command Operations
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
            let newValue = output.value.toString().slice(0,-1); 
            output.value = newValue; 
            break;
        //Operators
        case "%":
            
            break;
        case "/":
            
            break;
        case "*":
            
            break;
        case "-":
            
            break;
        case "+":
            
            break;
        //Equals
        case "equals":
            
            break; 
        default:
            console.log(`ERROR -> btn not found! ${btnText}`)
            break;
    }
}