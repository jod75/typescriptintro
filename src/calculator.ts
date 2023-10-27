function calculator(a: number, b: number, operator: string): number {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return NaN;
    }
}

const result = calculator(5, 3, "+");
console.log("Result: " + result);
