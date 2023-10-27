function generateRandomIntegers(count: number, min: number, max: number): number[] {
    const randomIntegers: number[] = [];

    for (let i = 0; i < count; i++) {
        const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
        randomIntegers.push(randomInteger);
    }

    return randomIntegers;
}

function displayAscendingOrder(arr: number[]): void {
    const sortedArray = arr.slice().sort((a, b) => a - b);
    console.log("Random Integers in Ascending Order:");
    console.log(sortedArray.join(', '));
}

// Generate 10 random integers between 1 and 100 
const randomIntegers = generateRandomIntegers(10, 1, 100);

// Display them in ascending order
displayAscendingOrder(randomIntegers);
