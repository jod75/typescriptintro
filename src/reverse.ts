function reverseString(inputString: string): string {
    return inputString.split('').reverse().join('');
}

const input = "Hello, TypeScript!";
console.log(`Reversed: ${reverseString(input)}`);