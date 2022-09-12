//BASIC OPERATOR FUNCTIONS
function add(num1, num2){
    return(num1 + num2);
}
function subtract(num1,num2){
    return(num1 - num2);
}
function multiply(num1,num2){
    const cf = 10;
    return(((num1*cf)*(num2*cf)/(cf*cf)));
}
function divide(num1,num2){
    //SNARKY infinity comment!
    if (num2 == 0) {
      alert("Infinity is that which is boundless, endless, or larger than any natural number. It is often denoted by the infinity symbol.");
      return "INFINITY";
    }
    const cf = 10;
    return(((num1*(cf*cf)) / (num2*(cf*cf))));
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