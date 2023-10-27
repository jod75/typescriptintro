function calculateMinMaxAverage(arr: number[]): { min: number, max: number, avg: number } {
    if (arr.length === 0) {
        return { min: 0, max: 0, avg: 0 };
    }

    let min = arr[0];
    let max = arr[0];
    let sum = 0;

    for (const num of arr) {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        sum += num;
    }

    const avg = sum / arr.length;

    return { min, max, avg };
}

// Example usage:
const numbers = [7, 2, 10, 5, 8];
const result = calculateMinMaxAverage(numbers);
console.log(`Min: ${result.min}, Max: ${result.max}, Average: ${result.avg}`);
