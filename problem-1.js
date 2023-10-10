class Calculator {
    constructor() {}
  
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }

    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    }
  
    calculate(a, b, operation) {
      switch (operation) {
        case "add":
          return this.add(a, b);
        case "subtract":
          return this.subtract(a, b);
        case "multiply":
          return this.multiply(a, b);
        case "divide":
          return this.divide(a, b);
        default:
          return "Invalid operation";
      }
    }
  }
  const calculator = new Calculator();
  const a = 10;
  const b = 5;
  const operation = "add"; 
  const result = calculator.calculate(a, b, operation);
  console.log(`Result of ${a} ${operation} ${b} is: ${result}`);