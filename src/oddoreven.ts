function isEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

let number = 7;
console.log(`${number} is ${isEvenOrOdd(number)}.`);
number = 10;
console.log(`${number} is ${isEvenOrOdd(number)}.`);
