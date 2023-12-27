var Operation;
(function (Operation) {
    Operation["ADD"] = "add";
    Operation["SUBTRACT"] = "subtract";
    Operation["MULTIPLY"] = "multiply";
    Operation["DIVIDE"] = "divide";
})(Operation || (Operation = {}));
class Calculator {
    constructor(operation) {
        this.operation = operation;
    }
    calculate(x, y) {
        switch (this.operation) {
            case Operation.ADD:
                return x + y;
            case Operation.SUBTRACT:
                return x - y;
            case Operation.MULTIPLY:
                return x * y;
            case Operation.DIVIDE:
                if (y !== 0) {
                    return x / y;
                }
                else {
                    return "Division by zero";
                }
            default:
                return "Invalid operation";
        }
    }
}
const addCalculator = new Calculator(Operation.ADD);
const subtractCalculator = new Calculator(Operation.SUBTRACT);
const multiplyCalculator = new Calculator(Operation.MULTIPLY);
const divideCalculator = new Calculator(Operation.DIVIDE);
function calculate(calculator, x, y) {
    return calculator.calculate(x, y);
}
console.log(calculate(addCalculator, 5, 3)); // 8
console.log(calculate(subtractCalculator, 5, 3)); // 2
console.log(calculate(multiplyCalculator, 5, 3)); // 15
console.log(calculate(divideCalculator, 5, 0)); // "Division by zero"
