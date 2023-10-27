function decimalToBinary(decimalNumber: number): string {
    if (decimalNumber === 0) {
        return "0"; // Special case for 0
    }

    let binaryResult: string = "";

    while (decimalNumber > 0) {
        const remainder = decimalNumber % 2; // Get the remainder (0 or 1)
        binaryResult = remainder + binaryResult; // Prepend remainder to the binary result
        decimalNumber = Math.floor(decimalNumber / 2); // Get the quotient for the next iteration
    }

    return binaryResult;
}

const decimalValue = 25;
const binaryRepresentation = decimalToBinary(decimalValue);
console.log(`Binary representation of ${decimalValue}: ${binaryRepresentation}`);
