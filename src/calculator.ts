enum Operation {
    ADD = "add",
    SUBTRACT = "subtract",
    MULTIPLY = "multiply",
    DIVIDE = "divide",
  }
  
  interface ICalculator {
    calculate(x: number, y: number): number | string;
  }
  
  class Calculator implements ICalculator {
    constructor(private operation: Operation) {}
  
    calculate(x: number, y: number): number | string {
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
          } else {
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
  
  function calculate(calculator: ICalculator, x: number, y: number): number | string {
    return calculator.calculate(x, y);
  }
  
  console.log(calculate(addCalculator, 5, 3)); // 8
  console.log(calculate(subtractCalculator, 5, 3)); // 2
  console.log(calculate(multiplyCalculator, 5, 3)); // 15
  console.log(calculate(divideCalculator, 5, 0)); // "Division by zero"
  