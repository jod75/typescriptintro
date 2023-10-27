function isPrime(number: number): boolean {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

for (let n = 1; n <= 20; n++) {
    console.log(`${n} is a prime number: ${isPrime(n)}`);
}