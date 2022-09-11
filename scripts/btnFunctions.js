function sort(btnText){
    const input = document.getElementById('displayInput');
    const output = document.getElementById('displayOutput');
    let commandBtnValues = ["+/-", "Clear", "=", "."];
    let operatorBtnValues = ["%", "/", "*", "-", "+"];
    switch (btnText) {
        //Command Operations
        case "+/-":
            if (input.value.includes('-')) {
                let text = input.value.replace('-','');
                input.value = text;
            }
            else{
                input.value = "-" + input.value;
            }
            break;
        case "Clear":
            input.value = "";
            output.value = "";
            calculatorValues = [];
            break;
        case ".":
            if(!input.value.includes('.')){
                input.value += '.';
            }
            break;
        //Operators
        case "%":

            break;
        case "/":
            
            break;
        case "*":
            
            break;
        case "-":
            
            break
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