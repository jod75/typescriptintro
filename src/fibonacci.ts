function generateFibonacci(n: number): number[] {
    const sequence: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

const n = 10;
const fibonacciSeries = generateFibonacci(n);
console.log(`First ${n} numbers in the Fibonacci sequence: ${fibonacciSeries.join(', ')}`);
