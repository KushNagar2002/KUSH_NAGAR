class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b !== 0) {
          return this.a / this.b;
        } else {
          return "Error: Division by zero";
        }
      default:
        return "Error: Invalid operation";
    }
  }
}

const calc1 = new Calculator(10.5, 2.5, "add");
console.log(calc1.calculate());

const calc2 = new Calculator(10, 0, "divide");
console.log(calc2.calculate());

const calc3 = new Calculator(7, 3, "multiply");
console.log(calc3.calculate());
