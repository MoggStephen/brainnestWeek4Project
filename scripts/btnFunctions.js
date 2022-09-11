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

    //Firstly find out if an operator is already in output.value;
    let result = false;
    operatorBtnValues.forEach(operator => {
        if (output.value.includes(operator)) {
            result = true;
        }
    });

    //Next either replace or add the operator to output.value
    if (result = true) {
        console.log("replace");
        let newValue = output.value.slice(0,-1);
        output.value = newValue += btnText;
    }  
    else if(result = false){
        console.log("add")
        output.value += btnText;
    }
    else{
        console.log("ERROR -> Something went wrong in operator sort")
    }
}